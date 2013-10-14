---
layout: standard
title: Candidatómetro
---

<div class='row'>
  <div class='col-md-6'>
    <h1 class='huge thin title'>{{ page.title }}</h1>
    <p class='big thin'>Estamos observando a los candidatos presidenciales, <em>lo que dicen</em> y <em>qué dicen de ellos</em> en Twitter.</p>
    <p class='big thin'>Este candidatómetro está hecho en su totalidad con <a href='http://www.citisent.com'>CitiSent</a> y sus herramientas de análisis. Queremos usar las candidaturas como un ejemplo de cómo configurar estudios exponiendo su metodología en cada caso.</p>
    <p class='big thin'>Las preguntas que tenemos son estas:</p>
    <ul class='air-top icons-ul preguntas'>
      <li class='big'><i class="icon-li icon-chevron-sign-right blue"></i><a class='' href="{{ site.baseurl }}que-opina-la-gente">¿qué opina la gente de los candidatos?</a></li>
      <li class='big'><i class="icon-li icon-chevron-sign-right blue"></i><a class='' href="{{ site.baseurl }}de-que-hablan">¿de qué hablan los candidatos?</a></li>
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

<hr id='metodo'>
<h2 class='air-top orange thin'>Metodología</h2>

<div class='row'>
  <div class='col-sm-6'>
    <p>Las visualizaciones aquí presentadas son producto de una serie de <i class='cs-icon-study'></i> <strong>Estudios</strong> realizados con <strong>CitiSent</strong>. Estos estudios son configurados a partir de una definición básica de:</p> 

    <div class='row'>
      <div class='components'>
        <div class='col-sm-3 tcenter'>
          <div class='well'><strong>temas</strong> <i class='cs-icon-topic'></i ></div>
        </div>
        <div class='col-sm-1 tcenter'>
          <i class='icon-plus'></i>
        </div>
        <div class='col-sm-3 tcenter'>
          <div class='well'><strong>fuentes</strong> <i class='cs-icon-source'></i></div>
        </div>
        <div class='col-sm-1 tcenter'>
          <i class='icon-plus'></i>
        </div>
        <div class='col-sm-3 tcenter'>
          <div class='well'><strong>lugares</strong><i class='cs-icon-place'></i></div>
        </div>
      </div>
    </div>

    <p class='air-top'>Esta definición corresponde a los parámetros básicos para realizar consultas en un servicio Web. En el caso de este candidatómetro consultamos exclusivamente en Twitter.</p>
  </div>
  <div class='col-sm-6'>
    <p>Los resultados gráficos reflejados en las preguntas del presente candidatómetro corresponden a visualizaciones realizadas a partir de 1 o más estudios. En cada caso exponemos las metodología utilizada a fin de explicitar el razonamiento detrás de cada formulación.</p>
  </div>
</div>

<!-- Libraries -->
<script src="{{ site.baseurl }}/js/lib/d3.v3.min.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/underscore.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/backbone.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/candidatometro.js"></script>



