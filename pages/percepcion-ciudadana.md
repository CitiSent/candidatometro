---
layout: base
title: Percepción Ciudadana
---

<style>
.barchart {
    height: 100px;
}
</style>

<h1 class='thin orange'>{{ page.title }}</h1>
<div class='row'>
    <div class='col-md-12 air-top'>
        <div class='tabla-de-agendas' id='chart'>
            <!-- Charts Here -->
        </div>
    </div>
</div>

<!-- Libraries -->
<script src="{{ site.baseurl }}/js/lib/d3.v3.min.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/underscore.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/backbone.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/candidatometro.js"></script>

<script>

    var jsonUrl = '{{ site.baseurl }}/data/percepcion_ciudadana.json';

    var dset = Candidatometro.Dataset()
        .json(jsonUrl);



    var a = {};
    _.extend(a, Backbone.Events);

    a.listenTo(dset, 'dataset:ready', function() {

        var barchart = Candidatometro.BarChart();

        var data = [
            {
                name: 'Michelle Bachelet Jeria',
                img: '{{ site.baseurl }}/img/fot_michelle_bachelet.jpg',
                data: dset.items().get('Michelle Bachelet Jeria')
            },
            {
                name: 'Evelyn Matthei Fornet',
                img: '{{ site.baseurl }}/img/fot_evelyn_matthei.jpg',
                data: dset.items().get('Evelyn Matthei Fornet')
            },
            {
                name: 'Evelyn Matthei Fornet',
                img: '{{ site.baseurl }}/img/fot_evelyn_matthei.jpg',
                data: dset.items().get('Evelyn Matthei Fornet')
            },
            {
                name: 'Evelyn Matthei Fornet',
                img: '{{ site.baseurl }}/img/fot_evelyn_matthei.jpg',
                data: dset.items().get('Evelyn Matthei Fornet')
            },
            {
                name: 'Evelyn Matthei Fornet',
                img: '{{ site.baseurl }}/img/fot_evelyn_matthei.jpg',
                data: dset.items().get('Evelyn Matthei Fornet')
            },
            {
                name: 'Evelyn Matthei Fornet',
                img: '{{ site.baseurl }}/img/fot_evelyn_matthei.jpg',
                data: dset.items().get('Evelyn Matthei Fornet')
            },
            {
                name: 'Evelyn Matthei Fornet',
                img: '{{ site.baseurl }}/img/fot_evelyn_matthei.jpg',
                data: dset.items().get('Evelyn Matthei Fornet')
            },
            {
                name: 'Evelyn Matthei Fornet',
                img: '{{ site.baseurl }}/img/fot_evelyn_matthei.jpg',
                data: dset.items().get('Evelyn Matthei Fornet')
            }
        ];


        var rowCandidato = d3.select('#chart').selectAll('div, .candidato, .row')
            .data(data)
            .enter()
            .append('div')
            .attr('class', 'candidato row');

        // Avatar
        var divAvatar = rowCandidato.append('div')
            .attr('class', 'col-sm-2 avatar');

        divAvatar
            .append('img')
            .attr('class', 'img-circle img-responsive')
            .attr('src', function(d) { return d.img; });

        divAvatar.append('h6')
            .attr('class', 'bold uc')
            .text(function(d) { return d.name; });

        var divGraph = rowCandidato.append('div')
            .attr('class', 'col-sm-10 graph')
            .call(barchart);


        // rowCandidato.append('div')
        //     .attr('class', 'col-sm-10 graph');

        // d3.select('#chart').selectAll('div.candidato')
        //     .data(data)
        //     .enter()
        //     .append('div')
        //     .classed('candidato', true)
        //     .call(chart);

    });

</script>

