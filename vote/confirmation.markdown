---
title: Vote in the 2018 My LA2050 Activation Challenge
body_class: lime
---

<div class="introduction" markdown="1">

<h2 style="max-width: none; text-align: center; font-size: 2.5em;">You did it!</h2>

Your votes have been verified, and will help us choose the winners. <strong>Thanks for participating!</strong>

<small>The winners will be announced on <strong>July 9, 2018</strong>.</small>

<p class="action"><a href="/finalists/">Back to the finalists</a></p>

<style>
.promotion {
	display: none;
}
</style>

</div>

<script src="https://cdn.auth0.com/js/auth0/9.3.1/auth0.min.js"></script>
<script type="text/javascript">
  var webAuth = new auth0.WebAuth({
    domain:      'activation-la2050.auth0.com',
    clientID:    'INfJpr4dnNk2EN143utsZYz4Zeq9c7cd'
  });
</script>


<script>
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

        console.log('err');
        console.log(err);
        console.dir(err);

        console.log('user');
        console.log(user);
        console.dir(user);
      });
    });
  }
</script>
