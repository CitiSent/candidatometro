---
layout: base
title: Candidatómetro
---

<div class='row'>
  <div class='col-md-6'>
    <h1 class='huge thin title'>{{ page.title }}</h1>
    <p class='big thin'>Estamos observando a los candidatos presidenciales, <em>lo que dicen</em> y <em>qué dicen de ellos</em> en Twitter.</p>
    <p class='big thin'>Este proyecto se ha desarrollado con la tecnología de configuración, extracción, filtrado y análisis de datos de <a href='http://www.citisent.com' class='cs-logo'><img src='{{ site.baseurl }}/assets/citisent-logo-sq.svg'>CitiSent</a> para explorar las siguientes preguntas:</p>
    <ul class='preguntas'>
      <li class='big'><a class='btn btn-lg btn-primary btn-pregunta' href='{{ site.baseurl }}/pages/percepcion-ciudadana'>¿Cómo son percibidos los candidatos?</a></li>
      <li class='big'><a class='btn btn-lg btn-primary btn-pregunta' href='{{ site.baseurl }}/pages/de-que-hablan'>¿De qué hablan los candidatos?</a></li>
    </ul>
    <p class='big thin'><a href='#metodo'>Aquí</a> explicamos la metodología empleada en la configuración de los estudios. Candidatómetro es un ejemplo de cómo configurar estudios sociales en Citisent. </p>
    <p class='big thin'>Te invitamos a conocer CitiSent en <a href='http://www.citisent.com' >www.citisent.com</a></p>
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
<h2 class='air-top orange thin'>Metodología General</h2>

<div class='row'>
  <div class='col-sm-6'>
    <p>Las visualizaciones aquí presentadas son producto de una serie de <i class='cs-icon-study'></i> <strong>Estudios</strong> realizados con <strong>CitiSent</strong>. Estos estudios son configurados a partir de una definición de:</p>

    <div class='row'>
      <div class='components'>
        <div class='col-sm-3 tcenter'>
          <div class='well'><i class='cs-icon-topic'></i><br><strong>temas</strong></div>
        </div>
        <div class='col-sm-1 tcenter'>
          <span class='operator'><i class='icon-plus'></i></span>
        </div>
        <div class='col-sm-3 tcenter'>
          <div class='well'><i class='cs-icon-source'></i><br><strong>fuentes</strong></div>
        </div>
        <div class='col-sm-1 tcenter'>
          <span class='operator'><i class='icon-plus'></i></span>
        </div>
        <div class='col-sm-3 tcenter'>
          <div class='well'><i class='cs-icon-place'></i><br><strong>lugares</strong></div>
        </div>
      </div>
    </div>

    <p class='air-top'>Esta definición corresponde a los parámetros básicos para realizar consultas en un servicio Web. En el caso de este candidatómetro consultamos exclusivamente en Twitter.</p>
  </div>
  <div class='col-sm-6'>
    <p>Los resultados gráficos reflejados en las preguntas del presente candidatómetro corresponden a visualizaciones realizadas a partir de 1 o más estudios. En cada caso exponemos las metodología utilizada a fin de explicitar el razonamiento detrás de cada formulación.</p>
    <p>Como ya está dicho, cada estudio puede estar compuesto puede estar compuesto de temas, fuentes y/o lugares. Todos los elementos recolectados bajo estos criterios son procesados definiendo su <strong>polaridad</strong>, esto es un proceso de clasificación de los <em>twits</em> en base a su contenido positivo, negativo o neutral.</p>
    <p>Cada estudio explica en detalle la metodología empleada.</p>
  </div>
</div>

<!-- Libraries -->
<script src="{{ site.baseurl }}/js/lib/d3.v3.min.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/underscore.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/backbone.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/candidatometro.js"></script>



