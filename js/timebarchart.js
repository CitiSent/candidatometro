var citisent = citisent || {};

citisent.TimeBarChart = function() {
    'use strict';

    var margin = {top: 10, left: 30, bottom: 60, right: 10},
        width = 600 - margin.left - margin.right,
        height = 100 - margin.top - margin.bottom;

    var data = null;

    var selection = null;

    function chart(_selection) {
        selection = _selection;
        selection.each(function() {

            var div = d3.select(this),
                svg = div.append('svg');

            // Set the chart width and height, based in its container size
            chart.width(chart.toInt(div.style('width')))
                 .height(chart.toInt(div.style('height')));

            svg
                .attr('width', chart.width())
                .attr('height', chart.height());

            // Chart Group
            var gc = svg.append('g')
                .attr('transform', chart.t(margin.left, margin.top))
                .classed('bc-chart', true);

            // X Axis Group
            svg.append('g')
                .attr('transform', chart.t(margin.left, margin.top + height))
                .classed('bc-xaxis', true)
                .classed('axis', true);

            // Chart Background
            gc.append('rect')
                .attr('width', width)
                .attr('height', height)
                .classed('bc-bg', true);

        });

        chart.trigger('chart:ready');
    }

    chart.update = function() {

        if ((selection) && (data)) {
            selection.each(function() {

                var div = d3.select(this),
                    svg = div.select('svg');

                chart.width(chart.toInt(div.style('width')))
                     .height(chart.toInt(div.style('height')));

                svg
                    .attr('width', chart.width())
                    .attr('height', chart.height());

                var gc = svg.select('g.bc-chart')
                        .attr('transform', chart.t(margin.left, margin.top)),
                    gx = svg.select('g.bc-xaxis')
                        .attr('transform', chart.t(margin.left, margin.top + height));

                // Compute the bar width
                var barWidth = width / data.length;

                var xScale = d3.time.scale()
                    .domain(d3.extent(data, function(d) { return d.date; }))
                    .range([0, width - barWidth]);

                var yScale = d3.scale.linear()
                    .domain([0, d3.max(data, function(d) { return d3.max([d.pos, d.neg]) + d.neu; })])
                    .range([0, height / 2]);

                var barItems = gc.selectAll('g.bar-item')
                    .data(data)
                    .enter()
                    .append('g')
                    .classed('bar-item', true)
                    .attr('transform', function(d) { return chart.t(xScale(d.date), height / 2); });

                barItems.append('rect')
                    .classed('bc-bar-pos', true)
                    .attr('y', function(d) { return -yScale(d.pos) - yScale(d.neu / 2); })
                    .attr('width', barWidth - 2)
                    .attr('height', function(d) { return yScale(d.pos); });

                barItems.append('rect')
                    .classed('bc-bar-neu', true)
                    .attr('y', function(d) { return -yScale(d.neu / 2); })
                    .attr('width', barWidth - 2)
                    .attr('height', function(d) { return yScale(d.neu); });

                barItems.append('rect')
                    .classed('bc-bar-neg', true)
                    .attr('y', function(d) { return yScale(d.neu / 2); })
                    .attr('width', barWidth - 2)
                    .attr('height', function(d) { return yScale(d.neg) + yScale(d.neu / 2); });

                // X Axis
                var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient('bottom')
                    .ticks(d3.time.monday, 1)
                    .tickFormat(d3.time.format('%a %d %b'));

                gx.call(xAxis);

            });
        }

    };

    chart.toInt = function(value) {
        return parseInt(value, 10);
    };

    chart.t = function(dx, dy) {
        return 'translate(' + dx + ',' + dy + ')';
    };

    // Accessors

    chart.data = function(value) {
        if (!arguments.length) { return data; }
        data = value;

        data.forEach(function(d) {
            d.date = new Date(d.date);
        });

        chart.trigger('data:ready');
        return chart;
    };

    chart.width = function(value) {
        if (!arguments.length) { return width + margin.left + margin.right; }
        width = value - margin.left - margin.right;
        return chart;
    };

    chart.height = function(value) {
        if (!arguments.length) { return height + margin.top + margin.bottom; }
        height = value - margin.top - margin.bottom;
        return chart;
    };

    _.extend(chart, Backbone.Events);
    chart.on('data:ready chart:ready', chart.update);


    return chart;
};