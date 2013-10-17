---
layout: base
title: ¿Cómo son percibidos los candidatos?
---

<div class='row'>
    <div class='col-sm-7'>
        <h1 class='thin orange'>{{ page.title }}</h1>
    </div>
    <div class='col-sm-5 tright'>
        <a class='next-question' href='{{ site.baseurl }}/pages/de-que-hablan'>
            <span class='question'>¿de qué hablan los candidatos?</span> <i class='icon-arrow-right'></i>
        </a>
    </div>
</div>

<div class='row'>
    <div class='col-md-12 air-top'>
        <div class='tabla-comparativa' id='charts'>
            <!-- Charts Here -->
        </div>
    </div>
</div>

<div class='row'>
    <div class='col-sm-12 tright'>
        <a class='next-question' href='{{ site.baseurl }}/pages/de-que-hablan'>
            <span class='question'>¿de qué hablan los?</span> <i class='icon-arrow-right'></i>
        </a>
    </div>
</div>

{% include social.html %}
{% include metodo-percepcion.html %}

<!-- Libraries -->
<script src="{{ site.baseurl }}/js/lib/d3.v3.min.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/underscore.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/backbone.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/candidatometro.js"></script>

<script>

    var jsonUrl = '{{ site.baseurl }}/data/candidatos.json';

    var dset = Candidatometro.Dataset()
        .json(jsonUrl);

    var a = {};
    _.extend(a, Backbone.Events);

    a.listenTo(dset, 'dataset:ready', function() {

        var from = new Date('2013-10-01'),
            to = new Date('2013-12-01');

        var data = [
            {name: 'Evelyn Matthei',         img: 'fot_evelyn_matthei.jpg'},
            {name: 'Michelle Bachelet',      img: 'fot_michelle_bachelet.jpg'},
            {name: 'Marco Enríquez-Ominami', img: 'fot_marco_enriquez-ominami.jpg'},
            {name: 'Alfredo Sfeir',          img: 'fot_alfredo_sfeir.jpg'},
            {name: 'Roxana Miranda',         img: 'fot_roxana_miranda.jpg'},
            {name: 'Marcel Claude',          img: 'fot_marcel_claude.jpg'},
            {name: 'Ricardo Israel',         img: 'fot_ricardo_israel.jpg'},
            {name: 'Tomás Jocelyn-Holt',     img: 'fot_tomas_jocelyn-holt.jpg'},
            {name: 'franco parisi',          img: 'fot_franco_parisi.jpg'}
        ];

        data.forEach(function(d) {
            d.data = dset.items().get(d.name);
        });

        var barchart = Candidatometro.BarChart()
            .timeDomain(d3.time.days(from, to));

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
            .attr('src', function(d) { return '{{ site.baseurl }}/img/' + d.img; });

        divAvatar.append('h6')
            .attr('class', 'bold uc')
            .text(function(d) { return d.name; });

        // Graph
        var divGraph = rowCandidato.append('div')
            .attr('class', 'col-sm-11 graph')
            .call(barchart);

    });

</script>

