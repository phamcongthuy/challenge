---
title: 2018 My LA2050 Activation Challenge
body_class: strawberry home
main_class: standard-layout
footer_image: true
---


<style>
.header-figure.has-caption.has-caption-details .caption .details a,
.header-figure.has-caption.has-caption-details .caption .details a strong {
  font-weight: 600;
}


@media (min-width: 70em) {
/*  body {
    padding-top: 10.5em;
  }
  .header-figure.has-caption.has-caption-details .caption .details {
    position: absolute;
    top: -5.25em;
    left: 0em;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
  }*/
  .header-figure.has-caption.has-caption-details .caption {
    padding-bottom: 2.25em;
  }
/*  .header-figure.has-caption.has-caption-details h1 {
    top: 16.5rem;
    top: calc(16.5vw + 5.25rem);
    left: calc(33.3333% + 2.25rem)
  }*/
  .header-figure.has-caption.has-caption-details img {
    position: relative !important;
    /*top: 5.25em;*/
  }
}
/*@media (min-width: 100em) {
  .header-figure.has-caption.has-caption-details img {
    height: 45vw;
  }
}*/

/*@media (min-width: 70em) {
  .header-figure .caption h1 {
    font-size: 3vmax;
  }
  .header-figure .caption h1 span:first-child {
    display: block;
    font-size: 1.3em
  }
  .header-figure .caption h1 br {
    display: none;
  }
  .header-figure .caption h1 strong {
    font-size: 2.1875em;
    display: block;
  }
  .header-figure .caption h1 span:last-child {
    font-size: 2.1em;
  }
}*/
</style>

{% if site.phase == 'false2' %}
<style>
  .header-figure.has-caption.has-caption-details .caption .details {
    background: rgb(6, 179, 188); /* @blueberry */
    background: rgb(141, 208, 59); /* @lime */
    background: rgb(237, 59, 136); /* @strawberry */
    background: rgb(255, 194, 51); /* @banana */
    margin-top: -6.75em !important;
    padding-top: 2.25em;
    padding-bottom: 2.25em;
  }
  .header-figure.has-caption.has-caption-details .caption .details a,
  .header-figure.has-caption.has-caption-details .caption .details strong[style] {
    color: rgb(255, 224, 81) !important; /* @bright-banana */
    color: white !important;
  }
</style>
{% elsif site.phase == 'false3' %}
<style>
  .header-figure.has-caption.has-caption-details .caption .details {
    background: rgb(6, 179, 188); /* @blueberry */
    background: rgb(141, 208, 59); /* @lime */
    background: rgb(237, 59, 136); /* @strawberry */
  }
  .header-figure.has-caption.has-caption-details .caption .details a,
  .header-figure.has-caption.has-caption-details .caption .details span,
  .header-figure.has-caption.has-caption-details .caption .details strong {
    color: rgb(255, 224, 81) !important; /* @bright-banana */
    color: white !important;
  }
</style>
{% elsif site.phase >= 1 %}
<style>
  .header-figure.has-caption.has-caption-details .caption .details {
    background: rgb(141, 208, 59); /* @lime */
    background: rgb(237, 59, 136); /* @strawberry */
    background: white;
    background: transparent;
    background: rgb(6, 179, 188); /* @blueberry */
  }
  .header-figure.has-caption.has-caption-details .caption .details svg,
  .header-figure.has-caption.has-caption-details .caption .details,
  .header-figure.has-caption.has-caption-details .caption .details a,
  .header-figure.has-caption.has-caption-details .caption .details strong,
  .header-figure.has-caption.has-caption-details .caption .details strong[style] {
    color: rgb(255, 224, 81) !important; /* @bright-banana */
    color: rgb(237, 59, 136) !important; /* @strawberry */
    color: rgb(6, 179, 188) !important; /* @blueberry */
    color: white !important;
  }
  @media (min-width: 27.5em) {
    .header-figure.has-caption.has-caption-details {
      margin-bottom: -1.5em !important;
    }
    .header-figure.has-caption.has-caption-details + .activate-tag,
    .header-figure.has-caption.has-caption-details + .activate-tag + h2,
    .header-figure.has-caption.has-caption-details + .activate-tag + h2 + p {
      position: relative;
      z-index: 5;
    }
    .header-figure.has-caption.has-caption-details .caption .details {
      background: transparent;
      font-size: 2vmax;
    }
    .header-figure.has-caption.has-caption-details .caption {
      padding: 0;
    }
    .header-figure.has-caption.has-caption-details .caption .details {
      color: rgb(41, 41, 41) !important; /* @midnight */;
      color: white !important;
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 0;
      width: 100vw;
      padding-bottom: 3em !important;
      border-bottom: 3em solid white;
    }
    .disabled .header-figure.has-caption.has-caption-details .caption .details .wrap {
      background-color: rgb(255, 194, 51); /* @banana */
      background-color: rgb(6, 179, 188); /* @blueberry */
      padding: 0.375em 0.75em;
      display: inline-block;
      line-height: 1;
    }


    .header-figure.has-caption.has-caption-details .caption .details .wrap {
      --disabled-background-image: linear-gradient(to top, transparent, transparent 5%, rgb(6, 179, 188) 5%, rgb(6, 179, 188) 65%, transparent 65%, transparent); /* @blueberry */
    }
    .disabled .header-figure.has-caption.has-caption-details .caption .details .wrap a {
    display: inline;
    font-style: italic;
    font-weight: 900; /* @black */
    text-transform: uppercase;
      text-decoration: none;
      background-image: linear-gradient(to top, transparent, transparent 5%, rgb(6, 179, 188) 5%, rgb(6, 179, 188) 65%, transparent 65%, transparent); /* @blueberry */
    }
    .header-figure.has-caption.has-caption-details .caption .details a {
      font-weight: bold;
    }
    .header-figure.has-caption.has-caption-details .caption .details a,
    .header-figure.has-caption.has-caption-details .caption .details strong[style] {
      color: rgb(6, 179, 188) !important; /* @blueberry */
      color: rgb(46, 219, 228) !important; /* @bright-blueberry */
      color: white !important;
    }
    .header-figure.has-caption.has-caption-details .caption .details a:hover,
    .header-figure.has-caption.has-caption-details .caption .details a:active,
    .header-figure.has-caption.has-caption-details .caption .details a:focus {
      color: white !important;
      color: rgb(46, 219, 228) !important; /* @bright-blueberry */
    }
    @supports (text-shadow: 0 0 0 rgb(0, 0, 0)) {

      .disabled .header-figure.has-caption.has-caption-details .caption .details .wrap {
        position: relative;
        left: 0.2em;
        /*
        margin-right: 0.2em;
        */
        color: transparent;
        text-shadow: -0.2em 0 0 rgb(237, 59, 136); /* @strawberry */
      }
    }
  }
  .header-figure.has-caption.has-caption-details .caption .details svg path,
  .header-figure.has-caption.has-caption-details .caption .details svg line,
  .header-figure.has-caption.has-caption-details .caption .details svg polyline {
    stroke: currentColor;
  }
  @media (min-width: 70em) {
    .header-figure.has-caption.has-caption-details .caption .details {
      background: transparent;
      font-size: 1.5vmax;
    }
  }
</style>
{% elsif site.phase == 5 %}
<style>
  .header-figure.has-caption.has-caption-details .caption .details {
    background: rgb(6, 179, 188); /* @blueberry */
    background: rgb(141, 208, 59); /* @lime */
    background: rgb(249, 160, 51); /* @tangerine */
  }
  .header-figure.has-caption.has-caption-details .caption .details a,
  .header-figure.has-caption.has-caption-details .caption .details strong[style] {
    color: rgb(255, 224, 81) !important; /* @bright-banana */
    color: white !important;
  }
</style>
{% elsif site.phase == 6 %}
<style>
  @media (min-width: 70em) {
    body {
      padding-top: 12.75em;
    }
    .header-figure.has-caption.has-caption-details .caption .details {
      top: -7.5em;
    }
  }
  .header-figure.has-caption.has-caption-details .caption .details {
    background: rgb(6, 179, 188); /* @blueberry */
  }
  .header-figure.has-caption.has-caption-details .caption .details a,
  .header-figure.has-caption.has-caption-details .caption .details strong[style] {
    color: rgb(255, 224, 81) !important; /* @bright-banana */
    color: white !important;
  }
</style>
{% endif %}

<div class="standard-figure has-caption header-figure has-caption-details">
  <img src="/assets/images/home/384-wide/womens-march-la.jpg" srcset="/assets/images/home/384-wide/womens-march-la.jpg 384w, /assets/images/home/512-wide/womens-march-la.jpg 512w, /assets/images/home/768-wide/womens-march-la.jpg 768w, /assets/images/home/1024-wide/womens-march-la.jpg 1024w, /assets/images/home/1536-wide/womens-march-la.jpg 1536w, /assets/images/home/2048-wide/womens-march-la.jpg 2048w" sizes="200vw" alt="Women’s March Los Angeles" />
  <div class="caption">
    <div>
      <!-- <h1>Los Angeles:<br /><strong>Change</strong> is&nbsp;Local</h1> -->
      <h1><span>Los Angeles:</span><br /><strong>Change</strong> <span>is&nbsp;Local</span></h1>

<div class="details">

{% include timeline-message.html %}

</div><!-- /.details -->

    </div>
  </div>
</div>


<!-- <hr style="margin-top: -1.5em" /> -->

<p class="activate-tag">#ACTIVATEFORLA</p>

<h2>
  <span class="avoid-break">How would</span>
  <span class="avoid-break">you activate</span>
  <span class="avoid-break">100,000 Angelenos</span>
  <span class="avoid-break">
    for a <span class="avoid-break">better LA?</span>
  </span>
</h2>

LA2050 is a community-guided initiative driving and tracking progress toward a shared vision for the future of Los Angeles. With the support of 30,000 Angelenos, we’ve outlined an aspirational vision centered on five goals and 60+ metrics tracked over time to evaluate how Los Angeles is faring. We've supported 42 great projects to shape a better LA via the My LA2050 Grants Challenge.<br /><br /><strong>The My LA2050 Activation Challenge is an open call for ideas that will activate 100,000 Angelenos to make LA the best place to learn, create, play, connect, and live.<br /><br />A total of $1,000,000</strong> will be awarded among five organizations to implement their ideas engaging Angelenos. Each organization will receive a total of $200,000 (over two years) and [partnership from LA2050](/about/#la2050-partnership) in support of their efforts.

<strong>Now, we're asking for your help to turn the [LA2050 goals and metrics](/about/#goals) into action.</strong>

{% if site.phase == 1 %}

Starting Thursday, <strong>March 1, 2018</strong> <small>(9am Pacific Time)</small>, you can submit your proposal on this website.

Read our <a href="/submit/#guidelines">guidelines for proposals</a>.

{% elsif site.phase == 2 %}

<a href="{{ site.submission_url }}">Submit your idea</a> by Friday, **March 30, 2018** <small>(5pm Pacific Time)</small>.

Read our <a href="/submit/#guidelines">guidelines for proposals</a>.

{% elsif site.phase == 3 %}

<p>
  <em>The submission period is complete.</em>
</p>
<p>
  Proposals will be showcased here on <strong>April 9, 2018</strong>. Finalists will be announced on
  <span class="avoid-break">
    <strong>May 21, 2018</strong>.
  </span>
</p>

{% elsif site.phase == 4 %}

<p>
  <em>The submission period is complete.</em>
</p>
<p>
  <a href="/entries/">Check out the entries</a>.
  Finalists will be announced on
  <span class="avoid-break">
    <strong>May 21, 2018</strong>.
  </span>
</p>

{% elsif site.phase == 5 %}

<p>
  <em>The submission period is complete.</em>
</p>
<p>
  <a href="/finalists/">Check out the finalists</a>.
  Voting begins on
  <span class="avoid-break">
    <strong>June 19, 2018</strong>.
  </span>
</p>

{% elsif site.phase == 6 %}

<p>
  <a href="{{ site.vote_url }}">Vote for a proposal</a>!
  Winners will be announced on 
  <span class="avoid-break">
    <strong>July 9, 2018</strong>.
  </span>
</p>

{% elsif site.phase == 7 %}

<p>
  <em>The public voting period is complete.</em>
</p>
<p>
  <a href="/finalists/">Check out the finalists</a>.
  Winners will be announced on 
  <span class="avoid-break">
    <strong>July 9, 2018</strong>.
  </span>
</p>

{% elsif site.phase == 8 %}

<p><em>The winners have been announced!</em></p>
<p><a href="/winners/">Check out the winners</a></p>

{% endif %}


<div class="numbers" markdown="1">
$1 million
: in grants

5
: organizations

$200,000
: over two years
</div>


<figure class="standard-figure has-caption">
  <img src="/assets/images/home/384-wide/lamas.jpg" srcset="/assets/images/home/384-wide/lamas.jpg 384w, /assets/images/home/512-wide/lamas.jpg 512w, /assets/images/home/768-wide/lamas.jpg 768w, /assets/images/home/1024-wide/lamas.jpg 1024w, /assets/images/home/1536-wide/lamas.jpg 1536w, /assets/images/home/2048-wide/lamas.jpg 2048w" sizes="100vw" alt="LA Más" />
  <figcaption class="caption"><span>Join us to harness our region’s civic activism for a better Los Angeles.</span></figcaption>
</figure>


<section class="standard-section activation-examples"><div markdown="1">

## What do we mean by activation?

<strong>
  We don’t want to limit your imagination, <em>so think big</em>!
</strong>

* ![](/assets/images/examples/share-news.svg) Read and share news
* ![](/assets/images/examples/donate.svg) Donate or fundraise
* ![](/assets/images/examples/rally.svg) Participate in a rally or meeting
* ![](/assets/images/examples/political-process.svg) Participate in political processes
* ![](/assets/images/examples/digital-activism.svg) Digital activism
* ![](/assets/images/examples/volunteer.svg) Volunteer
* ![](/assets/images/examples/boycott.svg) Boycott / Buycott
* ![](/assets/images/examples/organize-community.svg) Organize community
* ![](/assets/images/examples/vote.svg) Vote
* ![](/assets/images/examples/civic-tech.svg) Civic tech

Read our [guidelines for proposals](/submit/#guidelines).

</div></section>


## Winners Selection

Winners will be selected via a two-step process:

**25 finalists will be selected by an evaluation committee**: LA2050 will nominate an evaluation committee comprised of community members and experts to review and score applications. The evaluation committee will select 25 finalists—five in each goal category.

**5 winning proposals will be selected by the public**: The public will vote on the finalists. The activations in each goal category that receive the most votes will be announced as the winners.

The finalists will represent a diverse set of issues, engagement strategies, and activation goals. Finalists will be selected using the following criteria:

* Impact on the [LA2050 goals and metrics](/about/#goals)
* Overall quality of the application
* Feasibility
* Ability to mobilize the LA community
* Collaborative spirit

{% if site.phase <= 5 %}

Starting Tuesday, <strong>June 19, 2018</strong>, you can [vote for a proposal](/vote/) on this website.

{% elsif site.phase == 6 %}

<p>
  <a href="{{ site.vote_url }}">Vote for a proposal</a>!
  Winners will be announced on 
  <span class="avoid-break">
    <strong>July 9, 2018</strong>.
  </span>
</p>

{% elsif site.phase == 7 %}

<p>
  <em>The public voting period is complete.</em>
</p>
<p>
  <a href="/finalists/">Check out the finalists</a>.
  Winners will be announced on 
  <span class="avoid-break">
    <strong>July 9, 2018</strong>.
  </span>
</p>

{% elsif site.phase == 8 %}

<p><em>The winners have been announced!</em></p>
<p><a href="/winners/">Check out the winners</a></p>

{% endif %}

<section class="standard-section timeline" id="dates"><div markdown="1">

## Key Dates

{% if site.phase == 2 %}
**![](/assets/images/timeline/strawberry/submission.svg) March 1-30, 2018**
: **Submission Period**
{% else %}
![](/assets/images/timeline/submission.svg) March 1-30, 2018
: Submission Period
{% endif %}

{% if site.phase == 6 %}
**![](/assets/images/timeline/strawberry/voting.svg) June 19-29, 2018**
: **Public Voting**
{% else %}
![](/assets/images/timeline/voting.svg) June 19-29, 2018
: Public Voting
{% endif %}

{% if site.phase == 8 %}
**![](/assets/images/timeline/strawberry/winners.svg) July 9, 2018**
: **Winners Announced**
{% else %}
![](/assets/images/timeline/winners.svg) July 9, 2018
: Winners Announced
{% endif %}


View the full [timeline](/timeline).

</div></section>

