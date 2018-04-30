---
title: Vote in the 2018 My LA2050 Activation Challenge
body_class: blueberry
---

<div class="introduction" markdown="1">

<h2 style="max-width: none; text-align: center; font-size: 2.5em;">Email sent!</h2>

Please check your email and follow the instructions in the message we sent to you.

<small>Didn’t get an email?</small>

<form name="vote" action="/vote/email-sent/" method="post" markdown="1" netlify>
<input type="hidden" name="learn" />
<input type="hidden" name="create" />
<input type="hidden" name="play" />
<input type="hidden" name="connect" />
<input type="hidden" name="live" />
<input type="hidden" name="email" />
<p class="action"><button type="submit">Resend email</button></p>
</form>

<style>
.promotion {
	display: none;
}
</style>

</div>



<script>

  // http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript#answer-901144
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }


  var form = document.querySelector('form');

  var fieldNames = ['learn', 'create', 'play', 'connect', 'live'];
  var nextValue;
  for (var index = 0; index < fieldNames.length; index++) {
    nextValue = getParameterByName(fieldNames[index]);
    if (nextValue) {
      form.querySelector('input[name="' + fieldNames[index] + '"]').value = nextValue;
    }
  }

  form.querySelector('input[name="email"]').value = getParameterByName('email');



</script>

