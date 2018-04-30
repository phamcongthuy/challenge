---
title: Vote in the 2018 My LA2050 Activation Challenge
body_class: blueberry
---

# Vote

<div class="introduction" markdown="1">

Choose one <a href="/finalists/">finalist</a> in each of the five categories.

</div>

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
  color: rgb(41, 41, 41) !important; /* @midnight */
  font-weight: 500;
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
}
form label:hover .pseudo-checkbox {
  background: rgba(0, 0, 0, 0.1);
  opacity: 1;
}
form li input:checked ~ .pseudo-checkbox {
  background: rgba(0, 0, 0, 0.5); /* @lime */
  opacity: 1;
}
form .blueberry input:checked ~ .pseudo-checkbox {
  background: rgba(6, 179, 188, 0.5); /* @blueberry */
}
form .banana input:checked ~ .pseudo-checkbox {
  background: rgba(255, 194, 51, 0.5); /* @banana */
}
form .strawberry input:checked ~ .pseudo-checkbox {
  background: rgba(237, 59, 136, 0.5); /* @strawberry */
}
form .tangerine input:checked ~ .pseudo-checkbox {
  background: rgba(249, 160, 51, 0.5); /* @tangerine */
}
form .lime input:checked ~ .pseudo-checkbox {
  background: rgba(141, 208, 59, 0.5); /* @lime */
}
form li .pseudo-checkbox svg {
  fill: currentColor;
  width: 3em;
  height: 3em;
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
  max-width: 33em;
  margin: 3em auto;
}
form section h2,
form section h3 {
  margin-top: 1.5em;
}
</style>

<form name="vote" action="/vote/email-sent/" method="post" markdown="1" data-netlify="true">

<hr />

<h2 class="blueberry">Who would you like to vote for in the <span style="text-transform: uppercase;">Learn</span> category?</h2>

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
    </svg>
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

<h2 class="banana">Who would you like to vote for in the <span style="text-transform: uppercase;">Create</span> category?</h2>

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

<h2 class="strawberry">Who would you like to vote for in the <span style="text-transform: uppercase;">Play</span> category?</h2>

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

<h2 class="tangerine">Who would you like to vote for in the <span style="text-transform: uppercase;">Connect</span> category?</h2>

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

<h2 class="lime">Who would you like to vote for in the <span style="text-transform: uppercase;">Live</span> category?</h2>

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

<section markdown="1">

### You’re <span style="text-decoration: underline;">almost</span> done!

Next, we’ll send instructions about how to verify your votes.

<p style="margin-top: 1.5em; display: flex;">
<label style="flex-grow: 1; margin-right: 0.25em;">
  <input type="email" name="email" placeholder="What’s your email address?" style="text-align: left;" required />
</label>
<button type="submit">Send email</button>
</p>

<p style="margin-top: 1.7142857143em"><small>We will only use this address to complete the voting process. (No spam, we promise!)</small></p>
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


