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

{% if site.phase == 2 %}
<style>
  .header-figure.has-caption.has-caption-details .caption .details {
    background: rgb(6, 179, 188); /* @blueberry */
    background: rgb(141, 208, 59); /* @lime */
    background: rgb(237, 59, 136); /* @strawberry */
    background: rgb(255, 194, 51); /* @banana */
  }
  .header-figure.has-caption.has-caption-details .caption .details a,
  .header-figure.has-caption.has-caption-details .caption .details strong[style] {
    color: rgb(255, 224, 81) !important; /* @bright-banana */
    color: white !important;
  }
</style>
{% elsif site.phase == 3 %}
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
{% elsif site.phase == 4 %}
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
    .header-figure.has-caption.has-caption-details .caption .details svg,
    .header-figure.has-caption.has-caption-details .caption .details strong,
    .header-figure.has-caption.has-caption-details .caption .details {
      color: rgb(6, 179, 188) !important; /* @blueberry */
      color: rgb(46, 219, 228); /* @bright-blueberry */
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
      font-size: 1.25vmax;
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

{% if site.phase == 1 %}

      <div class="icon">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 33 54.2" style="enable-background:new 0 0 33 54.2;" xml:space="preserve">
          <style type="text/css">
            .st0{fill:none;stroke:white;stroke-width:0.978;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
          </style>
          <path class="st0" d="M32.5,15.9c0-8.5-7.2-15.4-16-15.4s-16,6.9-16,15.4c0,5.4,2.9,10.1,7.2,12.9v7.8c0,1.6,1.3,2.9,2.9,2.9h11.7
            c1.6,0,2.9-1.3,2.9-2.9v-7.8C29.6,26,32.5,21.3,32.5,15.9z"/>
          <path class="st0" d="M23.3,39.5c1.6,0,2.9,1.3,2.9,2.9v1.2c0,1.6-1.3,2.9-2.9,2.9H9.7c-1.6,0-2.9-1.3-2.9-2.9v-1.2
            c0-1.6,1.3-2.9,2.9-2.9"/>
          <path class="st0" d="M23.3,46.6c1.6,0,2.9,1.3,2.9,2.9v1.2c0,1.6-1.3,2.9-2.9,2.9H9.7c-1.6,0-2.9-1.3-2.9-2.9v-1.2
            c0-1.6,1.3-2.9,2.9-2.9"/>
          <path class="st0" d="M16.4,36.6V21.4c0,0-5-2.3-5.1-4.2c-0.1-1.7,3.9,0.5,3.9,0.5s-0.7-4.9,0.7-4.9c1.5,0,1.2,2.9,1.2,4.6
            c0,0,2.8-1.4,4-0.9c1.2,0.5-1,2.4-4.7,4.9"/>
          <line class="st0" x1="6.7" y1="43" x2="26.3" y2="43"/>
          <line class="st0" x1="18.5" y1="50.1" x2="26.3" y2="50.1"/>
          <line class="st0" x1="7.7" y1="36.6" x2="16" y2="36.6"/>
          <path class="st0" d="M4,12.8c0,0,0.3-3.5,3.7-6.3"/>
        </svg>
      </div>
      <p>
        Starting <strong>March 1, 2018</strong><!-- <small>(9am Pacific Time)</small> -->, <span class="avoid-break">you can <a class="avoid-break" style="color: rgb(237, 59, 136); /* @strawberry */" href="/submit/">submit your big idea.</a></span><br />
        Voting begins on
        <span class="avoid-break">
          <strong>June 19, 2018</strong>.
        </span>
      </p>
      <!--
      {% if site.submission_url %}
      <p class="action"><a href="{{ site.submission_url }}">Register</a></p>
      {% else %}
      <p class="action" markdown="1">
        <a href="{{ site.mailing_list_url }}">Get updates</a>
      </p>
      {% endif %}
      -->

{% elsif site.phase == 2 %}

      <div class="icon">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 33 54.2" style="enable-background:new 0 0 33 54.2;" xml:space="preserve">
          <style type="text/css">
            .st0{fill:none;stroke:white;stroke-width:0.978;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
          </style>
          <path class="st0" d="M32.5,15.9c0-8.5-7.2-15.4-16-15.4s-16,6.9-16,15.4c0,5.4,2.9,10.1,7.2,12.9v7.8c0,1.6,1.3,2.9,2.9,2.9h11.7
            c1.6,0,2.9-1.3,2.9-2.9v-7.8C29.6,26,32.5,21.3,32.5,15.9z"/>
          <path class="st0" d="M23.3,39.5c1.6,0,2.9,1.3,2.9,2.9v1.2c0,1.6-1.3,2.9-2.9,2.9H9.7c-1.6,0-2.9-1.3-2.9-2.9v-1.2
            c0-1.6,1.3-2.9,2.9-2.9"/>
          <path class="st0" d="M23.3,46.6c1.6,0,2.9,1.3,2.9,2.9v1.2c0,1.6-1.3,2.9-2.9,2.9H9.7c-1.6,0-2.9-1.3-2.9-2.9v-1.2
            c0-1.6,1.3-2.9,2.9-2.9"/>
          <path class="st0" d="M16.4,36.6V21.4c0,0-5-2.3-5.1-4.2c-0.1-1.7,3.9,0.5,3.9,0.5s-0.7-4.9,0.7-4.9c1.5,0,1.2,2.9,1.2,4.6
            c0,0,2.8-1.4,4-0.9c1.2,0.5-1,2.4-4.7,4.9"/>
          <line class="st0" x1="6.7" y1="43" x2="26.3" y2="43"/>
          <line class="st0" x1="18.5" y1="50.1" x2="26.3" y2="50.1"/>
          <line class="st0" x1="7.7" y1="36.6" x2="16" y2="36.6"/>
          <path class="st0" d="M4,12.8c0,0,0.3-3.5,3.7-6.3"/>
        </svg>
      </div>
      <p>
        <strong style="color: rgb(237, 59, 136); /* @strawberry */"><a href="/submit/">The submission period has started</a>!</strong><br />
        <span class="avoid-break">Apply by <strong>March 30, 2018.</strong></span><br />
        <!--
        <small>
          Voting begins on
          <span class="avoid-break">
            <strong>June 19, 2018.</strong>
          </span>
        </small>
        -->
      </p>
      <!--
      <p class="action" markdown="1">
  <a href="{{ site.submission_url }}">Submit your idea</a>  
      </p>
      -->

{% elsif site.phase == 3 %}

      <div class="icon">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 49.8 57.5" style="enable-background:new 0 0 49.8 57.5;" xml:space="preserve">
        <style type="text/css">
          .st0{fill:none;stroke:white;stroke-width:0.978;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        </style>
        <g>
          <polyline class="st0" points="38.3,28.1 38.3,8.8 5.7,8.8  "/>
          <line class="st0" x1="38.3" y1="48.7" x2="38.3" y2="44"/>
          <polyline class="st0" points="5.7,8.8 0.5,8.8 0.5,57 38.3,57 38.3,48.7  "/>
          <polyline class="st0" points="43.5,28.7 43.5,0.5 5.7,0.5 5.7,8.8  "/>
          <polyline class="st0" points="43.5,43.5 43.5,48.7 38.3,48.7   "/>
          <path class="st0" d="M43.5,28.7c1.1,0.5,2,1.2,2.8,2.1"/>
          <path class="st0" d="M43.5,28.7c-1-0.5-2.2-0.7-3.3-0.7c-0.6,0-1.2,0.1-1.8,0.2"/>
          <path class="st0" d="M43.5,43.5c-1,0.5-2.2,0.7-3.3,0.7c-0.6,0-1.2-0.1-1.8-0.2"/>
          <path class="st0" d="M46.3,30.7c1.2,1.4,2,3.3,2,5.3c0,3.3-2,6.1-4.8,7.4"/>
          <path class="st0" d="M38.3,28.1C34.7,29,32,32.2,32,36.1s2.7,7.1,6.3,7.9"/>
          <line class="st0" x1="49.3" y1="26.2" x2="46.3" y2="30.7"/>
          <line class="st0" x1="43.5" y1="34.9" x2="46.3" y2="30.7"/>
          <polyline class="st0" points="43.5,34.9 40.3,39.7 38.3,37.7   "/>
          <line class="st0" x1="36.6" y1="35.9" x2="38.3" y2="37.7"/>
        </g>
        </svg>
      </div>
      <p>
        The submission period is complete.
        <span style="color: rgb(237, 59, 136); /* @strawberry */"><span class="avoid-break">Entries will be showcased here on <strong>April 9, 2018</strong>.</span></span>
      </p>
      <!--
      <p>
        <small>
          Voting begins on
          <span class="avoid-break">
            <strong>June 19, 2018</strong>.
          </span>
        </small>
      </p>
      -->
      <!--
      <p class="action" markdown="1">
        <a href="{{ site.mailing_list_url }}">Get updates</a>
      </p>
      -->

{% elsif site.phase == 4 %}

      <div class="icon">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 49.8 57.5" style="enable-background:new 0 0 49.8 57.5;" xml:space="preserve">
        <style type="text/css">
          .st0{fill:none;stroke:white;stroke-width:0.978;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        </style>
        <g>
          <polyline class="st0" points="38.3,28.1 38.3,8.8 5.7,8.8  "/>
          <line class="st0" x1="38.3" y1="48.7" x2="38.3" y2="44"/>
          <polyline class="st0" points="5.7,8.8 0.5,8.8 0.5,57 38.3,57 38.3,48.7  "/>
          <polyline class="st0" points="43.5,28.7 43.5,0.5 5.7,0.5 5.7,8.8  "/>
          <polyline class="st0" points="43.5,43.5 43.5,48.7 38.3,48.7   "/>
          <path class="st0" d="M43.5,28.7c1.1,0.5,2,1.2,2.8,2.1"/>
          <path class="st0" d="M43.5,28.7c-1-0.5-2.2-0.7-3.3-0.7c-0.6,0-1.2,0.1-1.8,0.2"/>
          <path class="st0" d="M43.5,43.5c-1,0.5-2.2,0.7-3.3,0.7c-0.6,0-1.2-0.1-1.8-0.2"/>
          <path class="st0" d="M46.3,30.7c1.2,1.4,2,3.3,2,5.3c0,3.3-2,6.1-4.8,7.4"/>
          <path class="st0" d="M38.3,28.1C34.7,29,32,32.2,32,36.1s2.7,7.1,6.3,7.9"/>
          <line class="st0" x1="49.3" y1="26.2" x2="46.3" y2="30.7"/>
          <line class="st0" x1="43.5" y1="34.9" x2="46.3" y2="30.7"/>
          <polyline class="st0" points="43.5,34.9 40.3,39.7 38.3,37.7   "/>
          <line class="st0" x1="36.6" y1="35.9" x2="38.3" y2="37.7"/>
        </g>
        </svg>
      </div>
      <p style="max-width: 28em">
        <span class="wrap">
        <strong style="color: rgb(237, 59, 136); /* @strawberry */"><a href="/entries/" id="home-entries-link">The entries have arrived</a>!</strong>
        </span>
        <span class="wrap">
        <span class="avoid-break">Finalists will be announced on <strong>May 21, 2018</strong>.</span>
        </span>
      </p>
      <script>
      (function() {
        var link = document.getElementById('home-entries-link');
        var categories = [
          'learn',
          'create',
          'play',
          'connect',
          'live'
        ];
        var random = Math.floor(Math.random() * categories.length) + 0;
        console.log(random);
        link.setAttribute('href', '/' + categories[random] + '/');
      })();
      </script>
      <p>
        <span class="wrap">
        <small>
        Voting begins on
        <span class="avoid-break">
          <strong>June 19, 2018</strong>.
        </span>
        </small>
        </span>
      </p>

<!--       <p class="action" markdown="1">
        <a href="/entries/">Check out the entries</a>
      </p> -->

{% elsif site.phase == 5 %}

      <div class="icon">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 61.6 59.6" style="enable-background:new 0 0 61.6 59.6;" xml:space="preserve">
        <style type="text/css">
          .st0{fill:none;stroke:white;stroke-width:0.978;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        </style>
        <path class="st0" d="M29.6,47.4c0,0-2.5-10.8-12.6-16.1"/>
        <path class="st0" d="M14.6,52.5c0,0-1-4.7-6.3-8"/>
        <circle class="st0" cx="9.3" cy="13.7" r="1.7"/>
        <circle class="st0" cx="47.8" cy="16.7" r="1.7"/>
        <circle class="st0" cx="37.9" cy="55.1" r="1.7"/>
        <circle class="st0" cx="6.6" cy="35.2" r="1.7"/>
        <circle class="st0" cx="27.2" cy="4" r="1.7"/>
        <g>
          <path class="st0" d="M43.5,35.2c-5-14.3-17.7-18.5-17.7-18.5l-25.3,40L45.3,43c-0.2-1.6-0.5-3.1-0.8-4.5"/>
          <path class="st0" d="M43.5,35.2c0.2-0.1,0.5-0.2,0.7-0.2c1,0,1.7,0.8,1.7,1.7c0,0.9-0.7,1.6-1.5,1.7"/>
          <path class="st0" d="M43.5,35.2c-0.6,0.3-1,0.9-1,1.6c0,1,0.8,1.7,1.7,1.7c0.1,0,0.1,0,0.2,0"/>
        </g>
        <path class="st0" d="M43.5,27.1c0,0,6.7-8.6,17.6-4.5"/>
        <path class="st0" d="M38.4,19.1c0,0,5.2-4.1,2.7-18.6"/>
        <path class="st0" d="M30.7,16.5c0,0,1.9-3.5,0-6.9"/>
        <path class="st0" d="M48.4,38.5c0,0,4.6-2.7,9.1,1"/>
        <polygon class="st0" points="10.8,19.1 8.2,23.6 13.4,23.6 "/>
        <polygon class="st0" points="52.1,54.9 46.9,54.5 49.1,59.1 "/>
        <polygon class="st0" points="51,5.1 45.8,4.6 48,9.3 "/>
        <path class="st0" d="M46.7,32.4c0,0,4.9-4.5,13.6-0.9"/>
        </svg>
      </div>
      <p>
        The <strong style="color: rgb(237, 59, 136); /* @strawberry */"><a href="/finalists/">finalists</a></strong> have been announced!
        {% if site.event_url %}
        <span class="avoid-break">
          Vote at the <strong style="color: rgb(237, 59, 136); /* @strawberry */"><a href="/event/">public event</a></strong> on <strong>June 19, 2018</strong>.
        </span>
        {% else %}
        <span class="avoid-break">
          Voting begins on
          <span class="avoid-break">
            <strong>June 19, 2018</strong>.
          </span>
        </span>
        {% endif %}
<!--         <br />
        <small>
          Voting begins on
          <span class="avoid-break">
            <strong>June 19, 2018</strong>.
          </span>
          {% unless site.event_url %}
           <span class="avoid-break">
            Winners will be announced on 
            <span class="avoid-break">
              <strong>July 9, 2018</strong>.
            </span>
          </span>
          {% endunless %}
        </small> -->
      </p>
<!--       <p class="action" markdown="1">
        <a href="/finalists/">Check out the finalists</a>
      </p> -->

{% elsif site.phase == 6 %}

      <div class="icon">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 53.5 54.8" style="enable-background:new 0 0 53.5 54.8;" xml:space="preserve">
        <style type="text/css">
          .st0{fill:none;stroke:white;stroke-width:0.978;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        </style>
        <g>
          <polyline class="st0" points="20.5,11.8 9.4,11.8 0.5,30.1 0.5,54.3 53,54.3 53,30.1 45.8,11.8 40.3,11.8  "/>
          <polyline class="st0" points="17.3,21.1 24.4,0.5 42.1,6 37.4,21.1   "/>
          <line class="st0" x1="11.9" y1="21.2" x2="41.7" y2="21.2"/>
          <line class="st0" x1="0.5" y1="30.1" x2="53" y2="30.1"/>
          <line class="st0" x1="25.8" y1="6.4" x2="38" y2="9.8"/>
          <line class="st0" x1="24.3" y1="10" x2="36.5" y2="13.4"/>
          <line class="st0" x1="23.1" y1="13.7" x2="35.3" y2="17.1"/>
        </g>
        </svg>
      </div>
      <p>
        <strong style="color: rgb(237, 59, 136); /* @strawberry */"><a href="/vote/">Public voting has begun</a>!</strong><br />
        <span class="avoid-break">
        Vote by
        <span class="avoid-break">
          <strong>June 29, 2018</strong>.
        </span>
        </span><br />
        <small class="avoid-break" style="font-size: 0.75em; ">
          {% if site.event_url %}
          <span class="avoid-break">
            Hear from the finalists at our <strong style="color: rgb(237, 59, 136); /* @strawberry */"><a href="/event/">public event</a>.</strong>
          </span>
          {% endif %}
          {% unless site.event_url %}
          <span class="avoid-break">
            Winners will be announced on 
            <span class="avoid-break">
              <strong>July 9, 2018</strong>.
            </span>
          </span>
          {% endunless %}
        </small>
      </p>
<!--       <p class="action" markdown="1">
        <a href="{{ site.vote_url }}">Vote for a proposal</a>
      </p> -->

{% elsif site.phase == 7 %}

      <div class="icon">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 53.5 54.8" style="enable-background:new 0 0 53.5 54.8;" xml:space="preserve">
        <style type="text/css">
          .st0{fill:none;stroke:white;stroke-width:0.978;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        </style>
        <g>
          <polyline class="st0" points="20.5,11.8 9.4,11.8 0.5,30.1 0.5,54.3 53,54.3 53,30.1 45.8,11.8 40.3,11.8  "/>
          <polyline class="st0" points="17.3,21.1 24.4,0.5 42.1,6 37.4,21.1   "/>
          <line class="st0" x1="11.9" y1="21.2" x2="41.7" y2="21.2"/>
          <line class="st0" x1="0.5" y1="30.1" x2="53" y2="30.1"/>
          <line class="st0" x1="25.8" y1="6.4" x2="38" y2="9.8"/>
          <line class="st0" x1="24.3" y1="10" x2="36.5" y2="13.4"/>
          <line class="st0" x1="23.1" y1="13.7" x2="35.3" y2="17.1"/>
        </g>
        </svg>
      </div>
      <p>
        Public voting is complete.<br />
        <span class="avoid-break">
          Winners will be announced on 
          <span class="avoid-break" style="color: rgb(237, 59, 136); /* @strawberry */">
            <strong>July 9, 2018</strong>.
          </span>
        </span><br />
        <strong style="color: rgb(237, 59, 136); /* @strawberry */"><a href="/finalists/">Check out the finalists</a>.</strong>
      </p>
      <!--
      <p class="action" markdown="1">
        <a href="/finalists/">Check out the finalists</a>
      </p>
      -->

{% elsif site.phase == 8 %}

      <div class="icon">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 33.5 56.9" style="enable-background:new 0 0 33.5 56.9;" xml:space="preserve">
          <style type="text/css">
            .st0{fill:none;stroke:white;stroke-width:0.978;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
          </style>
          <g>
            <polyline class="st0" points="7.2,29.5 0.9,52.9 7.1,51.5 11.5,55.7 16.7,36.3  "/>
            <polyline class="st0" points="26.3,29.5 32.6,52.9 26.4,51.5 22,55.7 16.7,36.3   "/>
            <line class="st0" x1="15.8" y1="32.7" x2="16.7" y2="36.3"/>
            <path class="st0" d="M26.3,29.5c3.8-2.9,6.2-7.4,6.2-12.5c0-8.7-7.1-15.8-15.8-15.8S1,8.2,1,16.9c0,5.1,2.4,9.7,6.2,12.5"/>
            <path class="st0" d="M17.7,32.7c3.2-0.2,6.2-1.4,8.6-3.2"/>
            <path class="st0" d="M15.8,32.7c0.3,0,0.6,0,1,0c0.3,0,0.6,0,1,0"/>
            <path class="st0" d="M15.8,32.7c-3.2-0.2-6.2-1.4-8.6-3.2"/>
            <polygon class="st0" points="16.7,5.9 18.9,4.9 20.6,6.6 23,6.3 24,8.6 26.3,9.1 26.5,11.6 28.5,12.9 27.8,15.2 29.3,17.2 
              27.8,19.1 28.5,21.5 26.5,22.8 26.3,25.2 24,25.8 23,28 20.6,27.8 18.9,29.5 16.7,28.5 14.6,29.5 12.9,27.8 10.5,28 9.5,25.8 
              7.1,25.2 7,22.8 5,21.5 5.6,19.1 4.2,17.2 5.6,15.2 5,12.9 7,11.6 7.1,9.1 9.5,8.6 10.5,6.3 12.9,6.6 14.6,4.9  "/>
          </g>
        </svg>
      </div>
      <p>
        <strong style="color: rgb(237, 59, 136); /* @strawberry */"><a href="/winners/">The winners have been announced</a>.</strong><br />
        <strong>Thank you to everyone who participated!</strong>
      </p>
      <!--
      <p class="action" markdown="1">
        <a href="/winners/">Check out the winners</a>
      </p>
      -->

{% endif %}

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

