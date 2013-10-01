---
layout: base
title: Time BarChart
---

<div class="container container-responsive organic">
    <h1>Time BarChart</h1>

    <div id="chart" style="height:200px; width=100%"></div>
</div>


<script src="{{ site.baseurl }}/js/lib/d3.v3.min.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/underscore.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/backbone.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/timebarchart.js"></script>
<script>
    var data = [
        {date: '2013-09-01', pos: 130, neu: 23, neg: 201},
        {date: '2013-09-02', pos: 110, neu: 33, neg: 241},
        {date: '2013-09-03', pos: 105, neu: 43, neg: 261},
        {date: '2013-09-04', pos:  97, neu: 13, neg: 191},
        {date: '2013-09-05', pos:  86, neu: 26, neg: 181},
        {date: '2013-09-06', pos:  75, neu: 23, neg: 205},
        {date: '2013-09-07', pos:  65, neu: 16, neg: 251},
        {date: '2013-09-08', pos:  78, neu: 13, neg: 281},
        {date: '2013-09-09', pos:  45, neu: 17, neg: 236},
        {date: '2013-09-10', pos:  34, neu: 23, neg: 281},
        {date: '2013-09-11', pos: 102, neu: 53, neg: 337},
        {date: '2013-09-12', pos: 105, neu: 69, neg: 281},
        {date: '2013-09-13', pos:  45, neu: 53, neg: 247},
        {date: '2013-09-14', pos:  49, neu: 73, neg: 191},
        {date: '2013-09-15', pos:  53, neu: 66, neg: 148},
        {date: '2013-09-16', pos:  67, neu: 53, neg: 101},
        {date: '2013-09-17', pos: 130, neu: 15, neg: 208},
        {date: '2013-09-18', pos: 120, neu: 53, neg: 201},
        {date: '2013-09-19', pos: 154, neu: 65, neg: 359},
        {date: '2013-09-20', pos: 174, neu: 43, neg: 301},
        {date: '2013-09-21', pos: 186, neu: 24, neg: 204},
        {date: '2013-09-22', pos: 192, neu: 23, neg: 251},
        {date: '2013-09-23', pos: 168, neu: 33, neg: 105},
        {date: '2013-09-24', pos: 145, neu: 22, neg: 121},
        {date: '2013-09-25', pos: 137, neu: 21, neg: 205},
        {date: '2013-09-26', pos: 123, neu: 33, neg: 101},
        {date: '2013-09-27', pos: 111, neu: 38, neg: 141},
        {date: '2013-09-28', pos: 139, neu: 23, neg: 101},
        {date: '2013-09-29', pos: 165, neu: 25, neg: 158},
        {date: '2013-09-30', pos: 132, neu: 13, neg: 231}
    ];


    var chart = citisent.TimeBarChart()
        .data(data);


    d3.select('#chart').call(chart);


</script>