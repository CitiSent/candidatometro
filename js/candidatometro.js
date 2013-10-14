
var Candidatometro = Candidatometro || {};

Candidatometro.BarChart = function() {
    'use strict';

    // Initial Layout
    var margin = {top: 2, right: 10, bottom: 18, left: 10},
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
                gxaxis = svg.select('g.bc-xaxis');

            // Adjust the Layout
            // -----------------
            svg
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom);

            gxaxis
                .attr('transform', chart.svgt([margin.left, height + margin.top]));

            // Scales
            // ------

            var barW = chart.int(width / chart.timeDomain().length);

            // X Scale
            var xScale = d3.time.scale.utc()
                .domain(d3.extent(chart.timeDomain()))
                .rangeRound([barW / 2, width - barW / 2]);

            // Y Extent and Scale
            var dExtent = d3.extent(data, function(d) { return d3.max([d.pos + d.neu / 2, d.neg + d.neu / 2]); }),
                pExtent = chart.postDomain() ? chart.postDomain() : dExtent;

            var yScale = d3.scale.linear()
                .domain(pExtent)
                .range([4, height / 2]);

            // Data Items
            // ----------

            var gItem = gchart.selectAll('g.bc-item')
                .data(data)
                .enter()
                .append('g')
                .attr('class', 'bc-item')
                .attr('transform', function(d) {
                    return chart.svgt([xScale(d.date) - barW / 2, height / 2]);
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

            // Neutral bars
            gItem.append('rect')
                .attr('y', function(d) { return -yScale(d.neu / 2); })
                .attr('width', barW)
                .attr('height', function(d) { return yScale(d.neu); })
                .attr('class', 'bc-neu');


            // Time Axis
            // ---------

            var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient('bottom');

            gxaxis.call(xAxis);

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


    _.extend(chart, Backbone.Events);
    return chart;
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
                    parent.values.set(d.t, {neg: d.n, neu: d.m, pos: d.p, date: new Date(d.t)});
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

