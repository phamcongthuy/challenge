(function() {
  
  var visibleImages = []
  var timer

  function loadImage(image) {
    if (image.getAttribute("data-srcset") && image.getAttribute("data-srcset") != "") {
      image.setAttribute("srcset", image.getAttribute("data-srcset"))
      image.removeAttribute("data-srcset")
    }

    setTimeout(function() {
      if (image.getAttribute("data-src") && image.getAttribute("data-src") != "") {
        image.setAttribute("src", image.getAttribute("data-src"))
        image.removeAttribute("data-src")
      }
    }, 1)
  }

  function loadVisibleImages() {
    // console.dir(visibleImages)
    for (var index = 0; index < visibleImages.length; index++) {
      loadImage(visibleImages[index])
    }
  }

  function onIntersection(entries) {
    var entry
    for (var index = 0; index < entries.length; index++) {
      entry = entries[index]
      if (entry.isIntersecting) {
        // console.log(`entry.intersectionRatio: ${entry.intersectionRatio}`)
        //if (entry.intersectionRatio >= 0.1) {
        // console.log({target: entry.target})
        //}
        visibleImages.push(entry.target)

        if (timer) clearTimeout(timer)
        timer = setTimeout(loadVisibleImages, 100)
      } else {
        for (var j = 0; j < visibleImages.length; j++) {
          if (visibleImages[index] === entry.target) {
            visibleImages.splice(j, 1)
            break
          }
        }
      }
    }
  }

  var images = document.getElementsByTagName('img')

  // https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
  var observer = new IntersectionObserver(onIntersection, {
    threshold: 0,
    rootMargin: "100% 0% 100% 0%"
  })

  for (var index = 0; index < images.length; index++) {
    observer.observe(images[index])
  }

})();


