(function() {

  if (!document.querySelector || !document.body.addEventListener || !document.body.getBoundingClientRect || window.scrollY === undefined) return;

  var images = document.querySelectorAll('figure img');


    // As the view is scrolled up or down
      // Move the image up or down based on scroll position

      // https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element#11396681
      // var rect = image.getBoundingClientRect();
      // console.log(rect.top, rect.right, rect.bottom, rect.left);

  var positions = [];

  function calculatePositions() {
    for (var index = 0; index < images.length; index++) {
      positions.push(images[index].getBoundingClientRect().top);
    }
  }

  // function isVisible(element, elementTop) {
  //   var elementBottom = elementTop + element.offsetHeight;
  //   var windowBottom  = window.scrollY  + window.innerHeight;

  //   // If the top edge of the window is greater than the top edge of the target
  //   if ((elementTop > window.scrollY && elementTop < windowBottom) || 
  //       (elementBottom > window.scrollY && elementBottom < windowBottom)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  function isVisible(element) {
    var elementTop = element.getBoundingClientRect().top;
    var elementBottom = elementTop + element.offsetHeight;
    if (elementTop - window.innerHeight < 0 && elementBottom > 0) {
      return true;
    } else {
      return false;
    }
  }

  function update() {
    for (var index = 0; index < images.length; index++) {

      if (isVisible(images[index], positions[index])) {
        var scrollPositionRelativeToImage = images[index].getBoundingClientRect().top;

        var scrollPercentage = scrollPositionRelativeToImage / images[index].offsetHeight;
        // images[index].style.objectPosition = (50 + (scrollPercentage * 2)) + '% ' + (50 + (scrollPercentage * 10)) + '%';
        images[index].style.objectPosition = '50% ' + (50 + (scrollPercentage * 10)) + '%';
      }

    }
  }

  var doUpdate = true;
  window.addEventListener('scroll', function() {
    if (doUpdate) {
      requestAnimationFrame(update);
      doUpdate = false;
      setTimeout(function() {
        doUpdate = true;
      }, 100);
    }
  });

  var timer;
  window.addEventListener('resize', function(e) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function() {
      calculatePositions();
      update();
    }, 100); // Wait for the resize to finish before recalculating
  });

  window.addEventListener('load', function(e) {
    calculatePositions();
    update();
  });

  calculatePositions();
  update();

  window.__updateImages = function() {
    calculatePositions();
    update();
  }

})();


(function() {

  var navLink = document.querySelector('.nav-link a');
  if (navLink) {

    // https://stackoverflow.com/questions/1034621/get-the-current-url-with-javascript
    var currentPage = window.location.href.toString().split(window.location.host)[1];

    navLink.setAttribute('href', '/navigation?previous_page=' + currentPage);

    // navLink.parentNode.style.display = 'none';
    navLink.addEventListener('click', function(e) {
      document.body.classList.toggle('has-active-nav');
      e.preventDefault();
    }, false);
  }

  var headerLinks = document.querySelectorAll('header a');
  for (var index = 0; index < headerLinks.length; index++) {
    headerLinks[index].addEventListener('focus', function(e) {
      setTimeout(function() {
        document.body.classList.add('has-active-nav');
      }, 300);
    }, false);
  }
})();

(function() {
  /* Do we have the features we need? */
  if (!document.querySelector || !window.addEventListener || !document.body.classList) return;

  var fadeInTimer;
  function fadeIn() {
    document.body.classList.add('transition-header-in');
    clearTimeout(fadeInTimer);
    fadeInTimer = setTimeout(function() {
      document.body.classList.remove('transition-header-in');
    }, 400);
  }

  var animationTimer;
  function updateScrollPosition(e) {

    /* OPTIONAL: Add a class name of “header-not-visible” to the header,
                 including the navigation, is not visible. */

    if (window.scrollY >= 300 && !document.body.classList.contains('header-not-visible')) {
      document.body.classList.add('header-not-visible');

      clearTimeout(animationTimer);
      setTimeout(function() {
        document.body.classList.add('animate-header');
      }, 1);
      fadeIn();
    } else if (window.scrollY < 300 && document.body.classList.contains('header-not-visible')) {
      document.body.classList.remove('header-not-visible');
      document.body.classList.remove('animate-header');
      clearTimeout(animationTimer);
      fadeIn();
    }

    document.body.classList.remove('has-active-nav');
  }

  updateScrollPosition();

  window.addEventListener('scroll', function() {
    requestAnimationFrame(updateScrollPosition);
  }, false);

})();



