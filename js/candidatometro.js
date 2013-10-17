
var Candidatometro = Candidatometro || {};


Candidatometro.BubbleChart = function() {
    'use strict';

    var data = d3.map();
    var mdataset;

    var selection;

    function chart(_selection) {
        selection = _selection;
        selection.each(function() {
            // Structure
        });
    }

    chart.update = function() {
        selection.each(function(datum) {

            var div = d3.select(this);

            // Get the Data
            var topics = data.get(datum.name);

            var divCell = div.selectAll('div')
                .data(topics)
                .enter()
                .append('div')
                .attr('class', 'graph-cell');

            divCell.append('div')
                .attr('class', 'visible-xs visible-sm topic-label')
                .text(function(d) { return d.name; });

            var divCont = divCell.append('div')
                .attr('class', 'svg-container');

            var height = chart.int(divCont.style('height')),
                width = height,
                maxRadius = height / 2 - 1;

            var svg = divCont
                .append('svg')
                    .attr('width', width)
                    .attr('height', height);

            var rScale = d3.scale.sqrt()
                .domain(d3.extent(topics, function(d) { return d.total; }))
                .range([2, maxRadius]);

            svg.append('circle')
                .attr('cx', width / 2)
                .attr('cy', height / 2)
                .attr('r', function(d) { return rScale(d.total); })
                .attr('fill', '#29B0E9');

        });
    };

    chart.int = function(value) { return parseInt(value, 10); };

    chart.mdataset = function(_dataset) {
        mdataset = _dataset;
        chart.listenTo(mdataset, 'multidataset:ready', chart.parseData);
        return chart;
    };

    chart.parseData = function() {
        mdataset.keys().forEach(function(key) {
            var topics = mdataset.get(key).items();
            var _data = [];
            topics.forEach(function(_key, _value) {
                var topic = {name: _key, pos: 0, neg: 0, neu: 0, total: 0};
                _value.forEach(function(dkey, dvalue) {
                    topic.pos += dvalue.pos;
                    topic.neg += dvalue.neg;
                    topic.neu += dvalue.neu;
                });
                topic.total = topic.pos + topic.neg + topic.neu;
                _data.push(topic);
            });
            data.set(key, _data);
        });
        chart.trigger('data:ready');
    };

    _.extend(chart, Backbone.Events);
    chart.on('data:ready', chart.update);

    return chart;
};


Candidatometro.BarChart = function() {
    'use strict';

    // Initial Layout
    var margin = {top: 2, right: 10, bottom: 18, left: 30},
        height = 80;

    var timeDomain = null;
    var postDomain = null;

    var selection;

    function chart(_selection) {
        selection = _selection;
        selection.each(function() {

            var div = d3.select(this),
                svg = div.append('svg');

            var divW = chart.int(div.style('width')) - 30;

            svg
                .attr('width', divW)
                .attr('height', height);

            svg.append('g')
                .attr('class', 'bc-chart')
                .attr('transform', chart.svgt([margin.left, margin.top]));

            svg.append('g')
                .attr('class', 'bc-xaxis')
                .attr('transform', chart.svgt([margin.left, height + margin.top]));

            svg.append('g')
                .attr('class', 'bc-yaxis')
                .attr('transform', chart.svgt([0, margin.top]));

        });

        chart.update();
    }

    chart.update = function() {
        selection.each(function(datum) {

            var data = _.pluck(datum.data.entries(), 'value');

            var div = d3.select(this),
                width = chart.int(div.style('width')) - margin.left - margin.top,
                height = chart.int(div.style('height')) - margin.top - margin.bottom,
                svg = div.select('svg'),
                gchart = svg.select('g.bc-chart'),
                gxaxis = svg.select('g.bc-xaxis'),
                gyaxis = svg.select('g.bc-yaxis');

            // Adjust the Layout
            // -----------------
            svg
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom);

            gxaxis
                .attr('transform', chart.svgt([margin.left, height + margin.top]));

            gyaxis
                .attr('transform', chart.svgt([margin.left, margin.top]));

            // Scales
            // ------

            var barW = chart.int(width / chart.timeDomain().length);

            // X Scale
            var xScale = d3.time.scale()
                .domain(d3.extent(chart.timeDomain()))
                .rangeRound([barW / 2, width - barW / 2]);

            // Y Extent and Scale
            var dExtent = d3.extent(data, function(d) { return d3.max([d.pos + d.neu / 2, d.neg + d.neu / 2]); }),
                pExtent = chart.postDomain() ? chart.postDomain() : dExtent;

            var yScale = d3.scale.linear()
                .domain(pExtent)
                .range([2, height / 2]);

            // Data Items
            // ----------

            // Bar Groups
            var gItem = gchart.selectAll('g.bc-item')
                .data(data)
                .enter()
                .append('g')
                .attr('class', 'bc-item')
                .attr('transform', function(d) {
                    return chart.svgt([xScale(d.date) - barW / 2, height / 2]);
                })
                .on('mouseover', function(d) {
                    d3.select(this).append('text')
                        .attr('class', 'bc-info')
                        .attr('x', 10)
                        .attr('y', 0)
                        .text(d.date);

                });

            // Positive Bars
            gItem.append('rect')
                .attr('y', function(d) { return -yScale(d.pos + d.neu / 2); })
                .attr('width', barW)
                .attr('height', function(d) { return yScale(d.pos + d.neu / 2); })
                .attr('class', 'bc-pos');

            // Negative Bars
            gItem.append('rect')
                .attr('y', 0)
                .attr('width', barW)
                .attr('height', function(d) { return yScale(d.neg + d.neu / 2); })
                .attr('class', 'bc-neg');

            // Neutral Bars
            gItem.append('rect')
                .attr('y', function(d) { return -yScale(d.neu / 2); })
                .attr('width', barW)
                .attr('height', function(d) { return yScale(d.neu); })
                .attr('class', 'bc-neu');

            // Phantom Bars for the Tooltip
            gItem.append('rect')
                .attr('y', -height / 2)
                .attr('height', height)
                .attr('width', barW)
                .classed('bc-phantom', true)
                .on('mouseover', function(d) {
                    // Create the tooltip with its content
                    var tooltip = d3.select('body').append('div')
                        .attr('class', 'bc-tooltip');
                    // Title
                    tooltip.append('p')
                        .attr('class', 'bc-tooltip-title')
                        .text(d.date.toDateString());
                    // Info
                    var pInfo = tooltip.append('p')
                        .attr('class', 'bc-tooltip-info');

                    pInfo.append('span').text(d.pos).attr('class', 'bc-pos');
                    pInfo.append('span').text(' + ');
                    pInfo.append('span').text(d.neu).attr('class', 'bc-neu');
                    pInfo.append('span').text(' + ');
                    pInfo.append('span').text(d.neg).attr('class', 'bc-neg');
                    pInfo.append('span').text(' = ');
                    pInfo.append('span').text(d.pos + d.neu + d.neg);

                })
                .on('mousemove', function() {
                    var tooltip = d3.select('body').select('div.bc-tooltip'),
                        tH = chart.int(tooltip.style('height'));
                    // Adjust the position of the tooltip so it follows the pointer
                    tooltip
                        .style('left', (d3.event.pageX + 10) + 'px')
                        .style('top', (d3.event.pageY - tH / 2) + 'px');
                })
                .on('mouseout', function() {
                    d3.select('body').select('div.bc-tooltip').remove();
                });

            // Axis
            // ----

            var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient('bottom');

            // Construct the inverted y axis
            var invYScale = d3.scale.linear()
                .domain(pExtent)
                .range([height / 2, 2]);

            var yAxis = d3.svg.axis()
                .scale(invYScale)
                .ticks(4)
                .outerTickSize(0)
                .orient('left');

            gxaxis.call(xAxis);
            gyaxis.call(yAxis);


        });
    };

    // Accessors
    chart.timeDomain = function(value) {
        if (!arguments.length) { return timeDomain; }
        timeDomain = value;
        return chart;
    };

    chart.postDomain = function(value) {
        if (!arguments.length) { return postDomain; }
        postDomain = value;
        return chart;
    };

    // Utils
    chart.int = function(value) { return parseInt(value, 10); };
    chart.svgt = function(value) { return 'translate(' + value + ')'; };
    chart.svgs = function(value) { return 'scale(' + value + ')'; };


    _.extend(chart, Backbone.Events);
    return chart;
};


Candidatometro.MultiDataset = function() {
    'use strict';

    var data;
    var numItems = 0;
    var dataset = d3.map();

    function dset() { }

    dset.data = function(_data) {
        data = _data;
        data.forEach(function(d) {
            var _dataset = Candidatometro.Dataset().json(d.url);
            dataset.set(d.name, _dataset);
            dset.listenTo(_dataset, 'dataset:ready', dset.waitData);
        });
        return dset;
    };

    dset.waitData = function() {
        numItems += 1;
        if (numItems === data.length) {
            dset.trigger('multidataset:ready');
        }
    };

    dset.get = function(key) {
        return dataset.get(key);
    };

    dset.keys = function() {
        return dataset.keys();
    };

    dset.map = function() {
        return dataset;
    };

    _.extend(dset, Backbone.Events);
    return dset;
};

Candidatometro.Dataset = function() {
    'use strict';

    var data;

    var items = d3.map();

    function dset() {}

    // Accessors

    dset.json = function(jsonUrl) {
        d3.json(jsonUrl, function(jsonData) {

            // Aggregates the data items of all the children
            function addChildren(parent) {
                // Add the parent values
                parent.values = d3.map();
                parent.data.forEach(function(d) {
                    var _d = d.t.split('-').map(function(u) { return +u; });
                    parent.values.set(d.t, {neg: d.n, neu: d.m, pos: d.p, date: new Date(_d[0], _d[1] - 1, _d[2])});
                });

                // Add the children values
                if (parent.children) {
                    parent.children.forEach(function(child) {
                        addChildren(child);
                        child.values.forEach(function(ck, cv) {
                            var pv = parent.values.get(ck);
                            parent.values.set(ck, {
                                neg: pv.neg + cv.neg,
                                neu: pv.neu + cv.neu,
                                pos: pv.pos + cv.pos,
                                date: pv.date
                            });
                        });
                    });
                }
            }

            // Aggregate the data for all the children under the first level
            data = jsonData;
            data.children.forEach(function(child) {
                addChildren(child);
                items.set(child.name, child.values);
            });

            // Notifies that the data is ready
            dset.trigger('dataset:ready');
        });
        return dset;
    };

    dset.data = function() {
        return data;
    };

    dset.items = function() {
        return items;
    };

    _.extend(dset, Backbone.Events);
    return dset;
};

