---
title: Vote in the 2018 My LA2050 Activation Challenge
body_class: lime
---

{% if site.phase != 6 %}

# Oops!

<div class="introduction" markdown="1">
This page couldn’t be found.

You may want to visit our [home page](/) instead.
</div>

{% else %}

<div class="introduction" markdown="1">

<h2 style="max-width: none; text-align: center; font-size: 2.5em;">Optional Survey</h2>

<p class="action" style="margin-top: 0.75em"><i style="margin-right: 1em">This will help LA2050 determine how much of Los Angeles we’re reaching.</i><a style="margin-top: 0.75em" href="/vote/confirmation/">Skip this step</a></p>

<form name="vote_survey" action="/vote/confirmation/" method="post" data-netlify="true">
  <p>
    <label>
      What language do you speak at home?<br />
      <input type="text" name="language" placeholder="" />
    </label>
  </p>
  <script>
  (function() {
    //var languages = "हिन्दी, 中文, Français, 한국어, Deutsche, English, Español, ไทย, 日本語, فارسی, Tiếng Việt, ລາວ, Samala, עִברִית, አማርኛ, 中文".split(', ')
    var languages = "हिन्दी, 日本語, English, Español, ไทย".split(', ')

    languages.sort(function(a, b) {
      var random = Math.floor(Math.random() * languages.length) + 1;
      if (random > (languages.length / 2)) return 1;
      else if (random < (languages.length / 2)) return -1;
      return 0;
    })
    document.querySelector('input[name="language"]').placeholder = languages.join(', ')
  })();
  </script>
  <p style="margin-top: 1.5em;">
    <label>
      What neighborhood do you live in?<br />
      <input type="text" name="neighborhood" placeholder="" />
    </label>
  </p>
  <script>
  (function() {
    var neighborhood = "Angelino Heights, NoHo, Tujunga, Edendale, Watts".split(', ')

    neighborhood.sort(function(a, b) {
      var random = Math.floor(Math.random() * neighborhood.length) + 1;
      if (random > (neighborhood.length / 2)) return 1;
      else if (random < (neighborhood.length / 2)) return -1;
      return 0;
    })
    document.querySelector('input[name="neighborhood"]').placeholder = neighborhood.join(', ')
  })();
  </script>
  <p class="action">
    <button type="submit">Submit</button>
  </p>
</form>

</div>

<style>
.promotion {
  display: none;
}
.introduction form {
  margin-top: 3em;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  max-width: 30em;
}
.introduction form p {
  text-align: left;
  /*margin-top: 1.5em;*/
  font-size: 1rem !important;
}
.introduction form button {
  width: 100%;
  max-width: 30em;
}
form input[type="text"],
form input[type="number"] {
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
  width: 100%;
  max-width: 30em;

  /* Remove Safari’s default styles for search fields */
  -webkit-appearance: none;

  text-align: left;
}
</style>

{% endif %}
