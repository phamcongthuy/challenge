---
title: Proposals for the 2018 My LA2050 Activation Challenge
body_class: blueberry home
main_class: standard-layout
layout: proposals
---

<div class="standard-figure has-caption header-figure has-caption-details">
  <div class="mask"></div>
  <img style="filter: grayscale(100%); object-position: 50% 0" src="/assets/images/goals/384-wide/learn.jpg" srcset="/assets/images/goals/384-wide/learn.jpg 384w, /assets/images/goals/512-wide/learn.jpg 512w, /assets/images/goals/768-wide/learn.jpg 768w, /assets/images/goals/1024-wide/learn.jpg 1024w, /assets/images/goals/1536-wide/learn.jpg 1536w, /assets/images/goals/2048-wide/learn.jpg 2048w" sizes="100vw" alt="LA Más" />
  <div class="caption" style="padding-top: 0; padding-bottom: 0;">
    <div>
      <!-- <h1 style="color: var(--primary-color, rgb(237, 59, 136))">The <strong>proposals</strong><br />that will shape LA</h1> -->
      <h1 style="color: var(--primary-color, rgb(237, 59, 136))">The <strong>proposals</strong> that will shape how we <strong>LEARN</strong></h1>
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

{% if site.phase < 4 %}

<div class="introduction" markdown="1">
The proposals will appear here on <strong>April 9, 2018</strong>.
</div>

{% else %}

{% include proposal-list.html %}

{% endif %}
