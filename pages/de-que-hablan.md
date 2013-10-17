---
layout: standard
title: ¿de qué hablan los candidatos?
---

<!-- Next Question -->
<div class='row'>
    <div class='col-sm-6'>
        <h1 class='thin orange'>{{ page.title }}</h1>
    </div>
    <div class='col-sm-6 tright'>
        <a class='next-question' href='{{ site.baseurl }}/pages/percepcion-ciudadana'>
            <span class='question'>¿qué opina la gente de los candidatos?</span> <i class='icon-arrow-right'></i>
        </a>
    </div>
</div>


<div class='row row-topics'>
    <div class='tabla-comparativa' id='charts'>

        <!-- Topic Labels on Desktop -->
        <div class='col-md-2'>
            <div class='hidden-xs hidden-sm labels'>
                <div class='topic-label'>Educación</div>
                <div class='topic-label'>Salud</div>
                <div class='topic-label'>Economía</div>
                <div class='topic-label'>Gobernabilidad y Estado</div>
                <div class='topic-label'>Energía y Medio Ambiente</div>
                <div class='topic-label'>Seguridad</div>
                <div class='topic-label'>Transporte</div>
                <div class='topic-label'>Defensa y Política Exterior</div>
            </div>
        </div>

        <!-- Vertical Graphs Here -->

    </div>
</div>

<div class='row'>
    <div class='col-sm-12 tright'>
        <a class='next-question' href='{{ site.baseurl }}/pages/percepcion-ciudadana'>
            <span class='question'>¿qué opina la gente de los candidatos?</span> <i class='icon-arrow-right'></i>
        </a>
    </div>
</div>

{% include social.html %}
{% include metodo-agendas.html %}

<!-- Libraries -->
<script src="{{ site.baseurl }}/js/lib/d3.v3.min.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/underscore.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/backbone.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/candidatometro.js"></script>
<script>

    var data = [
        {name: 'Evelyn Matthei',         url: 'agenda_matthei.json',          img: 'fot_evelyn_matthei.jpg'},
        {name: 'Michelle Bachelet',      url: 'agenda_bachelet.json',         img: 'fot_michelle_bachelet.jpg'},
        {name: 'Marco Enríquez-Ominami', url: 'agenda_enriquez_ominami.json', img: 'fot_marco_enriquez-ominami.jpg'},
        {name: 'Alfredo Sfeir',          url: 'agenda_sfeir.json',            img: 'fot_alfredo_sfeir.jpg'},
        {name: 'Roxana Miranda',         url: 'agenda_miranda.json',          img: 'fot_roxana_miranda.jpg'},
        {name: 'Marcel Claude',          url: 'agenda_claude.json',           img: 'fot_marcel_claude.jpg'},
        {name: 'Ricardo Israel',         url: 'agenda_israel.json',           img: 'fot_ricardo_israel.jpg'},
        {name: 'Tomás Jocelyn-Holt',     url: 'agenda_jocelyn_holt.json',     img: 'fot_tomas_jocelyn-holt.jpg'},
        {name: 'franco parisi',          url: 'agenda_parisi.json',           img: 'fot_franco_parisi.jpg'}
    ];

    data.forEach(function(d) {
        d.url = '{{ site.baseurl }}/data/agenda/' + d.url;
    });

    var mdset = Candidatometro.MultiDataset().data(data);

    var bubbleChart = new Candidatometro.BubbleChart()
        .mdataset(mdset);

    // <div class='col-md-1'>
    //   <div class='avatar'>
    //     <img class='img-circle img-responsive' src='{{ site.baseurl }}/img/fot_evelyn_matthei.jpg'>
    //     <h6 class='bold uc'>Evelyn Matthei</h6>
    //   </div>
    //
    //   <div class='graph'>
    //     <div class='graph-cell'>
    //       <div class='visible-xs visible-sm topic-label'>Educación</div>
    //     </div>
    //     <div class='graph-cell'>
    //       <div class='visible-xs visible-sm topic-label'>Salud</div>
    //     </div>
    //     <div class='graph-cell'>
    //       <div class='visible-xs visible-sm topic-label'>Economía</div>
    //     </div>
    //     <div class='graph-cell'>
    //       <div class='visible-xs visible-sm topic-label'>Gobernabilidad y Estado</div>
    //     </div>
    //     <div class='graph-cell'>
    //       <div class='visible-xs visible-sm topic-label'>Energía y Medio Ambiente</div>
    //     </div>
    //     <div class='graph-cell'>
    //       <div class='visible-xs visible-sm topic-label'>Seguridad</div>
    //     </div>
    //     <div class='graph-cell'>
    //       <div class='visible-xs visible-sm topic-label'>Transporte</div>
    //     </div>
    //     <div class='graph-cell'>
    //       <div class='visible-xs visible-sm topic-label'>Defensa y Política Exterior</div>
    //     </div>
    //   </div>
    // </div>


    var colCandidato = d3.select('#charts').selectAll('div.col-md-1')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'col-md-1');

    var divAvatar = colCandidato.append('div')
        .attr('class', 'avatar');

    var divChart = colCandidato.append('div')
        .attr('class', 'graph');

    divAvatar.append('img')
        .attr('class', 'img-circle img-responsive')
        .attr('src', function(d) { return '{{ site.baseurl }}/img/' + d.img; });

    divAvatar.append('h6')
        .attr('class', 'bold uc')
        .text(function(d) { return d.name; });

    divChart.call(bubbleChart);

</script>