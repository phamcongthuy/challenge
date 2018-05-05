---
title: Vote in the 2018 My LA2050 Activation Challenge
body_class: blueberry
---

<div class="introduction" markdown="1">

<h2 style="max-width: none; text-align: center; font-size: 2.5em;">Email sent!</h2>

Please check your email and follow the instructions in the message we sent to you.

<small>Didn’t get an email?</small>

<form action="/vote/email-sent/" method="get">
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
      nextField = form.querySelector('input[name="' + fieldNames[index] + '"]');
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


