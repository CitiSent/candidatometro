---
layout: standard
title: ¿de qué hablan los candidatos?
---

<div id="chart">
    <div class="col-md-3"></div>
</div>

<!-- Libraries -->
<script src="{{ site.baseurl }}/js/lib/d3.v3.min.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/underscore.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/backbone.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/candidatometro.js"></script>
<script>

    var data = [
        {name: 'Evelyn Matthei',         url: 'agenda/agenda_matthei.json', img: 'fot_evelyn_matthei.jpg'},
        {name: 'Michelle Bachelet',      url: 'agenda/agenda_bachelet.json', img: 'fot_michelle_bachelet.jpg'},
        {name: 'Marco Enríquez-Ominami', url: 'agenda/agenda_enriquez_ominami.json', img: 'fot_marco_enriquez-ominami.jpg'},
        {name: 'Alfredo Sfeir',          url: 'agenda/agenda_sfeir.json', img: 'fot_alfredo_sfeir.jpg'},
        {name: 'Roxana Miranda',         url: 'agenda/agenda_miranda.json', img: 'fot_roxana_miranda.jpg'},
        {name: 'Marcel Claude',          url: 'agenda/agenda_claude.json', img: 'fot_marcel_claude.jpg'},
        {name: 'Ricardo Israel',         url: 'agenda/agenda_israel.json', img: 'fot_ricardo_israel.jpg'},
        {name: 'Tomás Jocelyn-Holt',     url: 'agenda/agenda_jocelyn_holt.json', img: 'fot_tomas_jocelyn-holt.jpg'},
        {name: 'franco parisi',          url: 'agenda/agenda_parisi.json', img: 'fot_franco_parisi.jpg'}
    ];

    var colCandidato = d3.select('#chart').selectAll('div.col-md-1')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'col-md-1');



    colCandidato.text(function(d) { return d.name; });

</script>