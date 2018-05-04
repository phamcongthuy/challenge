---
title: Vote in the 2018 My LA2050 Activation Challenge
body_class: blueberry
---

<div class="introduction" markdown="1">

<div>
<a href="/finalists/"><img src="/assets/images/vote-logo.png" alt="My LA2050 Activation Challenge" /></a>

<p>Choose one <a href="/finalists/">finalist</a> in each of the five categories.</p>

<p class="action"><a href="#learn" onClick="document.getElementById('learn').scrollIntoView({behavior: 'smooth'}); event.preventDefault();">I’m ready to vote</a></p>

<p style="font-size: 1rem"><a href="/finalists/" target="_blank">I want to learn more about the finalists</a>.</p>

  <!--
<ul class="action">
  <li><a href="#learn" onClick="document.getElementById('learn').scrollIntoView({behavior: 'smooth'}); event.preventDefault();">Start voting</a></li>
  <li style="margin-top: 1.5em"><a href="#learn" onClick="document.getElementById('learn').scrollIntoView({behavior: 'smooth'}); event.preventDefault();">Learn more about the finalists</a></li>
  
</ul>-->
</div>

<!--
<p style="margin-top: 1.5em">
  <a href="#learn">
    <svg viewBox="0 0 448 512" width="24" height="24">
      <switch>
        <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" class=""></path>
        <foreignObject>Okay, let’s go</foreignObject>
      </switch>
    </svg>
  </a>
</p>
-->

</div>

<style>
section,
.introduction {
  display: flex;
  min-height: 100vh;
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
}
.introduction img {
  margin-top: -3em;
  width: 20em;
  height: auto;
}
.introduction p {
  max-width: none;
}
.introduction .action {
  margin-top: 3em;
}

/*.introduction {
  margin-top: -4.5em;
  margin-left: -4.5em;
  margin-right: -4.5em;
  background-color: rgb(6, 179, 188);
  color: rgb(254, 254, 254);
  padding: 0 4.5em 3em;
}
.introduction a {
  color: inherit;
}
.introduction svg {
  width: 1.5em;
  height: 1.5em;
  fill: currentColor;
}*/
</style>

<style>

  
  form li:nth-child(1) {
    order: var(--order-1);
  }
  
  form li:nth-child(2) {
    order: var(--order-2);
  }
  
  form li:nth-child(3) {
    order: var(--order-3);
  }
  
  form li:nth-child(4) {
    order: var(--order-4);
  }
  
  form li:nth-child(5) {
    order: var(--order-5);
  }
  
</style>

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

<style>
.promotion {
  display: none;
}
hr {
  visibility: hidden;
}
form {
  text-align: center;
}
form ul,
form li {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
form,
form h2,
form h3,
form h4,
form p,
form ul,
form li {
  max-width: none;
}
form h2,
form h3,
form h4,
form p:last-child {
  margin-top: 3em;
}
form h2,
form h3,
form h4 {
  color: var(--primary-color) !important;
  font-weight: bold;
}
form strong {
  /*color: rgb(41, 41, 41) !important;*/ /* @midnight */
  /*font-weight: 500;*/
  color: var(--primary-color) !important;
}
form li {
  margin-top: 1.5em;
  position: relative;
}
form li label {
  cursor: pointer;
}
form li input {
  font-size: inherit;
  margin-bottom: 0.75em;
  position: absolute;
  opacity: 0;
}
form li .call-to-action,
form li .pseudo-checkbox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s;
  font-size: 1.5em;
}
form li .pseudo-checkbox {
  display: none;
}
form label:hover .call-to-action {
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
form li input:checked ~ .call-to-action {
  display: none;
}
form li input:checked ~ .pseudo-checkbox {
  background: rgba(0, 0, 0, 0.5); /* @lime */
  opacity: 1;
  display: flex;
}
form .blueberry label:hover .call-to-action,
form .blueberry input:checked ~ .pseudo-checkbox {
  background: rgba(6, 179, 188, 0.5); /* @blueberry */
}
form .banana label:hover .call-to-action,
form .banana input:checked ~ .pseudo-checkbox {
  background: rgba(255, 194, 51, 0.5); /* @banana */
}
form .strawberry label:hover .call-to-action,
form .strawberry input:checked ~ .pseudo-checkbox {
  background: rgba(237, 59, 136, 0.5); /* @strawberry */
}
form .tangerine label:hover .call-to-action,
form .tangerine input:checked ~ .pseudo-checkbox {
  background: rgba(249, 160, 51, 0.5); /* @tangerine */
}
form .lime label:hover .call-to-action,
form .lime input:checked ~ .pseudo-checkbox {
  background: rgba(141, 208, 59, 0.5); /* @lime */
}
form li .call-to-action svg,
form li .pseudo-checkbox svg {
  fill: currentColor;
  width: 0.75em;
  height: 0.75em;
  margin-right: 0.5em;
  border: 3px solid white;
  padding: 0.25em;
}
form input[type="email"] {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: 600;
  padding: 0.75em;
  border-radius: 0;
  width: 100%;
  max-width: none;
  box-sizing: border-box;
  text-align: center;
  border: 0.1875em solid rgb(237, 59, 136); /* @strawberry */
  border-color: rgba(0, 0, 0, 0.25);

  /* Remove Safari’s default styles for search fields */
  -webkit-appearance: none;
}

form ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
form li {
  width: 20em;
  padding: 0;
  box-sizing: border-box;
  padding: 1.5em;
  margin: 1.5em 0;
}
form li img {
  width: 100%;
  max-width: none;
  height: 15em;
  object-fit: cover;
}
form section {
  border-width: 0.125em;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.15);
  border-color: transparent;
  padding: 3em;
  /*max-width: 40em;*/
  /*margin: 3em auto;*/
}
form section h2,
form section h3 {
  margin-top: 1.5em;
}
</style>

<form name="vote" action="/vote/email-sent/" method="post" markdown="1" data-netlify="true">

<h2 class="blueberry" id="learn">Who would you like to vote for in the <span style="text-transform: uppercase;">Learn</span> category?</h2>

<ul class="blueberry">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "learn" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}
{% if project.is_finalist == true %}
<li>
<label>
  <input type="radio" name="learn" value="{{ project.organization_name }}" />
  <span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
      <strong style="color: white !important; font-weight: bold; text-transform: uppercase;">Voted</strong>
    </svg>
  </span>
  <span class="call-to-action">
    <svg></svg>
    <strong style="color: white !important; font-weight: bold; text-transform: uppercase;">Vote</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <!--
  <a class="has-icon">
    <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" />
    <span class="icon play">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.2 33.7" width="29" height="34">
      <title>Play Video</title>
      <switch>
      <polygon fill="black" points="29.2,16.9 0,0 0,33.7 29.2,16.9 0,0 0,33.7 "></polygon>
      <foreignObject>Play Video</foreignObject>
      </switch>
      </svg>
    </span>
  </a><br />
  -->
  <strong>{{ project.organization_name }}</strong><br />{{ project.title }}
</label>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />

<h2 class="banana" id="create">Who would you like to vote for in the <span style="text-transform: uppercase;">Create</span> category?</h2>

<ul class="banana">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "create" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}
{% if project.is_finalist == true %}
<li>
<label>
  <input type="radio" name="create" value="{{ project.organization_name }}" />
  <span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
    </svg>
    <strong style="color: white !important; font-weight: bold; text-transform: uppercase;">Voted</strong>
  </span>
  <span class="call-to-action">
    <svg></svg>
    <strong style="color: white !important; font-weight: bold; text-transform: uppercase;">Vote</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <strong>{{ project.organization_name }}</strong><br />{{ project.title }}
</label>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />

<h2 class="strawberry" id="play">Who would you like to vote for in the <span style="text-transform: uppercase;">Play</span> category?</h2>

<ul class="strawberry">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "play" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}
{% if project.is_finalist == true %}
<li>
<label>
  <input type="radio" name="play" value="{{ project.organization_name }}" />
  <span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
    </svg>
    <strong style="color: white !important; font-weight: bold; text-transform: uppercase;">Voted</strong>
  </span>
  <span class="call-to-action">
    <svg></svg>
    <strong style="color: white !important; font-weight: bold; text-transform: uppercase;">Vote</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <strong>{{ project.organization_name }}</strong><br />{{ project.title }}
</label>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />

<h2 class="tangerine" id="connect">Who would you like to vote for in the <span style="text-transform: uppercase;">Connect</span> category?</h2>

<ul class="tangerine">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "connect" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}
{% if project.is_finalist == true %}
<li>
<label>
  <input type="radio" name="connect" value="{{ project.organization_name }}" />
  <span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
    </svg>
    <strong style="color: white !important; font-weight: bold; text-transform: uppercase;">Voted</strong>
  </span>
  <span class="call-to-action">
    <svg></svg>
    <strong style="color: white !important; font-weight: bold; text-transform: uppercase;">Vote</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <strong>{{ project.organization_name }}</strong><br />{{ project.title }}
</label>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />

<h2 class="lime" id="live">Who would you like to vote for in the <span style="text-transform: uppercase;">Live</span> category?</h2>

<ul class="lime">
{% assign first_item = true %}
{% assign data_collection = site.collections | where: "label", "live" | first %}
{% assign data_list = data_collection.docs %}
{% for project in data_list %}
{% if project.is_finalist == true %}
<li>
<label>
  <input type="radio" name="live" value="{{ project.organization_name }}" />
  <span class="pseudo-checkbox">
    <svg width="24" height="24" viewBox="0 0 512 512">
      <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
    </svg>
    <strong style="color: white !important; font-weight: bold; text-transform: uppercase;">Voted</strong>
  </span>
  <span class="call-to-action">
    <svg></svg>
    <strong style="color: white !important; font-weight: bold; text-transform: uppercase;">Vote</strong>
  </span>
  <img src="/assets/images/{{ project.category }}/2048-wide/{{ project.project_image }}" width="250" /><br />
  <strong>{{ project.organization_name }}</strong><br />{{ project.title }}
</label>
</li>
{% assign first_item = false %}
{% endif %}
{% endfor %}
</ul>

<hr />

<section id="finish" style="display: none;">

<div markdown="1">
## You’re <span style="text-decoration: underline;">almost</span> done!

Now it’s time to confirm your votes by signing in to one of your accounts.

### Sign in with…

<ul class="action" style="max-width: 20em; margin: 1.5em auto 0">
  <li style="order: 3"><a href="#sign-in-email" onClick="document.getElementById('sign-in-email').style.display = 'flex'; document.getElementById('sign-in-email').scrollIntoView({behavior: 'smooth'}); event.preventDefault();">Email</a></li>
  <li style="order: 2"><a href="/vote/confirmation">Facebook</a></li>
  <li style="order: 1"><a href="/vote/confirmation/">Twitter</a></li>
</ul>

<!--
<ul class="action" style="display: block">
  <li style="margin: 0 !important; padding-right: 0;"><a href="#sign-in-email" onClick="document.getElementById('sign-in-email').style.display = 'flex'; document.getElementById('sign-in-email').scrollIntoView({behavior: 'smooth'}); event.preventDefault();">Sign in with email</a></li>
  <li style="margin: 0 !important; padding: 0;">or</li>
  <li style="margin: 0 !important; padding-right: 0;"><a href="/vote/confirmation/">Sign in with Facebook</a></li>
  <li style="margin: 0 !important; padding: 0">or</li>
  <li style="margin: 0 !important; padding-right: 0;"><a href="/vote/confirmation/">Sign in with Twitter</a></li>
</ul>
-->

</div>

</section>

<hr />

<section id="sign-in-email" style="display: none">

<div markdown="1">
### Sign in with email

Next, we’ll send instructions to your email address.

<p style="margin-top: 1.5em; display: flex;">
<label style="flex-grow: 1; margin-right: 0.25em;">
  <input type="email" name="email" placeholder="What’s your email address?" style="text-align: left;" required />
</label>
<button type="submit">Send email</button>
</p>

<p style="margin-top: 1.7142857143em"><small>We will only use this address to complete the voting process. (No spam, we promise!)</small></p>
</div>

</section>

</form>

<div style="margin-top: 9em"></div>

<script src="https://cdn.auth0.com/js/auth0/9.3.1/auth0.min.js"></script>
<script type="text/javascript">
  var webAuth = new auth0.WebAuth({
    domain:      'activation-la2050.auth0.com',
    clientID:    'INfJpr4dnNk2EN143utsZYz4Zeq9c7cd',
    // responseMode: 'form_post',
    responseType: 'token'
  });
</script>

<script>
  function sendEmail(form){
    console.log('sendEmail');

    var email = document.querySelector('input[name="email"]').value;

    var fieldNames = ['learn', 'create', 'play', 'connect', 'live'];
    var votesData = [];
    var nextField;
    for (var index = 0; index < fieldNames.length; index++) {
      nextField = form.querySelector('input[name="' + fieldNames[index] + '"]:checked');
      if (nextField) {
        votesData.push(fieldNames[index] + '=' + encodeURIComponent(nextField.value));
      } else {
        console.log('skipped: ' + fieldNames[index]);
      }
    }

    if ((votesData).length < 1) {
      console.error('No items were voted for');
      return;
    }

    votesData.push('email=' + email);

    console.dir(votesData);

    var redirectUri = window.location.origin + '/vote/authenticated/?' + votesData.join('&');
    console.log('redirectUri: ' + redirectUri);

    webAuth.passwordlessStart({
      connection: 'email',
      send: 'link',
      email: email,
      redirectUri: redirectUri,
    }, function (err,res) {
      if (err) {
        // Handle error
      } else {
        form.action = form.action + '?' + votesData.join('&');
        form.submit();
        // document.querySelector('.introduction').style.display = 'block';
        // document.querySelector('form').style.display = 'none';
      }

      console.log('err');
      console.log(err)
      console.dir(err)

      console.log('res');
      console.log(res)
      console.dir(res)

      // Hide the input and show a "Check your email for your login link!" screen
      //$('.enter-email').hide();
      //$('.check-email').show();


    });
  }

  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    sendEmail(e.target);

  })
</script>


<style>
header, footer {
  display: none;
}
</style>


<script>
(function() {
  function closest(element, tagName) {

    // If the element is the target
    if (element.nodeName.toLowerCase() === tagName) return element;

    var ancestor = element;
    while ((ancestor = ancestor.parentElement) && ancestor.nodeName && ancestor.nodeName.toLowerCase() !== tagName);
    if (ancestor && ancestor.nodeName && ancestor.nodeName.toLowerCase() === tagName) {
      return ancestor;
    }
  }

  //document.addEventListener("DOMContentLoaded", function(event) {
    var form = document.querySelector('form');

    //console.dir(form);

    form.addEventListener('click', function(e) {
      setTimeout(function() {
        if (e.target.nodeName.toLowerCase() === 'input' && e.target.type === 'radio' && e.target.checked) {
          console.log('e.target.name: ' + e.target.name)
          switch(e.target.name) {
            case 'learn':
              document.getElementById('create').scrollIntoView({ behavior: 'smooth' });
              updateProgress();
              break;
            case 'create':
              document.getElementById('play').scrollIntoView({ behavior: 'smooth' });
              updateProgress();
              break;
            case 'play':
              document.getElementById('connect').scrollIntoView({ behavior: 'smooth' });
              updateProgress();
              break;
            case 'connect':
              document.getElementById('live').scrollIntoView({ behavior: 'smooth' });
              updateProgress();
              break;
            case 'live':
              document.getElementById('finish').scrollIntoView({ behavior: 'smooth' });
              updateProgress();
              break;
            default:

          }
        }
      }, 500);
    });
  //});



  var counter = 0;
  function updateProgress() {
    var progress = document.getElementById("progress");
    var count = document.getElementById("vote-count");

    progress.style.display = 'flex';

    count.innerText = ++counter;

    var exclamations = ['Nice!', 'Hooray!', 'Sweet!', 'Way to go!', 'Excellent!'];
    document.getElementById('exclamation').innerText = exclamations[counter - 1];

    if (counter >= 5) {
      progress.style.display = 'none';
      // document.getElementById('finish').scrollIntoView({ behavior: 'smooth' });
    }

    if (counter >= 1) {
      document.getElementById('finish').style.display = 'flex';
    }
  }





})();
</script>



<div class="progress" role="status" id="progress" style="display: none">
  <p><span id="exclamation" style="display: none">Nice!</span> You’ve voted in <span id="vote-count">1</span> of <span>5</span> categories.</p>
  <p class="action"><a href="#finish" onClick="document.getElementById('finish').scrollIntoView({behavior: 'smooth'}); event.preventDefault();">I’m done voting</a></p>
</div>

<script>
</script>

<style>

.progress {
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgb(245, 245, 245);
  color: black;
  padding: 1.5em 3em;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

</style>


<style>

  /* =Icon Button
  ----------------------------------------------- */
  a.has-icon {
    display: block;
    position: relative;
    text-decoration: none
  }

  .has-icon .icon {
    position: absolute;
    top: 0.725em;
    right: 0.725em;
    background: white;
    background: rgba(255, 255, 255, 0.75);
    color: black;
    background: rgba(254, 254, 254, 0.75); /* @snow */
    background: var(--secondary-color, black);
    border: 0.1875em solid var(--secondary-color, black);
    background: var(--primary-color, black);
    border: 0.1875em solid var(--primary-color, black);
    color: rgb(41, 41, 41); /* @midnight */
    color: rgb(254, 254, 254); /* @snow */
    padding: 0;
    width: 5em;
    line-height: 5em;
    border-radius: 50%;
    transition: background-color 0.2s;
    /*font-size: 1.5em;*/
    text-align: center;
    display: flex;
    width: 3em;
    height: 3em;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    right: auto;
    padding: 0;
    transform: translate(-50%, -50%);
    opacity: 0.75;
    background: rgb(254, 254, 254); /* @snow */
    border-color: var(--secondary-color, black);
    color: var(--secondary-color, black);
    border-color: var(--primary-color, black);
    border-color: white;
    color: var(--primary-color, black);
    color: black;
    background: black;
    color: white;
    border-color: transparent;
    transition: all 0.2s;
  }

  .has-icon:hover .icon,
  .has-icon:active .icon,
  .has-icon:focus .icon {
    background-color: var(--primary-color);
    opacity: 1;
  }

  .has-icon .icon {
    vertical-align: middle
  }

  .has-icon svg {
    width: 1em;
    height: 1em;
    margin-left: 0.25em;
  }

  .has-icon svg polygon {
    fill: currentColor
  }


  .has-icon .credit {
    position: absolute;
    bottom: 0;
    left: 0;
    background: white;
    background: rgba(255, 255, 255, 0.75);
    color: black;
    background: var(--secondary-color, black);
    color: rgb(254, 254, 254); /* @snow */
    background: white;
    background: rgba(255, 255, 255, 0.9);
    color: var(--secondary-color, black);
    border-color: var(--secondary-color, black);
    color: black;
    font-size: 0.75em;
    padding: 0.25em 0.5em;
    font-weight: 500;
  }

</style>

