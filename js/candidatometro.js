
var Candidatometro = Candidatometro || {};

Candidatometro.BarChart = function() {
    'use strict';

    var selection;

    function chart(_selection) {
        selection = _selection;
        selection.each(function(datum) {

            var data = datum.data;

            var div = d3.select(this),
                svg = div.append('svg');

            var divW = chart.int(div.style('width')),
                divH = chart.int(div.style('height'));

            svg
                .attr('width', divW)
                .attr('height', divH);

            console.log(data);


        });
    }

    // Utils

    chart.int = function(value) {
        return parseInt(value, 10);
    };

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
                    parent.values.set(d.t, {neg: d.n, neu: d.m, pos: d.p});
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
                                pos: pv.pos + cv.pos
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

