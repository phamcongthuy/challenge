---
title: Vote in the 2018 My LA2050 Activation Challenge
body_class: blueberry
stylesheets:
  - "/assets/css/vote.css"
---

{% if site.phase != 6 %}

# Oops!

<div class="introduction" markdown="1">
This page couldn’t be found.

You may want to visit our [home page](/) instead.
</div>

{% else %}


<script>
(function() {
  function getRandomOrder() {
    return (Math.floor(Math.random() * 10) + 1) - 5;
  }
  for (var index = 0; index < 5; index++) {
    document.documentElement.style.setProperty('--order-' + index, getRandomOrder());
  }
})();
</script>


<div class="introduction introduction-voting" markdown="1">

<div>
<a href="/finalists/" class="logo">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.1 79.2" width="200" height="200" aria-label="My LA2050 Activation Challenge" role="img">
    <switch>
      <g>
        <path d="M18.7,15.7L18.7,15.7l5.9-15.2H29v19.8h-2.8V3.8h-0.1l-6.6,16.6h-1.8L11.2,3.8h-0.1v16.6H8.5V0.5h4.3
          L18.7,15.7z"/>
        <path d="M44.6,20.3h-2.8v-8.6L34.4,0.5h3.4l5.5,9l5.5-9H52l-7.4,11.3V20.3z"/>
        <path d="M69.6,17.9h8.8v2.5H66.8V0.5h2.8V17.9z"/>
        <path d="M85,20.3h-3.1l8.6-19.8H93l8.5,19.8h-3.1l-2-4.9H87L85,20.3z M88,13h7.4l-3.7-9.3L88,13z"/>
        <path d="M119.4,20.3h-12.9v-2.6l7.9-7.8c0.6-0.6,1.1-1.3,1.5-1.9c0.4-0.7,0.6-1.4,0.6-2.3c0-0.5-0.1-1-0.3-1.4
          c-0.2-0.4-0.4-0.8-0.8-1.1s-0.7-0.5-1.1-0.7c-0.4-0.2-0.9-0.2-1.4-0.2c-1,0-1.8,0.3-2.5,1c-0.7,0.6-1.1,1.5-1.2,2.5l-2.7-0.4
          c0.1-0.7,0.4-1.4,0.7-2.1c0.4-0.6,0.8-1.2,1.4-1.7c0.6-0.5,1.2-0.8,1.9-1.1c0.7-0.3,1.5-0.4,2.4-0.4c0.8,0,1.6,0.1,2.4,0.4
          c0.8,0.2,1.4,0.6,2,1.1c0.6,0.5,1,1.1,1.4,1.8s0.5,1.5,0.5,2.4c0,0.6-0.1,1.2-0.3,1.8c-0.2,0.5-0.4,1.1-0.7,1.5
          c-0.3,0.5-0.6,0.9-1,1.4c-0.4,0.4-0.8,0.9-1.2,1.3l-6.4,6.3h9.7V20.3z"/>
        <path d="M132.9,0c1.2,0,2.2,0.3,3,0.8c0.8,0.5,1.5,1.3,2.1,2.2c0.5,0.9,1,2,1.2,3.3c0.3,1.3,0.4,2.6,0.4,4.1
          c0,1.5-0.1,2.8-0.4,4.1c-0.3,1.3-0.7,2.4-1.2,3.3c-0.6,0.9-1.3,1.7-2.1,2.2c-0.8,0.5-1.9,0.8-3,0.8s-2.2-0.3-3.1-0.8
          c-0.9-0.5-1.6-1.3-2.1-2.2c-0.6-0.9-1-2-1.2-3.3c-0.3-1.3-0.4-2.6-0.4-4.1c0-1.4,0.1-2.8,0.4-4.1c0.3-1.3,0.7-2.4,1.2-3.3
          s1.3-1.7,2.1-2.2C130.7,0.3,131.7,0,132.9,0z M132.9,2.3c-0.8,0-1.5,0.3-2,0.8c-0.5,0.5-0.9,1.2-1.2,2c-0.3,0.8-0.5,1.7-0.6,2.6
          c-0.1,1-0.2,1.8-0.2,2.7s0.1,1.7,0.2,2.7c0.1,1,0.3,1.8,0.6,2.6c0.3,0.8,0.7,1.5,1.2,2s1.2,0.8,2,0.8c0.8,0,1.5-0.3,2-0.8
          c0.5-0.5,0.9-1.2,1.2-2c0.3-0.8,0.5-1.7,0.6-2.6c0.1-1,0.2-1.8,0.2-2.7s-0.1-1.7-0.2-2.7c-0.1-1-0.3-1.8-0.6-2.6
          c-0.3-0.8-0.7-1.5-1.2-2C134.3,2.5,133.7,2.3,132.9,2.3z"/>
        <path d="M158,2.9h-8.2l-0.2,5.2c0.4-0.1,0.8-0.2,1.2-0.3c0.5-0.1,0.9-0.1,1.3-0.1c1,0,1.8,0.1,2.6,0.4
          c0.8,0.3,1.5,0.7,2.1,1.2c0.6,0.5,1,1.2,1.4,2c0.3,0.8,0.5,1.6,0.5,2.6c0,1-0.2,2-0.5,2.8c-0.4,0.8-0.8,1.6-1.5,2.1
          c-0.6,0.6-1.3,1-2.2,1.4s-1.8,0.5-2.7,0.5c-1.5,0-2.9-0.4-3.9-1.1c-1.1-0.7-1.9-1.7-2.4-2.9l2.5-1c0.3,0.8,0.8,1.4,1.5,1.9
          c0.7,0.5,1.5,0.7,2.4,0.7c0.6,0,1.1-0.1,1.6-0.3c0.5-0.2,0.9-0.5,1.3-0.9c0.4-0.4,0.7-0.8,0.9-1.3s0.3-1.1,0.3-1.7
          c0-0.7-0.1-1.4-0.4-1.9c-0.3-0.5-0.6-1-1-1.4s-0.9-0.6-1.5-0.8c-0.6-0.2-1.1-0.3-1.8-0.3c-0.7,0-1.5,0.1-2.3,0.3
          c-0.8,0.2-1.5,0.5-2.1,0.8l0.3-10.5H158V2.9z"/>
        <path d="M172.3,0c1.2,0,2.2,0.3,3,0.8c0.8,0.5,1.5,1.3,2.1,2.2c0.5,0.9,1,2,1.2,3.3c0.3,1.3,0.4,2.6,0.4,4.1
          c0,1.5-0.1,2.8-0.4,4.1c-0.3,1.3-0.7,2.4-1.2,3.3c-0.6,0.9-1.3,1.7-2.1,2.2c-0.8,0.5-1.9,0.8-3,0.8s-2.2-0.3-3.1-0.8
          c-0.9-0.5-1.6-1.3-2.1-2.2c-0.6-0.9-1-2-1.2-3.3c-0.3-1.3-0.4-2.6-0.4-4.1c0-1.4,0.1-2.8,0.4-4.1c0.3-1.3,0.7-2.4,1.2-3.3
          s1.3-1.7,2.1-2.2C170.1,0.3,171.2,0,172.3,0z M172.3,2.3c-0.8,0-1.5,0.3-2,0.8c-0.5,0.5-0.9,1.2-1.2,2c-0.3,0.8-0.5,1.7-0.6,2.6
          c-0.1,1-0.2,1.8-0.2,2.7s0.1,1.7,0.2,2.7c0.1,1,0.3,1.8,0.6,2.6c0.3,0.8,0.7,1.5,1.2,2s1.2,0.8,2,0.8c0.8,0,1.5-0.3,2-0.8
          c0.5-0.5,0.9-1.2,1.2-2c0.3-0.8,0.5-1.7,0.6-2.6c0.1-1,0.2-1.8,0.2-2.7s-0.1-1.7-0.2-2.7c-0.1-1-0.3-1.8-0.6-2.6
          c-0.3-0.8-0.7-1.5-1.2-2C173.8,2.5,173.1,2.3,172.3,2.3z"/>
        <path d="M14.9,49.5l-0.6-3.7H7.2l-2.2,3.7H0l11.7-18.4h4.2l3.5,18.4H14.9z M12.8,35.9L9,42.4h4.8L12.8,35.9z"/>
        <path d="M39.9,47c-0.4,0.4-0.8,0.8-1.3,1.2c-0.5,0.4-1,0.7-1.6,1s-1.3,0.5-2,0.7c-0.7,0.2-1.5,0.2-2.4,0.2
          c-1.3,0-2.5-0.2-3.5-0.6s-1.9-0.9-2.7-1.6c-0.7-0.7-1.3-1.5-1.7-2.5c-0.4-1-0.6-2.1-0.6-3.3c0-1.6,0.3-3.1,0.8-4.4
          c0.6-1.4,1.3-2.6,2.3-3.6c1-1,2.1-1.8,3.5-2.4c1.3-0.6,2.8-0.9,4.3-0.9c1.5,0,2.8,0.3,3.9,0.8c1.2,0.5,2,1.2,2.6,2l-3.2,2.9
          c-0.3-0.5-0.7-0.8-1.3-1.2s-1.3-0.5-2.2-0.5c-0.9,0-1.8,0.2-2.5,0.6c-0.8,0.4-1.4,0.9-2,1.6c-0.5,0.6-1,1.4-1.3,2.2
          c-0.3,0.8-0.5,1.7-0.5,2.6c0,0.6,0.1,1.2,0.3,1.8s0.5,1.1,0.9,1.5c0.4,0.4,0.9,0.7,1.4,1c0.6,0.2,1.2,0.4,1.9,0.4
          c0.8,0,1.6-0.2,2.3-0.5c0.7-0.3,1.4-0.8,1.9-1.5L39.9,47z"/>
        <path d="M54,34.8l-2.6,14.7h-4.3l2.6-14.7h-5.1l0.7-3.7h14.5L59,34.8H54z"/>
        <path d="M61.2,49.5l3.2-18.4h4.3l-3.2,18.4H61.2z"/>
        <path d="M80.8,49.5h-4.5l-2.8-18.4H78l1.4,13.2h0.1l7.2-13.2h5L80.8,49.5z"/>
        <path d="M104.3,49.5l-0.6-3.7h-7.1l-2.2,3.7h-4.9l11.7-18.4h4.2l3.5,18.4H104.3z M102.2,35.9l-3.8,6.5h4.8L102.2,35.9z
          "/>
        <path d="M121.8,34.8l-2.6,14.7h-4.3l2.6-14.7h-5.1l0.7-3.7h14.5l-0.7,3.7H121.8z"/>
        <path d="M129,49.5l3.2-18.4h4.3l-3.2,18.4H129z"/>
        <path d="M151.6,30.7c1.4,0,2.6,0.2,3.7,0.6c1.1,0.4,2,0.9,2.8,1.6c0.8,0.7,1.3,1.6,1.8,2.6s0.6,2.1,0.6,3.4
          c0,1.6-0.3,3-0.8,4.4c-0.5,1.4-1.3,2.5-2.2,3.6s-2.1,1.8-3.4,2.4c-1.3,0.6-2.8,0.9-4.4,0.9c-1.4,0-2.7-0.2-3.8-0.6
          c-1.1-0.4-2-0.9-2.8-1.6c-0.8-0.7-1.4-1.6-1.8-2.6c-0.4-1-0.6-2.1-0.6-3.4c0-1.6,0.3-3,0.8-4.4s1.3-2.5,2.3-3.6
          c1-1,2.1-1.8,3.4-2.4S150,30.7,151.6,30.7z M149.9,46.1c1,0,1.8-0.2,2.6-0.6c0.8-0.4,1.4-0.9,1.9-1.6c0.5-0.6,0.9-1.4,1.2-2.2
          c0.3-0.8,0.4-1.7,0.4-2.6c0-0.6-0.1-1.2-0.3-1.8s-0.5-1.1-0.9-1.5c-0.4-0.4-0.9-0.7-1.5-1c-0.6-0.2-1.3-0.4-2-0.4
          c-0.9,0-1.8,0.2-2.5,0.6s-1.4,0.9-1.9,1.6c-0.5,0.7-0.9,1.4-1.2,2.2s-0.4,1.7-0.4,2.6c0,0.6,0.1,1.2,0.3,1.8s0.5,1.1,0.9,1.5
          c0.4,0.4,0.9,0.7,1.5,1C148.4,46,149.1,46.1,149.9,46.1z"/>
        <path d="M176,49.5l-5.1-12.2h-0.1l-2.1,12.2h-4.3l3.2-18.4h4.9l5,12.1h0.1l2.1-12.1h4.3l-3.2,18.4H176z"/>
        <path d="M19.8,75.6c-0.8,1.1-1.8,1.9-3.1,2.6c-1.2,0.7-2.8,1-4.5,1c-1.5,0-2.9-0.3-4.2-0.8c-1.3-0.5-2.4-1.2-3.3-2.2
          c-0.9-0.9-1.6-2-2.2-3.3s-0.8-2.7-0.8-4.2c0-1.5,0.3-3,0.8-4.2s1.3-2.4,2.2-3.3c0.9-0.9,2.1-1.6,3.3-2.1s2.7-0.8,4.2-0.8
          c0.7,0,1.4,0.1,2,0.2s1.4,0.3,2,0.6c0.6,0.3,1.2,0.6,1.7,1c0.5,0.4,1,0.8,1.3,1.3l-2.2,1.7c-0.5-0.7-1.2-1.2-2.1-1.7
          c-0.9-0.4-1.8-0.7-2.9-0.7c-1.2,0-2.2,0.2-3.1,0.6s-1.7,1-2.4,1.7c-0.7,0.7-1.2,1.6-1.5,2.5c-0.4,1-0.5,2-0.5,3.1
          c0,1.1,0.2,2.2,0.5,3.1c0.3,1,0.8,1.8,1.5,2.5c0.6,0.7,1.4,1.3,2.4,1.7c0.9,0.4,2,0.6,3.1,0.6c1.1,0,2.1-0.2,3.1-0.7
          c0.9-0.4,1.7-1.1,2.3-2L19.8,75.6z"/>
        <path d="M25.1,58.9h2.8v8.3h10v-8.3h2.8v19.8h-2.8v-9.1h-10v9.1h-2.8V58.9z"/>
        <path d="M48.9,78.7h-3.1l8.6-19.8h2.5l8.5,19.8h-3.1l-2-4.9h-9.4L48.9,78.7z M51.8,71.4h7.4l-3.7-9.3L51.8,71.4z"/>
        <path d="M73.3,76.3h8.8v2.5H70.5V58.9h2.8V76.3z"/>
        <path d="M90.1,76.3h8.8v2.5H87.3V58.9h2.8V76.3z"/>
        <path d="M106.9,76.3h10.4v2.5h-13.1V58.9h12.7v2.4h-9.9v5.9h9.4v2.4h-9.4V76.3z"/>
        <path d="M137.5,74.8L137.5,74.8l0.1-15.8h2.8v19.8h-3.5l-10.5-16.2h-0.1v16.2h-2.8V58.9h3.6L137.5,74.8z"/>
        <path d="M162.6,63c-0.6-0.7-1.4-1.2-2.3-1.6c-0.9-0.4-2-0.6-3.1-0.6c-1.2,0-2.2,0.2-3.1,0.6s-1.7,1-2.4,1.7
          c-0.7,0.7-1.2,1.6-1.5,2.5c-0.4,1-0.5,2-0.5,3.1c0,1.1,0.2,2.1,0.5,3.1s0.9,1.8,1.5,2.5s1.5,1.3,2.4,1.7c1,0.4,2,0.6,3.2,0.6
          c0.9,0,1.8-0.1,2.6-0.3c0.8-0.2,1.5-0.4,2-0.7v-5.5h-4.4v-2.4h7.1v9.6c-1,0.6-2.2,1-3.4,1.3c-1.2,0.3-2.6,0.4-4,0.4
          c-1.5,0-3-0.3-4.3-0.8c-1.3-0.5-2.4-1.2-3.3-2.2c-0.9-0.9-1.7-2-2.2-3.3s-0.8-2.7-0.8-4.2c0-1.5,0.3-3,0.8-4.2s1.3-2.4,2.2-3.3
          c0.9-0.9,2.1-1.6,3.3-2.1s2.7-0.8,4.2-0.8c1.6,0,3,0.2,4.2,0.7c1.2,0.5,2.3,1.1,3.1,1.9L162.6,63z"/>
        <path d="M174.7,76.3h10.4v2.5h-13.1V58.9h12.7v2.4h-9.9v5.9h9.4v2.4h-9.4V76.3z"/>
      </g>
      <foreignObject>My LA2050<br /><em>Activation</em><br />Challenge</foreignObject>
    </switch>
  </svg>
</a>

<p>It’s time to vote! Choose one <a href="/finalists/" target="_blank">finalist</a> in each goal category.</p>

<p class="action"><a href="#questions">Start voting</a></p>

</div>

</div>





<form name="vote" action="/vote/submit/" method="post" markdown="1" data-netlify="true">

<div id="questions">
  <p>
    If you need help completing this voting form, please send us an email at <a href="mailto:connect@la2050.org">connect@la2050.org</a>.
    <br />
    You can also learn more about the <a href="/vote/" target="_blank">voting process and rules</a>.
  </p>
</div>

<h2 class="blueberry" id="learn">Who would you like to vote for in the <em class="category">Learn</em> category?</h2>

<ul class="blueberry">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "learn" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}

{% assign is_finalist = false %}
{% for finalist in site.finalists %}
  {% if finalist == project.uri %}
    {% assign is_finalist = true %}
  {% endif %}
{% endfor %}

{% if is_finalist == true %}
<li>
<label>
  <input type="radio" name="learn" value="{{ project.organization_name }}" />
  <span class="mask"></span><span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
      <strong>Selected</strong>
    </svg>
  </span>
  <span class="call-to-action">
    <!--<svg></svg>-->
    <strong>Select</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <span class="text"><strong>{{ project.organization_name }}</strong><br />{{ project.title }}</span>
</label>
<a href="{{ project.uri }}" target="_blank">
<svg viewBox="0 0 192 512" width="24" height="24" aria-label="{{ project.organization_name }}">
  <switch>
    <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" class=""></path>
    <foreignObject>{{ project.organization_name }}</foreignObject>
  </switch>
</svg>
</a>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />

<h2 class="banana" id="create">Who would you like to vote for in the <em class="category">Create</em> category?</h2>

<ul class="banana">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "create" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}

{% assign is_finalist = false %}
{% for finalist in site.finalists %}
  {% if finalist == project.uri %}
    {% assign is_finalist = true %}
  {% endif %}
{% endfor %}

{% if is_finalist == true %}
<li>
<label>
  <input type="radio" name="create" value="{{ project.organization_name }}" />
  <span class="mask"></span><span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
    </svg>
    <strong>Selected</strong>
  </span>
  <span class="call-to-action">
    <!--<svg></svg>-->
    <strong>Select</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <span class="text"><strong>{{ project.organization_name }}</strong><br />{{ project.title }}</span>
</label>
<a href="{{ project.uri }}" title="{{ project.organization_name }}" target="_blank">
<svg viewBox="0 0 192 512" width="24" height="24">
  <switch>
    <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" class=""></path>
    <foreignObject>{{ project.organization_name }}</foreignObject>
  </switch>
</svg>
</a>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />

<h2 class="strawberry" id="play">Who would you like to vote for in the <em class="category">Play</em> category?</h2>

<ul class="strawberry">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "play" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}

{% assign is_finalist = false %}
{% for finalist in site.finalists %}
  {% if finalist == project.uri %}
    {% assign is_finalist = true %}
  {% endif %}
{% endfor %}

{% if is_finalist == true %}
<li>
<label>
  <input type="radio" name="play" value="{{ project.organization_name }}" />
  <span class="mask"></span><span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
    </svg>
    <strong>Selected</strong>
  </span>
  <span class="call-to-action">
    <!--<svg></svg>-->
    <strong>Select</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <span class="text"><strong>{{ project.organization_name }}</strong><br />{{ project.title }}</span>
</label>
<a href="{{ project.uri }}" title="{{ project.organization_name }}" target="_blank">
<svg viewBox="0 0 192 512" width="24" height="24">
  <switch>
    <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" class=""></path>
    <foreignObject>{{ project.organization_name }}</foreignObject>
  </switch>
</svg>
</a>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />

<h2 class="tangerine" id="connect">Who would you like to vote for in the <em class="category">Connect</em> category?</h2>

<ul class="tangerine">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "connect" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}

{% assign is_finalist = false %}
{% for finalist in site.finalists %}
  {% if finalist == project.uri %}
    {% assign is_finalist = true %}
  {% endif %}
{% endfor %}

{% if is_finalist == true %}
<li>
<label>
  <input type="radio" name="connect" value="{{ project.organization_name }}" />
  <span class="mask"></span><span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
    </svg>
    <strong>Selected</strong>
  </span>
  <span class="call-to-action">
    <!--<svg></svg>-->
    <strong>Select</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <span class="text"><strong>{{ project.organization_name }}</strong><br />{{ project.title }}</span>
</label>
<a href="{{ project.uri }}" title="{{ project.organization_name }}" target="_blank">
<svg viewBox="0 0 192 512" width="24" height="24">
  <switch>
    <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" class=""></path>
    <foreignObject>{{ project.organization_name }}</foreignObject>
  </switch>
</svg>
</a>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />

<h2 class="lime" id="live">Who would you like to vote for in the <em class="category">Live</em> category?</h2>

<ul class="lime">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "live" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}

{% assign is_finalist = false %}
{% for finalist in site.finalists %}
  {% if finalist == project.uri %}
    {% assign is_finalist = true %}
  {% endif %}
{% endfor %}

{% if is_finalist == true %}
<li>
<label>
  <input type="radio" name="live" value="{{ project.organization_name }}" />
  <span class="mask"></span><span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
    </svg>
    <strong>Selected</strong>
  </span>
  <span class="call-to-action">
    <!--<svg></svg>-->
    <strong>Select</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <span class="text"><strong>{{ project.organization_name }}</strong><br />{{ project.title }}</span>
</label>
<a href="{{ project.uri }}" title="{{ project.organization_name }}" target="_blank">
<svg viewBox="0 0 192 512" width="24" height="24">
  <switch>
    <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" class=""></path>
    <foreignObject>{{ project.organization_name }}</foreignObject>
  </switch>
</svg>
</a>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />


<section id="zip" class="banana hidden">

<div markdown="1">

## Please enter your ZIP Code

<p class="field-button">
<label>
  <input type="text" name="zip" pattern="[0-9]*" inputmode="number" placeholder="" />
</label>
<button type="submit">Next</button>
</p>

<p><small>LA2050 uses ZIP Codes to determine how much of Los Angeles we’re reaching.</small></p>

</div>

</section>



<section id="finish" class="blueberry hidden">

<div markdown="1">
## You’re <em>almost</em> done!

Now it’s time to confirm your vote(s) by signing in with one of your accounts.

### Sign in with…

<ul class="action">
  <li><a href="#sign-in-phone">Phone</a></li>
  <li><a href="#sign-in-email">Email</a></li>
  <li><a href="#sign-in-facebook">Facebook</a></li>
</ul>

</div>

</section>

</form>






{% comment %}
<!--
<form name="vote_email" action="/vote/email-sent/" method="post" data-netlify="true">
-->
{% endcomment %}
<form name="vote_email" action="/vote/email-sent/" method="get">
<input type="hidden" name="learn" />
<input type="hidden" name="create" />
<input type="hidden" name="play" />
<input type="hidden" name="connect" />
<input type="hidden" name="live" />
<input type="hidden" name="zip" />

<section id="sign-in-email" class="lime hidden">

<div markdown="1">
## Sign in with email

Next, we’ll send a message to your email address, with instructions.

<p class="field-button banana">
<label>
  <input type="email" name="email" placeholder="example@mail.com" required="required" />
</label>
<button type="submit">Send email</button>
</p>

<p><small>We will only use this email address to complete the voting process. (No spam, we promise!)</small></p>
</div>

</section>

</form>



<form name="vote_sms" action="/vote/sms-sent/" method="get">
<input type="hidden" name="learn" />
<input type="hidden" name="create" />
<input type="hidden" name="play" />
<input type="hidden" name="connect" />
<input type="hidden" name="live" />
<input type="hidden" name="zip" />

<section id="sign-in-phone" class="strawberry hidden">

<div markdown="1">
## Sign in with your phone

Next, we’ll send a text message to your phone number, with instructions.

<p class="field-button">
<label>
  <input type="tel" name="telephone" placeholder="+1 222 333 4444" required="required"/>
</label>
<button type="submit">Send text message</button>
</p>

<p><small>We will only use this phone number to complete the voting process. (No spam, we promise!)</small></p>
</div>

</section>

</form>

<div class="progress hidden" role="status" id="progress">
  <p class="action"><a href="#zip">Confirm my votes</a></p>
  <p>You voted in <strong id="vote-count">1</strong> out of <strong>5</strong> categories.</p>
</div>

<script src="https://cdn.auth0.com/js/auth0/9.3.1/auth0.min.js"></script>
<script src="/assets/js/scroll-into-view.js"></script>
<script src="/assets/js/vote.js"></script>

{% endif %}
