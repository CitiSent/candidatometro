---
layout: embed
title: ¿De qué hablan las candidatas?
---

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


<script src="{{ site.baseurl }}/js/datavis.min.js"></script>
<script>

    var data = [
        {
            name: 'Michelle Bachelet',
            url: '{{ site.baseurl }}/data/citisent_json/json_study_candidatometro_65.json',
            img: '{{ site.baseurl }}/img/fot_michelle_bachelet.jpg'
        },
        {
            name: 'Evelyn Matthei',
            url: '{{ site.baseurl }}/data/citisent_json/json_study_candidatometro_66.json',
            img: '{{ site.baseurl }}/img/fot_evelyn_matthei.jpg'
        },
        {
            name: 'Ciudadanía',
            url: '{{ site.baseurl }}/data/citisent_json/json_study_candidatometro_75.json',
            img: '{{ site.baseurl }}/img/fot_la_calle.jpg'
        }
    ];


    var mdset = Candidatometro.MultiDataset().data(data);

    var bubbleChart = new Candidatometro.BubbleChart()
        .mdataset(mdset);

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
        .attr('src', function(d) { return  d.img; });

    divAvatar.append('h6')
        .attr('class', 'bold uc')
        .text(function(d) { return d.name; });

    divChart.call(bubbleChart);

</script>