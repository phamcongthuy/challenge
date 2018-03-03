---
title: Proposals for the 2018 My LA2050 Activation Challenge
body_class: strawberry home
main_class: standard-layout
layout: proposals
---

<div class="standard-figure has-caption header-figure has-caption-details">
  <div class="mask"></div>
  <img style="filter: grayscale(100%); object-position: bottom" src="/assets/images/goals/384-wide/play.jpg" srcset="/assets/images/goals/384-wide/play.jpg 384w, /assets/images/goals/512-wide/play.jpg 512w, /assets/images/goals/768-wide/play.jpg 768w, /assets/images/goals/1024-wide/play.jpg 1024w, /assets/images/goals/1536-wide/play.jpg 1536w, /assets/images/goals/2048-wide/play.jpg 2048w" sizes="100vw" alt="LA Más" />
  <div class="caption" style="padding-top: 0; padding-bottom: 0;">
    <div>
      <!-- <h1 style="color: var(--primary-color, rgb(237, 59, 136))">The <strong>proposals</strong><br />that will shape LA</h1> -->
      <h1 style="color: var(--primary-color, rgb(237, 59, 136))">The <strong>proposals</strong> that will shape how we <strong>PLAY</strong></h1>
      {% if site.phase >= 4 %}
      <!--
      <form action="/proposals/" method="get" style="text-align: center; margin-top: 3em;">
        <label>
          <span style="position: absolute; left: -9999px">Keywords</span>
          <input type="search" name="keywords" style="border-color: transparent;" />
        </label>
        <button type="submit">Search</button>
      </form>
      -->
      {% endif %}
    </div>
  </div>
</div>

<!--
<div class="introduction" markdown="1">
Our region will be a place where people of all ages have easy access to clean, safe, and sustainable venues to enjoy the natural environment, arts and cultural resources, and local beaches, waterways, and open space.

By the year 2050, people of all ages will enjoy safe homes, safe neighborhoods, and safe places to play. Every neighborhood will provide its residents with vibrant park space, every child will have access to afterschool enrichment programs, and residents will love their neighborhoods.
</div>
-->

{% if site.phase < 4 %}

<div class="introduction" markdown="1">
The proposals will appear here on <strong>April 9, 2018</strong>.
</div>

{% else %}

{% include proposal-list.html %}

{% endif %}
