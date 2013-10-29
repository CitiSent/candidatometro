---
layout: base
title: Candidatómetro
---

<h1 class='huge thin title'>{{ page.title }}</h1>
<div class='row'>
    <div class='col-md-8'>
    <div id='carrusel' class='carousel slide'>
      <!-- Indicators -->
      <ol class='carousel-indicators'>
        <li data-target='#carrusel' data-slide-to='0' class='active'></li>
        <li data-target='#carrusel' data-slide-to='1'></li>
        <li data-target='#carrusel' data-slide-to='2'></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class='carousel-inner'>
        <div class='item active'>
          <img src='{{ site.baseurl }}/img/slide_01.png' alt='los candidatos'>
          <div class='carousel-caption'>
            <p>Estamos observando a los candidatos presidenciales, <em>lo que dicen</em> y <em>qué dicen de ellos</em> en Twitter.</p>
          </div>
        </div>
        <div class='item'>
          <img src='{{ site.baseurl }}/img/slide_02.jpg' alt='la percepción ciudadana de los candidatos'>
          <div class='carousel-caption'>
            <p>Estudiamos y contrastamos sus agendas, los compararmos entre ellos y con el discurso del resto de nosotros</p>
          </div>
        </div>
        <div class='item'>
          <img src='{{ site.baseurl }}/img/slide_03.jpg' alt='análisis de las agendas discursivas'>
          <div class='carousel-caption'>
            <p>Estamos midiendo el pulso y popularidad de sus nombres, comprendiendo el tono de cada mención.</p>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a class='left carousel-control' href='#carrusel' data-slide='prev'>
        <i class='icon-chevron-left'></i>
      </a>
      <a class='right carousel-control' href='#carrusel' data-slide='next'>
        <i class='icon-chevron-right'></i>
      </a>
    </div>

  </div>
  <div class='col-md-4'>
    <p class='light big air-top'><strong>Candidatómetro</strong> es un proyecto independiente desarrollado por <a href='http://www.citisent.com' class='cs-logo'><img src='{{ site.baseurl }}/assets/citisent-logo-sq.svg'>CitiSent</a> para explorar las siguientes preguntas:</p>
    <ul class='preguntas'>
      <li><a class='btn btn-lg btn-primary btn-pregunta' href='{{ site.baseurl }}/pages/percepcion-ciudadana'>¿Cómo son percibidos los candidatos?</a></li>
      <li><a class='btn btn-lg btn-primary btn-pregunta' href='{{ site.baseurl }}/pages/de-que-hablan'>¿De qué hablan los candidatos?</a></li>
    </ul>
    <p class='light big'>Este proyecto es un ejemplo de cómo configurar estudios sociales en Citisent con su tecnología extracción, filtrado y análisis de datos. Conoce más en <a href='http://www.citisent.com' >www.citisent.com</a></p>
  </div> 
</div>

{% include social.html %}

<!-- Libraries -->
<script src="{{ site.baseurl }}/js/lib/d3.v3.min.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/underscore.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/lib/backbone.js" charset="utf-8"></script>
<script src="{{ site.baseurl }}/js/candidatometro.js"></script>



