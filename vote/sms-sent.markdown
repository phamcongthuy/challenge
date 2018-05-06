---
title: Vote in the 2018 My LA2050 Activation Challenge
body_class: tangerine
---

<div class="introduction" markdown="1">

<h2 style="max-width: none; text-align: center; font-size: 2.5em;">Please check your phone</h2>

We sent you a text message with a verification code. Please enter it here.

<form action="/vote/sms-sent/" method="get">
<input type="hidden" name="learn" />
<input type="hidden" name="create" />
<input type="hidden" name="play" />
<input type="hidden" name="connect" />
<input type="hidden" name="live" />
<input type="hidden" name="telephone" />

<p style="font-size: 1em">
  <label>
    <input type="text" placeholder="Verification Code" name="verification_code" />
    <button type="submit">Submit</button>
  </label>
</p>
</form>

<style>
.promotion {
	display: none;
}
form input[type="text"] {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: 600;
  padding: 0.75em;
  border-radius: 0;
  max-width: none;
  box-sizing: border-box;
  text-align: center;
  border: 0.1875em solid rgb(237, 59, 136); /* @strawberry */
  border-color: rgba(0, 0, 0, 0.25);

  /* Remove Safari’s default styles for search fields */
  -webkit-appearance: none;
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

  form.querySelector('input[name="telephone"]').value = getParameterByName('telephone');

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
  function submitVerificationCode(form){
    console.log('submitVerificationCode');

    var telephone = document.querySelector('input[name="telephone"]').value;
    var verificationCode = document.querySelector('input[name="verification_code"]').value;

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

    votesData.push('telephone=' + telephone);

    console.dir(votesData);

    // var redirectUri = window.location.origin + '/vote/authenticated/?' + votesData.join('&');
    // console.log('redirectUri: ' + redirectUri);

    console.log("telephone: " + telephone.replace(/\-/g, '').replace(/\s/g, ''))
    console.log("verificationCode: " + verificationCode)

    webAuth.passwordlessLogin({
        connection: 'sms',
        phoneNumber: telephone.replace(/\-/g, '').replace(/\s/g, ''),
        verificationCode: verificationCode
      }, function (err,res) {
        if (err) {
          // Handle error
        } else {
          // form.action = form.action + '?' + votesData.join('&');
          // form.submit();
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

      }
    );
  }

  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    submitVerificationCode(e.target);

  })
</script>


