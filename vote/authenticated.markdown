---
title: Vote in the 2018 My LA2050 Activation Challenge
body_class: lime
---

# Saving your votes…

<form name="vote_authenticated" action="/vote/confirmation/" method="post" markdown="1" data-netlify="true">
<input type="hidden" name="learn" />
<input type="hidden" name="create" />
<input type="hidden" name="play" />
<input type="hidden" name="connect" />
<input type="hidden" name="live" />
<input type="hidden" name="email" />
<input type="hidden" name="telephone" />
<input type="hidden" name="auth_accesstoken" />
<input type="hidden" name="auth_state" />
<input type="hidden" name="auth_sub" />
</form>


<script src="https://cdn.auth0.com/js/auth0/9.3.1/auth0.min.js"></script>
<script type="text/javascript">
  var webAuth = new auth0.WebAuth({
    domain:      'activation-la2050.auth0.com',
    clientID:    'INfJpr4dnNk2EN143utsZYz4Zeq9c7cd'
  });
</script>


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


  if (window.location.hash && window.location.hash != '') {
    webAuth.parseHash(window.location.hash, function(err, authResult) {
      console.log('parseHash');

      if (err) {
        return console.log(err);
      }

      console.log('err');
      console.log(err);
      console.dir(err);

      console.log('authResult');
      console.log(authResult);
      console.dir(authResult);

      webAuth.client.userInfo(authResult.accessToken, function(err, user) {
        console.log('userInfo');

        // Now you have the user's information

        if (err) {
          console.log('err');
          console.log(err);
          console.dir(err);
        } else {
          console.log('user');
          console.log(user);
          console.dir(user);

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
          form.querySelector('input[name="telephone"]').value = getParameterByName('telephone');
          form.querySelector('input[name="auth_accesstoken"]').value = authResult.accessToken;
          form.querySelector('input[name="auth_state"]').value = authResult.state;
          form.querySelector('input[name="auth_sub"]').value = user.sub;
          form.submit();
        }

      });
    });
  }
</script>

