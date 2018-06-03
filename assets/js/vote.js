
(function() {

  var updateProgress
  var scrollToElement

  function sendEmail(form){
    console.log('sendEmail');

    var email = (form.querySelector('input[name="email"]')) ? form.querySelector('input[name="email"]').value : null;
    var telephone = (form.querySelector('input[name="telephone"]')) ? form.querySelector('input[name="telephone"]').value : null;

    var fieldNames = ['learn', 'create', 'play', 'connect', 'live'];
    var votesData = [];
    var nextField;
    for (var index = 0; index < fieldNames.length; index++) {
      nextField = document.querySelector('input[type="radio"][name="' + fieldNames[index] + '"]:checked');
      if (nextField) {
        votesData.push(fieldNames[index] + '=' + encodeURIComponent(nextField.value));
        form.querySelector('input[type="hidden"][name="' + fieldNames[index] + '"]').value = nextField.value;
      } else {
        console.log('skipped: ' + fieldNames[index]);
      }
    }

    if ((votesData).length < 1) {
      console.error('No items were voted for');
      return;
    }

    var zip = document.querySelector('input[type="number"][name="zip"]').value;
    if (!zip || zip == '') {
      console.log('No zip code')
    } else {
      form.querySelector('input[type="hidden"][name="zip"]').value = zip;
    }

    votesData.push('zip=' + encodeURIComponent(zip));

    if (telephone && telephone.indexOf('+') !== 0) telephone = '+1 ' + telephone

    if (telephone) {
      votesData.push('telephone=' + encodeURIComponent(telephone));
      form.querySelector('input[name="telephone"]').value = telephone;
    } else if (email) {
      votesData.push('email=' + encodeURIComponent(email));
    } else {
      console.error('Couldn’t find an email or phone to add to the data');
    }

    console.dir(votesData);

    var redirectUri = window.location.origin + '/vote/authenticated/?' + votesData.join('&');
    console.log('redirectUri: ' + redirectUri);

    var options = {
      redirectUri: redirectUri,
    }

    // TODO: Validate phone number

    if (telephone) {
      options.connection = 'sms'
      options.send = 'code'
      options.phoneNumber = telephone.replace(/\-/g, '').replace(/\s/g, '')
    } else if (email) {
      options.connection = 'email'
      options.send = 'link'
      options.email = email
    } else {
      console.error('Couldn’t find an email or phone to authenticate');
    }

    var webAuth = new auth0.WebAuth({
      domain:      'activation-la2050.auth0.com',
      clientID:    'INfJpr4dnNk2EN143utsZYz4Zeq9c7cd',
      // responseMode: 'form_post',
      responseType: 'token',
      redirectUri: redirectUri
    });

    webAuth.passwordlessStart(options, function (err,res) {
      if (err) {
        // Handle error

        console.log('err');
        console.log(err)
        console.dir(err)
      } else {
        // form.action = form.action + '?' + votesData.join('&');

        // TODO: Switch back to a single form on this page
        // if (telephone) {
        //   form.action = '/vote/sms-sent/';
        //   form.method = 'get';
        // } else if (email) {
        //   form.action = '/vote/email-sent/';
        //   form.method = 'get';
        // }

        console.log('res');
        console.log(res)
        console.dir(res)

        form.submit();
        // document.querySelector('.introduction').style.display = 'block';
        // document.querySelector('form').style.display = 'none';
      }

      // Hide the input and show a "Check your email for your login link!" screen
      //$('.enter-email').hide();
      //$('.check-email').show();


    });
  }

  function signInSocial(socialNetwork) {

    var fieldNames = ['learn', 'create', 'play', 'connect', 'live'];
    var votesData = [];
    var nextField;
    for (var index = 0; index < fieldNames.length; index++) {
      nextField = document.querySelector('input[type="radio"][name="' + fieldNames[index] + '"]:checked');
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

    var zip = document.querySelector('input[name="zip"]').value;
    if (!zip || zip == '') {
      console.log('No zip code')
    }

    votesData.push('zip=' + encodeURIComponent(zip));

    votesData.push('social_network=' + encodeURIComponent(socialNetwork))

    console.dir(votesData);

    var redirectUri = window.location.origin + '/vote/authenticated/?' + votesData.join('&');
    console.log('redirectUri: ' + redirectUri);

    var options = {
      redirectUri: redirectUri,
    }

    options.connection = socialNetwork

    var webAuth = new auth0.WebAuth({
      domain:      'activation-la2050.auth0.com',
      clientID:    'INfJpr4dnNk2EN143utsZYz4Zeq9c7cd',
      responseType: 'token',
      redirectUri: redirectUri
    });

    webAuth.authorize(options, function (err,res) {
      if (err) {
        // Handle error
        console.dir(err)
      } else {
        console.dir(res)
      }
    });
  }

  var forms = document.querySelectorAll('form');
  for (var index = 0; index < forms.length; index++) {
    forms[index].addEventListener('submit', function(e) {
      console.log('form submit'); 
      e.preventDefault();
      if (e.target.name == 'vote') {
        updateProgress()
        scrollToElement('finish')
      }
      sendEmail(e.target);
    })
  }


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

      var delay = 500;
      var delayTimeout;
      scrollToElement = function(elementID) {
        console.log('scrollTo: ' + elementID)
        if (delayTimeout) clearTimeout(delayTimeout)
        delayTimeout = setTimeout(function() {
          __scrollTo(elementID)
        }, delay);
      }

      function __scrollTo(elementID) {
        console.log('__scrollTo: ' + elementID)
        // if (counter >= 5) {
        //   document.getElementById('finish').scrollIntoView({ behavior: 'smooth', block: 'start' });
        // } else {
          document.getElementById(elementID).scrollIntoView({ behavior: 'smooth', block: 'start' });
        //}
      }

      form.addEventListener('click', function(e) {
          if (e.target.nodeName.toLowerCase() === 'input' && e.target.type === 'radio' && e.target.checked) {
            console.log('e.target.name: ' + e.target.name)
            switch(e.target.name) {
              case 'learn':
                updateProgress()
                scrollToElement('create')
                break;
              case 'create':
                updateProgress()
                scrollToElement('play')
                break;
              case 'play':
                updateProgress()
                scrollToElement('connect')
                break;
              case 'connect':
                updateProgress()
                scrollToElement('live')
                break;
              case 'live':
                updateProgress()
                scrollToElement('zip')
                break;
              default:

            }
          }
      });
    //});

    // window.addEventListener('scroll', function(e) {
    //   if (delayTimeout) clearTimeout(delayTimeout)
    // })

    console.log('setting up zip button')
    var zipButton = document.querySelector('#zip button');
    console.log('zip button: ' + zipButton);
    zipButton.addEventListener('click', function(e) {
      console.log('zipButton click')
      e.preventDefault()
      updateProgress()
      console.log('updateProgress done')
      scrollToElement('finish')
      console.log('scrollTo finish done')
    })


    var counter = 0;
    var count;
    var progress;
    var finish;
    var zip;
    var zipShowing = false;
    updateProgress = function() {
      if (!progress) progress = document.getElementById("progress");
      if (!count) count = document.getElementById("vote-count");

      progress.classList.remove('hidden');

      counter = document.querySelectorAll('input[type="radio"]:checked').length;

      count.innerText = counter;

      var exclamations = ['Nice!', 'Hooray!', 'Sweet!', 'Way to go!', 'Excellent!'];
      document.getElementById('exclamation').innerText = exclamations[counter - 1];

      // if (counter >= 5) {
      //   progress.querySelector('p').innerHTML = 'You’ve voted in all five categories!';
      //   document.getElementById('finish').scrollIntoView({ behavior: 'smooth', block: 'start' });
      // }

      if (counter >= 1 
          && zipShowing
          && !finish) {
        finish = document.getElementById('finish');
        finish.style.display = 'flex';

        window.addEventListener('scroll', function() {
          //if (isVisible(finish, getOffset(finish).top, window.scrollY)) {
          if ((window.scrollY + (window.innerHeight / 2)) >= getOffset(finish).top) {
            progress.classList.add('hidden-button');
          } else {
            progress.classList.remove('hidden-button');
          }
        })

      }

      if (counter >= 1 && !zip) {
        zip = document.getElementById('zip');
        zip.style.display = 'flex';
        zipShowing = true;
      }
    }

    // KUDOS: http://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element#answer-442474
    function getOffset( el ) {
      var _x = 0;
      var _y = 0;
      while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
          _x += el.offsetLeft;
          _y += el.offsetTop;
          el = el.offsetParent;
      }
      return { top: _y, left: _x };
    }

    function isVisible(element, elementTop, windowTop) {
      var elementBottom = elementTop + element.offsetHeight;
      var windowBottom  = windowTop  + window.innerHeight;

      // If the top edge of the window is greater than the top edge of the target
      if ((elementTop >= windowTop && elementTop <= windowBottom) || (elementBottom >= windowTop && elementBottom <= windowBottom)) {
        return true;
      } else {
        return false;
      }
    }

  })();

  document.querySelector('a[href="#questions"]').addEventListener('click', function(e) {
    document.getElementById('questions').scrollIntoView({ behavior: 'smooth', block: 'start' });
    e.preventDefault();
  })

  document.querySelector('a[href="#zip"]').addEventListener('click', function(e) {
    document.getElementById('zip').scrollIntoView({ behavior: 'smooth', block: 'start' });
    e.preventDefault();
  })

  document.querySelector('a[href="#sign-in-phone"]').addEventListener('click', function(e) {
    document.getElementById('sign-in-phone').style.display = 'flex';
    document.getElementById('sign-in-phone').scrollIntoView({ behavior: 'smooth', block: 'start' });
    e.preventDefault();
  })

  document.querySelector('a[href="#sign-in-email"]').addEventListener('click', function(e) {
    document.getElementById('sign-in-email').style.display = 'flex';
    document.getElementById('sign-in-email').scrollIntoView({ behavior: 'smooth', block: 'start' });
    e.preventDefault();
  })

  document.querySelector('a[href="#sign-in-facebook"]').addEventListener('click', function(e) {
    signInSocial('facebook');
    e.preventDefault();
  })

})();
