---
layout: standard
title: Candidatómetro
---

<div class='row'>
  <div class='col-md-6'>
    <h1 class='huge thin title'>{{ page.title }}</h1>
    <p class='big thin'>PLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac dolor non sapien facilisis sodales et molestie quam. Sed facilisis ut augue a dictum. Duis vitae tincidunt nulla, quis egestas nunc. Fusce sit amet interdum tellus. Duis nec mi varius, eleifend arcu nec, mattis nulla. Cras eu mollis erat, in gravida arcu. Proin eu scelerisque mi. </p>
    
    <ul class='air-top icons-ul preguntas'>
      <li class='big'><i class="icon-li icon-chevron-sign-right blue"></i><a class='btn btn-black'href="de-que-hablan">¿de qué hablan los candidatos?</a></li>

       <li class='big'><i class="icon-li icon-chevron-sign-right blue"></i><a class='btn btn-black'href="de-que-hablan-old">¿de qué hablan los candidatos? (versión antigua)</a></li>
    </ul>

  </div>

  <div class='tabla-de-candidatos'>
    <div class='col-md-6 air-top'>
      
      <hr>

      <div class="row">
        <div class='col-sm-4 tcenter candidato'>
          <img class='img-circle' width='100' src='{{ site.baseurl }}/img/fot_evelyn_matthei.jpg'><br>
          <h6 class='bold uc'>Evelyn Matthei Fornet</h6>
        </div>
        <div class='col-sm-4 tcenter candidato'>
          <img class='img-circle' width='100' src='{{ site.baseurl }}/img/fot_michelle_bachelet.jpg'><br>
          <h6 class='bold uc'>Michelle Bachelet Jeria</h6>
        </div>
        <div class='col-sm-4 tcenter candidato'>
          <img class='img-circle' width='100' src='{{ site.baseurl }}/img/fot_marco_enriquez-ominami.jpg'><br>
          <h6 class='bold uc'>Marco Enríquez-Ominami Gumucio</h6>
        </div>
      </div>
      
      <hr>
      
      <div class="row">
        <div class='col-sm-4 tcenter candidato'>
          <img class='img-circle' width='100' src='{{ site.baseurl }}/img/fot_alfredo_sfeir.jpg'><br>
          <h6 class='bold uc'>Alfredo Sfeir Younis</h6>
        </div>
        <div class='col-sm-4 tcenter candidato'>
          <img class='img-circle' width='100' src='{{ site.baseurl }}/img/fot_roxana_miranda.jpg'><br>
          <h6 class='bold uc'>Roxana Miranda Meneses</h6>
        </div>
        <div class='col-sm-4 tcenter candidato'>
          <img class='img-circle' width='100' src='{{ site.baseurl }}/img/fot_marcel_claude.jpg'><br>
          <h6 class='bold uc'>Marcel Claude Reyes</h6>
        </div>
      </div>
      
      <hr>
      
      <div class="row">
        <div class='col-sm-4 tcenter candidato'>
          <img class='img-circle' width='100' src='{{ site.baseurl }}/img/fot_ricardo_israel.jpg'><br>
          <h6 class='bold uc'>Ricardo Israel Zipper</h6>
        </div>
        <div class='col-sm-4 tcenter candidato'>
          <img class='img-circle' width='100' src='{{ site.baseurl }}/img/fot_tomas_jocelyn-holt.jpg'><br>
          <h6 class='bold uc'>Tomás Jocelyn-Holt Letelier</h6>
        </div>
        <div class='col-sm-4 tcenter candidato'>
          <img class='img-circle' width='100' src='{{ site.baseurl }}/img/fot_franco_parisi.jpg'><br>
          <h6 class='bold uc'>Franco Aldo Parisi Fernández</h6>
        </div>
      </div>

      <hr>

    </div>
  </div>
</div>


<!-- Libraries -->
<script src="{{ site.baseurl }}/js/lib/d3.v3.min.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/underscore.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/backbone.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/candidatometro.js"></script>



