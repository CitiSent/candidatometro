
var Candidatometro = Candidatometro || {};

Candidatometro.BarChart = function() {
    'use strict';

    // Initial Layout
    var margin = {top: 10, right: 10, bottom: 10, left: 10},
        height = 80;

    var domain;

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
                .attr('transform', chart.svgt([margin.left, margin.top]))
                .append('rect')
                .attr('class', 'bc-bg')
                .attr('width', divW - margin.left - margin.right)
                .attr('height', height - margin.top - margin.bottom);

        });

        chart.update();
    }

    chart.update = function() {
        selection.each(function(datum) {

            var div = d3.select(this),
                divw = chart.int(div.style('width')) - 30,
                svg = div.select('svg'),
                gchart = svg.select('g.bc-chart');

            console.log(div.style('height'));

            // Adjust the Layout
            svg
                .attr('width', divw)
                .attr('height', height);

            gchart.select('rect.bc-bg')
                .attr('width', divw)
                .attr('height', height);

            var barW = divw / domain.length;

            var xScale = d3.scale.linear()
                .domain(domain)
                .range([0, divw - barW]);

            console.log(datum.data.entries().map(function(d) { return d.value; }));


            gchart.selectAll('rect.item')
                .data(datum.data.entries())
                .enter()
                .append('rect')
                .attr('class', 'item')
                .attr('x', function(d, i) { return barW * i; })
                .attr('width', barW)
                .attr('height', 10)
                .attr('fill', '#0000a4');





        });
    };

    // Accessors
    chart.domain = function(value) {
        if (!arguments.length) { return domain; }
        domain = value;
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

