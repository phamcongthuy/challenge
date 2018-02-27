---
title: Proposals for the 2018 My LA2050 Activation Challenge
body_class: strawberry home
main_class: standard-layout
---

<div class="standard-figure has-caption header-figure has-caption-details">
  <div class="mask"></div>
  <img style="object-position: top" src="/assets/images/home/384-wide/lamas.jpg" srcset="/assets/images/home/384-wide/lamas.jpg 384w, /assets/images/home/512-wide/lamas.jpg 512w, /assets/images/home/768-wide/lamas.jpg 768w, /assets/images/home/1024-wide/lamas.jpg 1024w, /assets/images/home/1536-wide/lamas.jpg 1536w, /assets/images/home/2048-wide/lamas.jpg 2048w" sizes="100vw" alt="LA Más" />
  <div class="caption" style="padding-top: 0; padding-bottom: 0;">
    <div>
      <h1>The <strong>proposals</strong><br />that will shape LA</h1>
<!--       <p style="max-width: 27em">
        <strong>Check out the projects <span class="avoid-break">that will shape LA</span></strong>
      </p> -->
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

<style>
  

  .proposals,
  .proposals li {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }
  .proposals {
    grid-column: 1/4 !important;
    display: grid;
    max-width: none;
    grid-template-columns: repeat( auto-fit, minmax(15em, 1fr) );
    grid-column-gap: 3em;
    grid-row-gap: 4.5em;
    margin-bottom: 4.5em !important;
  }
  .proposals a,
  .proposals a:hover {
    color: inherit !important;
    text-decoration: none;
  }
  .proposals img {
    display: block;
  }
  .proposals h4 {
    margin-top: 0;
    color: inherit;
    padding: 0.375em 0.75em;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.05em;
    max-width: none;
  }
  .proposals h3 {
    margin-top: 0.75em;
    font-size: 1.125em;
    line-height: 1.25;
    color: inherit;
    /*padding: 0 0.75em;*/
    color: rgb(237, 192, 50); /* @dark-banana */
    max-width: none;
  }
  .proposals .description {
    font-size: 0.875em;
    display: none;
    /*padding: 0 0.75rem;*/
  }
  .proposals .organization {
/*    opacity: 0.5;*/
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.875em;
    /*padding: 0 0.75rem;*/
  }

  .proposals .strawberry {
    background-color: rgb(237, 59, 136); /* @strawberry */
    color: white;
  }
  .proposals .blueberry {
    background-color: rgb(6, 179, 188); /* @blueberry */
    color: white;
  }
  .proposals .banana {
    background-color: rgb(255, 194, 51); /* @banana */
    color: white;
  }
  .proposals .tangerine {
    background-color: rgb(249, 160, 51); /* @tangerine */
    color: white;
  }
  .proposals .lime {
    background-color: rgb(141, 208, 59); /* @lime */
    color: white;
  }

  .goals-proposals p {
    max-width: none;
  }
  .goals-proposals .browse {
    text-align: center;
  }
  .goals-proposals .count {
    text-align: center;
  }

  .proposals img + div {
    opacity: 0;
    height: 1.5em;
  }



/*  body {
    background: rgba(0, 0, 0, 0.05);
  }

  .proposals li {
    display: block;
    background: white;
    padding-bottom: 0.75em;
  }*/
</style>


<section class="goals" id="goals">

<div class="navigation"><div markdown="1">

<!--
## Browse by Goal
-->

<ul class="action" style="max-width: none;">
  <li class="blueberry"><a href="#learn">Learn</a></li>
  <li class="banana"><a href="#create">Create</a></li>
  <li class="strawberry"><a href="#play">Play</a></li>
  <li class="tangerine"><a href="#connect">Connect</a></li>
  <li class="lime"><a href="#live" class="active">Live</a></li>
</ul>

<p class="count" style="margin-top: 3em;">There are <strong>23</strong> proposals in the <strong>LIVE</strong> category.</p>

</div>

</div></section>

<ul class="proposals">
    <li>
        <article>
            <a href="/proposal-details/" title="AltaSea: Where STEM Meets the Ocean">
                <img src="https://skild-prod.s3.amazonaws.com/myla2050/images/custom540/3892536625741-team89.jpg" alt="AltaSea: Where STEM Meets the Ocean" width="540" height="428" />
                <div class="blueberry">
                    <h4>Learn</h4>
                </div>
                <div class="content">
                    <div class="organization">AltaSea at the Port of Los Angeles</div>
                    <h3>AltaSea: Where STEM Meets the Ocean</h3>
                    <div class="description">AltaSea and our partners are inspiring the next generation to explore the ocean and to generate blue solutions to the world’s most pressing challenges: food, energy and climate security.</div>
                </div>
            </a>
        </article>
    </li>
    <li>
        <article>
            <a href="/proposal-details/" title="Skills development, creative expression and team building through classic car restoration.">
                <img src="https://skild-prod.s3.amazonaws.com/myla2050/images/custom540/3013757055741-team88.JPG" alt="Skills development, creative expression and team building through classic car restoration." width="540" height="428" />
                <div class="blueberry">
                    <h4>Learn</h4>
                </div>
                <div class="content">
                    <div class="organization">Lost Angels Children's Project</div>
                    <h3>Skills development, creative expression and team building through classic car restoration.</h3>
                    <div class="description">Lost Angels Children's Project engages at-risk youth through classic car restoration and customization to learn a trade, gain life skills and become empowered through team building activities.</div>
                </div>
            </a>
        </article>
    </li>
    <li>
        <article>
            <a href="/proposal-details/" title="Catalyzing Community Partnerships to create economic mobility for LA’s underserved entrepreneurs">
                <img src="https://skild-prod.s3.amazonaws.com/myla2050/images/custom540/7035677564741-team90.jpg" alt="Catalyzing Community Partnerships to create economic mobility for LA’s underserved entrepreneurs" width="540" height="428" />
                <div class="banana">
                    <h4>Create</h4>
                </div>
                <div class="content">
                    <div class="organization">Opportunity Fund</div>
                    <h3>Catalyzing Community Partnerships to create economic mobility for LA’s underserved entrepreneurs</h3>
                    <div class="description">Opportunity Fund will say “Yes!” to 240 underserved LA small business owners in collaboration with 10+ community organizations and invest capital in their enterprises to create self-sufficiency & jobs</div>
                </div>
            </a>
        </article>
    </li>
    <li>
        <article>
            <a href="/proposal-details/" title="If She Can See It, She Can Be It: Empowering Girls &amp; Creating a Gender-Balanced Media Landscape ">
                <img src="https://skild-prod.s3.amazonaws.com/myla2050/images/custom540/8697450355741-team90.jpg" alt="If She Can See It, She Can Be It: Empowering Girls &amp; Creating a Gender-Balanced Media Landscape " width="540" height="428" />
                <div class="banana">
                    <h4>Create</h4>
                </div>
                <div class="content">
                    <div class="organization">Geena Davis Institute on Gender in Media at Mount Saint Mary’s University</div>
                    <h3>If She Can See It, She Can Be It: Empowering Girls & Creating a Gender-Balanced Media Landscape </h3>
                    <div class="description">The Geena Davis Institute will invite 50 young women to participate in its See Jane Salons, fostering future female entertainment leaders and empowering girls in LA around issues of gender in media.</div>
                </div>
            </a>
        </article>
    </li>
    <li>
        <article>
            <a href="/proposal-details/" title="Cleantech 2 Edtech: LA schools save energy as students and startups implement cleantech innovations">
                <img src="https://skild-prod.s3.amazonaws.com/myla2050/images/custom540/4863691455741-team91.jpg" alt="Cleantech 2 Edtech: LA schools save energy as students and startups implement cleantech innovations" width="540" height="428" />
                <div class="banana">
                    <h4>Create</h4>
                </div>
                <div class="content">
                    <div class="organization">California Institute of Technology</div>
                    <h3>Cleantech 2 Edtech: LA schools save energy as students and startups implement cleantech innovations</h3>
                    <div class="description">Cleantech 2 Edtech will speed energy saving innovations into LA schools, engage students in energy saving projects and open new opportunities for fast growing cleantech companies in Los Angeles.</div>
                </div>
            </a>
        </article>
    </li>
    <li>
        <article>
            <a href="/proposal-details/" title="Restoring and reimagining the World&#039;s First &#039;Polyphonoptic&#039; sculpture in downtown Los Angeles">
                <img src="https://skild-prod.s3.amazonaws.com/myla2050/images/custom540/7344404654741-team91.jpg" alt="Restoring and reimagining the World&#039;s First &#039;Polyphonoptic&#039; sculpture in downtown Los Angeles" width="540" height="428" />
                <div class="strawberry">
                    <h4>Play</h4>
                </div>
                <div class="content">
                    <div class="organization">The Triforium Project</div>
                    <h3>Restoring and reimagining the World's First 'Polyphonoptic' sculpture in downtown Los Angeles</h3>
                    <div class="description">The Triforium is a piece of “polyphonoptic” public art in DTLA that was 40 years ahead of its time; we want to restore and retrofit it to achieve the artist's dream of music, community, and wonder.</div>
                </div>
            </a>
        </article>
    </li>
    <li>
        <article>
            <a href="/proposal-details/" title="Theraputic Ocean Engagement: Surfing (T.O.E.S. as in, on the nose!)">
                <img src="https://skild-prod.s3.amazonaws.com/myla2050/images/custom540/8758171455741-team90.jpg" alt="Theraputic Ocean Engagement: Surfing (T.O.E.S. as in, on the nose!)" width="540" height="428" />
                <div class="strawberry">
                    <h4>Play</h4>
                </div>
                <div class="content">
                    <div class="organization">Surf Bus Foundation</div>
                    <h3>Theraputic Ocean Engagement: Surfing (T.O.E.S. as in, on the nose!)</h3>
                    <div class="description">Therapeutic Ocean Engagement: Surfing (T.O.E.S)</div>
                </div>
            </a>
        </article>
    </li>
    <li>
        <article>
            <a href="/proposal-details/" title="The Man2Man Project: Preventing boys from becoming dads too early and helping teen dads to step up!">
                <img src="https://skild-prod.s3.amazonaws.com/myla2050/images/custom540/1711077255741-team90.JPG" alt="The Man2Man Project: Preventing boys from becoming dads too early and helping teen dads to step up!" width="540" height="428" />
                <div class="tangerine">
                    <h4>Connect</h4>
                </div>
                <div class="content">
                    <div class="organization">Friends of the Family</div>
                    <h3>The Man2Man Project: Preventing boys from becoming dads too early and helping teen dads to step up!</h3>
                    <div class="description">The Man2Man Project will connect multiple generations of men and boys for the dual purpose of helping young dads to become great fathers and preventing at-risk boys from becoming fathers too soon.</div>
                </div>
            </a>
        </article>
    </li>
    <li>
        <article>
            <a href="/proposal-details/" title="Pathways to Employment through Professional Volunteerism">
                <img src="https://skild-prod.s3.amazonaws.com/myla2050/images/custom540/4769182815741-team88.png" alt="Pathways to Employment through Professional Volunteerism" width="540" height="428" />
                <div class="tangerine">
                    <h4>Connect</h4>
                </div>
                <div class="content">
                    <div class="organization">Tierra del Sol Foundation</div>
                    <h3>Pathways to Employment through Professional Volunteerism</h3>
                    <div class="description">Tierra del Sol Foundation will empower adults with developmental disabilities to achieve a life of meaning, acceptance, value, and inclusion, via professional volunteerism as a pathway to employment.</div>
                </div>
            </a>
        </article>
    </li>
    <li>
        <article>
            <a href="/proposal-details/" title="Big Citizen HUB: Building a pipeline of social change makers via leadership and community service">
                <img src="https://skild-prod.s3.amazonaws.com/myla2050/images/custom540/9500569955741-team90.jpg" alt="Big Citizen HUB: Building a pipeline of social change makers via leadership and community service" width="540" height="428" />
                <div class="tangerine">
                    <h4>Connect</h4>
                </div>
                <div class="content">
                    <div class="organization">Big Citizen HUB</div>
                    <h3>Big Citizen HUB: Building a pipeline of social change makers via leadership and community service</h3>
                    <div class="description">Big Citizen HUB will connect 236 diverse young people, ages 11-26, from all across Los Angeles for 22 Saturdays to learn about our communities and address local issues through service.</div>
                </div>
            </a>
        </article>
    </li>
    <li>
        <article>
            <a href="/proposal-details/" title="The Precise Barber College">
                <img src="https://skild-prod.s3.amazonaws.com/myla2050/images/custom540/3954291065741-team90.jpg" alt="The Precise Barber College" width="540" height="428" />
                <div class="lime">
                    <h4>Live</h4>
                </div>
                <div class="content">
                    <div class="organization">Covenant House California</div>
                    <h3>The Precise Barber College</h3>
                    <div class="description">The Precise Barber College will provide pathways to careers for homeless youth - not just jobs - and combine the best of the for-profit and non-profit worlds for a socially conscious enterprise.</div>
                </div>
            </a>
        </article>
    </li>
    <li>
        <article>
            <a href="/proposal-details/" title="The Future is Bright! A Clean Energy Future for LA">
                <img src="https://skild-prod.s3.amazonaws.com/myla2050/images/custom540/6783094165741-team89.jpg" alt="The Future is Bright! A Clean Energy Future for LA" width="540" height="428" />
                <div class="lime">
                    <h4>Live</h4>
                </div>
                <div class="content">
                    <div class="organization">The Sierra Club Foundation</div>
                    <h3>The Future is Bright! A Clean Energy Future for LA</h3>
                    <div class="description">We’re fighting for an equitable transition to 100 percent clean energy across Los Angeles and all of California!</div>
                </div>
            </a>
        </article>
    </li>
</ul>

<!--
<section class="goals goals-proposals" style="margin: 1.5em 0 2.25em; padding: 0;"><div markdown="1" style="width: 100%">

<div class="navigation">

<ul class="action" style="max-width: none;">
  <li class="blueberry"><a href="#learn">Learn</a></li>
  <li class="banana"><a href="#create">Create</a></li>
  <li class="strawberry"><a href="#play">Play</a></li>
  <li class="tangerine"><a href="#connect">Connect</a></li>
  <li class="lime"><a href="#live" class="active">Live</a></li>
</ul>

</div>

</div></section>
-->

{% endif %}
