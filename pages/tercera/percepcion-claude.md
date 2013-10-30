---
layout: embed
title: ¿Cómo son percibidos los candidatos?
---

<div class='row'>
    <div class='col-md-12 air-top'>
        <div class='tabla-comparativa' id='charts'>
            <!-- Charts Here -->
        </div>
    </div>
</div>

<!-- Libraries -->
<script src="{{ site.baseurl }}/js/datavis.min.js" charset="utf-8"></script>
<script>

    var jsonUrl = '{{ site.baseurl }}/data/citisent_json/json_study_74.json';

    var dset = Candidatometro.Dataset()
        .json(jsonUrl);

    var a = {};
    _.extend(a, Backbone.Events);

    a.listenTo(dset, 'dataset:ready', function() {

        var from = new Date('2013-10-01'),
            to = new Date('2013-12-01');

        var data = [
            { name: 'Marcel Claude',          img: '{{ site.baseurl }}/img/fot_marcel_claude.jpg' }
        ];

        data.forEach(function(d) {
            d.data = dset.items().get(d.name);
        });

        var barchart = Candidatometro.BarChart()
            .timeDomain(d3.time.days(from, to));

        var totals = Candidatometro.Totals();

        var rowCandidato = d3.select('#charts').selectAll('div.row.candidato')
            .data(data)
            .enter()
            .append('div')
            .attr('class', 'row row-candidato');

        // Avatar
        var divAvatar = rowCandidato.append('div')
            .attr('class', 'col-sm-1')
            .append('div')
            .attr('class', 'avatar');

        divAvatar
            .append('img')
            .attr('class', 'img-circle img-responsive')
            .attr('src', function(d) { return d.img; });

        divAvatar.append('h6')
            .attr('class', 'bold uc')
            .text(function(d) { return d.name; });

        // Graph
        var divGraph = rowCandidato.append('div')
            .attr('class', 'col-sm-9 graph')
            .call(barchart);

        var divTotals = rowCandidato.append('div')
            .attr('class', 'col-sm-2 tc-info');

        divTotals.call(totals);

    });

</script>

