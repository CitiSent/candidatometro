---
layout: base
title: Metodología
---
<h1 class='thin orange'>{{ page.title }}</h1>

<div class='row'>
  <div class='col-sm-6'>
    <p>Las visualizaciones aquí presentadas son producto de una serie de <i class='cs-icon-study'></i> <strong>Estudios</strong> realizados con <strong>CitiSent</strong>. Estos estudios son configurados a partir de una definición de:</p>

    <div class='row'>
      <div class='components'>
        <div class='col-sm-3 tcenter'>
          <div class='well'><i class='cs-icon-topic'></i><br><strong>temas</strong></div>
        </div>
        <div class='col-sm-1 tcenter'>
          <span class='operator'><i class='fa fa-plus'></i></span>
        </div>
        <div class='col-sm-3 tcenter'>
          <div class='well'><i class='cs-icon-source'></i><br><strong>fuentes</strong></div>
        </div>
        <div class='col-sm-1 tcenter'>
          <span class='operator'><i class='fa fa-plus'></i></span>
        </div>
        <div class='col-sm-3 tcenter'>
          <div class='well'><i class='cs-icon-place'></i><br><strong>lugares</strong></div>
        </div>
      </div>
    </div>

    <p class='air-top'>Esta definición corresponde a los parámetros básicos para realizar consultas en un servicio Web. En el caso de este candidatómetro consultamos exclusivamente en Twitter.</p>
  </div>
  <div class='col-sm-6'>
    <p>Los resultados gráficos de las preguntas formuladas están construídos a partir de 1 o más estudios.</p>
    <p>Como ya está dicho, cada estudio puede estar compuesto de temas, fuentes y/o lugares. Todos los elementos recolectados bajo estos criterios son procesados definiendo su <strong>polaridad</strong>, esto es un proceso de clasificación de los <em>twitts</em> en base a su contenido positivo, negativo o neutral.</p>
  </div>
</div>

{% include metodo-percepcion.html %}
{% include metodo-agendas.html %}