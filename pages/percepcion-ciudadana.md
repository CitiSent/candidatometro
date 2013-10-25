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
            <span class='question'>¿de qué hablan los candidatos?</span> <i class='icon-arrow-right'></i>
        </a>
    </div>
</div>

{% include social.html %}

<!-- Libraries -->
<script src="{{ site.baseurl }}/js/lib/d3.v3.min.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/underscore.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/backbone.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/candidatometro.js"></script>

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
            { name: 'franco parisi',          img: '{{ site.baseurl }}/img/fot_franco_parisi.jpg' },
            { name: 'Marcel Claude',          img: '{{ site.baseurl }}/img/fot_marcel_claude.jpg' },
            { name: 'Ricardo Israel',         img: '{{ site.baseurl }}/img/fot_ricardo_israel.jpg' },
            { name: 'Marco Enríquez-Ominami', img: '{{ site.baseurl }}/img/fot_marco_enriquez-ominami.jpg' },
            { name: 'Roxana Miranda',         img: '{{ site.baseurl }}/img/fot_roxana_miranda.jpg' },
            { name: 'Michelle Bachelet',      img: '{{ site.baseurl }}/img/fot_michelle_bachelet.jpg' },
            { name: 'Evelyn Matthei',         img: '{{ site.baseurl }}/img/fot_evelyn_matthei.jpg' },
            { name: 'Alfredo Sfeir',          img: '{{ site.baseurl }}/img/fot_alfredo_sfeir.jpg' },
            { name: 'Tomás Jocelyn-Holt',     img: '{{ site.baseurl }}/img/fot_tomas_jocelyn-holt.jpg' },

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

