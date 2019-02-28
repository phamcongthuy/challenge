(function() {

  /* Do we have the features we need? */
  if (!window.addEventListener) return;


  /* =Utilities
  ----------------------------------------------- */
  var images = document.getElementsByTagName('img');
  var positions = [];

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

  function loadImage(image) {
    if (image.getAttribute("data-srcset") && image.getAttribute("data-srcset") != "") {
      image.setAttribute("srcset", image.getAttribute("data-srcset"));
      image.removeAttribute("data-srcset");
    }

    setTimeout(function() {
      if (image.getAttribute("data-src") && image.getAttribute("data-src") != "") {
        image.setAttribute("src", image.getAttribute("data-src"));
        image.removeAttribute("data-src");
      }
    }, 1)
  }

  // KUDOS: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
  function getScrollY() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }

  function isVisible(element, elementTop, windowTop) {
    var elementBottom = elementTop + element.offsetHeight;
    var windowBottom  = windowTop  + window.innerHeight;

    // If the top edge of the window is greater than the top edge of the target
    if ((elementTop > windowTop && elementTop < windowBottom) || (elementBottom > windowTop && elementBottom < windowBottom)) {
      return true;
    } else {
      return false;
    }
  }

  function updatePositions() {
    positions = [];
    for (var index = 0; index < images.length; index++) {
      positions.push(getOffset(images[index]).top);
    }
  }

  function loadVisible(e) {
    // Load the images if they’re in view
    var scrollY = getScrollY();
    for (var index = 0; index < images.length; index++) {
      if (isVisible(images[index], positions[index], scrollY)) {
        loadImage(images[index]);
      }
    }
  }

  updatePositions();
  loadVisible();

  (function() {
    var throttle;
    window.addEventListener('scroll', function() {
      if (throttle) clearTimeout(throttle);
      throttle = setTimeout(loadVisible, 500);
    }, false);
  })();


  /* Handle slow loading content and and resizing windows.
  ----------------------------------------------- */
  window.addEventListener('load', function() {
    updatePositions();
    loadVisible();
  }, false);

  (function() {
    var throttle;
    window.addEventListener('resize', function() {
      if (throttle) clearTimeout(throttle);
      throttle = setTimeout(function() {
        updatePositions();
        loadVisible();
      }, 100);
    }, false);
  })();

})();
