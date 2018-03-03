---
title: Entries for the 2018 My LA2050 Activation Challenge
body_class: lime
main_class: standard-layout
---

<!--
<h1 style="color: white">The <strong style="color: var(--secondary-color, inherit)">entries</strong><br />that will shape LA</h1>
-->
<h1 style="margin-bottom: 0">Entries</h1>

<form class="proposals-search" action="/proposals/" method="get">
  <label>
    <span style="position: absolute; left: -9999px">Keywords</span>
    <input type="search" name="keywords" style="border-color: transparent;  background-color: rgba(255, 255, 255, 0.5);" />
  </label>
  <button type="submit" style="background-color: white; border-color: transparent; color: black;">Search</button>
</form>

<style>
.proposals-search {
  text-align: center;
  grid-column: 1 / -1;
  background: var(--primary-color, black);
  color: white;
  margin: 0 -1.5em 0;
  padding: 0 1.5em 3em;
  display: flex;
  justify-content: center;
}
.proposals-search label {
  margin-right: 0.25em;
}
@media (min-width: 40em) {
  .proposals-search {
    margin: 0 -3em 0;
    padding: 0 3em 6em;
  }
  .proposals-search input[type="search"] {
    width: 25em;
  }
}
@media (min-width: 70em) { /* @wide-enough-for-header-grid */
  .proposals-search {
    margin-top: -1.5em;
  }
}

</style>

{% if site.phase < 4 %}

<div class="introduction" markdown="1">
The proposals will appear here on <strong>April 9, 2018</strong>.
</div>

{% else %}

<section class="goals" id="goals">

<div class="navigation"><div markdown="1">

<!--
## Browse by Goal
-->

<ul class="action" style="max-width: none;">
  <li class="blueberry"><a href="#learn">Learn</a></li>
  <li class="banana"><a href="#create">Create</a></li>
  <li class="strawberry"><a href="#play" class="active">Play</a></li>
  <li class="tangerine"><a href="#connect">Connect</a></li>
  <li class="lime"><a href="#live">Live</a></li>
</ul>

<p class="count" style="margin-top: 3em;">There are <strong>23</strong> entries in the <strong>PLAY</strong> category.</p>

</div>

</div></section>

{% include proposal-list.html %}

{% endif %}
