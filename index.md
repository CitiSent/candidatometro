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

 
  <div class='col-md-6 air-top'>
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
          <img src='{{ site.baseurl }}/img/slide_01.jpg' alt='los candidatos'>
          <div class='carousel-caption'>
            <h3>Los candidatos...</h3>
            <p>Medimos la percepción ciudadana </p>
          </div>
        </div>
        <div class='item'>
          <img src='{{ site.baseurl }}/img/slide_02.jpg' alt='la percepción ciudadana de los candidatos'>
          <div class='carousel-caption'>
            <h3>Los candidatos...</h3>
            <p>Medimos la percepción ciudadana </p>
          </div>
        </div>
        <div class='item'>
          <img src='{{ site.baseurl }}/img/slide_03.jpg' alt='análisis de las agendas discursivas'>
          <div class='carousel-caption'>
            <h3>Los candidatos...</h3>
            <p>Medimos la percepción ciudadana </p>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a class='left carousel-control' href='#carrusel' data-slide='prev'>
        <span class='icon-prev'></span>
      </a>
      <a class='right carousel-control' href='#carrusel' data-slide='next'>
        <span class='icon-next'></span>
      </a>
    </div>

  </div>
 
</div>

{% include social.html %}

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



