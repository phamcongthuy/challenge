---
title: 2019 My LA2050 Grants Challenge
body_class: blueberry home
main_class: standard-layout
show_promotion: true
use_default_meta_description: true
---

{% if site.phase == 4 or site.phase == 5 %}
<h1>
  {% include city-illustration.html %}
  <span class="proposal-feature">
    <span style="max-width: 20em; display: block; margin-left: auto; margin-right: auto;">
      Tell us… which of these <strong><a href="/entries/" style="color: var(--secondary-color)">proposals</a></strong> will make Los Angeles the best place to learn, create, play, connect, and live?<br /><br />
      <small style="font-style: normal;display: block;">
        {% if site.phase == 5 %}
          <strong><a href="/vote/" style="color: var(--secondary-color);">Vote</a></strong> by April 29, 2019.
        {% else %}
          <strong><a href="/vote/" style="color: var(--secondary-color);">Voting</a></strong> begins on April 22, 2019.
        {% endif %}
      </small>
    </span>
  </span>
</h1>
{% else %}
<h1>
  {% include city-illustration.html %}
  Tell us… how do you turn <strong>inspiration</strong> <span class="avoid-break">into <strong>impact</strong>?</span>
</h1>
{% endif %}

<h2>
  Welcome to the
  <span class="avoid-break">2019 My LA2050</span>
  <span class="avoid-break">Grants Challenge</span>
</h2>

LA2050 is a community-guided initiative driving and tracking progress toward a shared vision for the future of Los Angeles. With the support of 30,000 Angelenos, we’ve outlined an aspirational vision centered on five goals and 60+ metrics tracked over time to evaluate how Los Angeles is faring. <br /><br /><strong>The My LA2050 Grants Challenge is an open call for ideas to make LA the best place to learn, create, play, connect, and live.<br /><br />A total of $1,000,000</strong> will be awarded among 10 organizations to implement their proposals. Each organization will receive a total of $100,000 and [partnership from LA2050](/about/#la2050-partnership) to support its efforts.

<strong>Now, we're asking for your help to turn the [LA2050 goals and metrics](/about/#goals) into action.</strong>

{% if site.phase == 1 %}

Starting Thursday, <strong>February 28, 2019</strong> <small>(9am Pacific Time)</small>, you can submit your proposal on this website.

Read our <a href="/submit/#guidelines">guidelines for proposals</a>.

{% elsif site.phase == 2 %}

<a href="{{ site.submission_url }}">Submit your idea</a> by Friday, **March 29, 2019** <small>(midnight, Pacific)</small>.

Read our <a href="/submit/#guidelines">guidelines for proposals</a>.

{% elsif site.phase == 3 %}

<p>
  <em>The submission period is complete.</em>
</p>
<p>
  Proposals will be showcased here by <strong>April 15, 2019</strong>. 
  Voting begins on
  <span class="avoid-break">
    <strong>April 22, 2019</strong>.
  </span>
</p>

{% elsif site.phase == 4 %}

<p>
  <em>The submission period is complete.</em>
</p>
<p>
  <a href="/entries/">Check out the entries</a>.
  Voting begins on
  <span class="avoid-break">
    <strong>April 22, 2019</strong>.
  </span>
</p>

{% elsif site.phase == 5 %}

<p>
  <a href="/vote/">It’s time to vote</a>!
  Winners will be announced on 
  <span class="avoid-break">
    <strong>June 4, 2019</strong>.
  </span>
</p>

{% elsif site.phase == 6 %}

<p>
  <em>The public voting period is complete.</em>
</p>
<p>
  <a href="/entries/">Check out the entries</a>.
  Winners will be announced on 
  <span class="avoid-break">
    <strong>June 4, 2019</strong>.
  </span>
</p>

{% elsif site.phase == 7 %}

<p><em>The finalists have been announced!</em></p>
<p>
  <a href="/finalists/">Check out the finalists</a>.
  Winners will be announced on 
  <span class="avoid-break">
    <strong>June 4, 2019</strong>.
  </span>
</p>

{% elsif site.phase == 8 %}

<p><em>The winners have been announced!</em></p>
<p><a href="/winners/">Check out the winners</a></p>

{% endif %}

<div class="numbers" markdown="1">
$1 million
: in grants

10
: organizations

$100,000
: over one year
</div>


<section class="standard-section steps"><div markdown="1">

<div><img src="/assets/images/steps/watering-can.svg" height="200" alt="" /></div>

![](/assets/images/steps/1.svg?v={{ site.version }}) Step 1
: You have an idea.

![](/assets/images/steps/2.svg?v={{ site.version }}) Step 2
: The LA2050 community rallies around it.

![](/assets/images/steps/3.svg?v={{ site.version }}) Step 3
: Together, we make LA the best place to live, learn, play, connect, and create.

</div></section>


## Winners Selection

Winners will be selected via a two-step process:

**50 finalists will be selected by public vote**: The public will vote on all approved submissions to the grants challenge. Public vote will surface the top 10 finalists in each goal category.

**10 winning proposals will be selected by an internal jury**: Goldhirsh Foundation board and staff will select the winners from the 50 finalists. Two proposals in each goal category will be announced as the winners.

Winners will be selected using the following criteria:

* Impact on the [LA2050 goals and metrics](/about/#goals)
* Overall quality of the application
* Feasibility
* Ability to mobilize the LA community
* Collaborative spirit

{% if site.phase <= 4 %}

Starting Tuesday, <strong>April 22, 2019</strong>, you can [vote for a proposal](/vote/) on this website.

{% elsif site.phase == 5 %}

<p>
  <a href="/vote/">It’s time to vote</a>!
  Winners will be announced on 
  <span class="avoid-break">
    <strong>June 4, 2019</strong>.
  </span>
</p>

{% elsif site.phase == 6 %}

<p>
  <em>The public voting period is complete.</em>
</p>
<p>
  <a href="/entries/">Check out the entries</a>.
  Winners will be announced on 
  <span class="avoid-break">
    <strong>June 4, 2019</strong>.
  </span>
</p>

{% elsif site.phase == 7 %}

<p><em>The finalists have been announced!</em></p>
<p>
  <a href="/finalists/">Check out the finalists</a>.
  Winners will be announced on 
  <span class="avoid-break">
    <strong>June 4, 2019</strong>.
  </span>
</p>

{% elsif site.phase == 8 %}

<p><em>The winners have been announced!</em></p>
<p><a href="/winners/">Check out the winners</a></p>

{% endif %}


<section class="standard-section timeline" id="dates"><div markdown="1">

<h2 class="hidden-but-accessible">Timeline</h2>

{% include timeline.html %}


</div></section>



{% if site.phase == 4 or site.phase == 5 %}
<script>
(function() {

{% raw %}
const template = `
<img
  src="/assets/images/{{ image_category }}/512-wide-with-aspect-10-8/{{ image_filename }}"
  srcset="/assets/images/{{ image_category }}/384-wide-with-aspect-10-8/{{ image_filename }} 384w, 
               /assets/images/{{ image_category }}/512-wide-with-aspect-10-8/{{ image_filename }} 512w, 
               /assets/images/{{ image_category }}/768-wide-with-aspect-10-8/{{ image_filename }} 768w, 
               /assets/images/{{ image_category }}/1024-wide-with-aspect-10-8/{{ image_filename }} 1024w, 
               /assets/images/{{ image_category }}/1536-wide-with-aspect-10-8/{{ image_filename }} 1536w, 
               /assets/images/{{ image_category }}/2048-wide-with-aspect-10-8/{{ image_filename }} 2048w"
  sizes="calc(100vw / 9)"
  width="500"
  alt="" />
`
{% endraw %}

const images = [

{% assign data_collection = site.collections | where: "label", site.year | first %}
{% assign data_list = data_collection.docs %}
{% assign delimiter = '' %}
{% for data in data_list %}
  {% capture image_filename %}{{ data.filename }}.jpg{% endcapture %}
  {% capture image_category %}{{ data.year }}/{{ data.category }}{% endcapture %}
  {{ delimiter }}
  {
    image_filename: "{{ image_filename }}",
    image_category: "{{ image_category }}"
  }
  {% assign delimiter = ',' %}
{% endfor %}
];

// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range#1527820
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumbers = [];

function getUniqueRandomNumber() {
  let unique;

  do {
    unique = getRandomInt(0, images.length - 1);
  } while (randomNumbers.includes(unique) && randomNumbers.length < images.length);

  if (!randomNumbers.includes(unique)) {
    randomNumbers.push(unique);
  }

  return unique;
}

function getImageHTML(data) {
  return template
    .replace(/\{\{ image_category \}\}/g, data.image_category)
    .replace(/\{\{ image_filename \}\}/g, data.image_filename)
}

const headline = document.querySelector(".proposal-feature");
const imagesContainer = document.createElement("span");
imagesContainer.className = "proposal-images";
headline.appendChild(imagesContainer);

for (var index = 0; index < 10*6 && index < images.length; index++) {

  // Get a random item
  let data = images[getUniqueRandomNumber()]

  let imageHTML = getImageHTML(data);
  
  imagesContainer.insertAdjacentHTML("beforeend", imageHTML);
}

})();
</script>
{% endif %}

