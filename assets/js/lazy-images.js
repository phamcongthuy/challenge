(function() {
  
  let visibleImages = new Set();
  let timer;

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

  function loadVisibleImages() {
    console.dir(visibleImages)
    visibleImages.forEach(image => loadImage(image))
  }

  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // console.log(`entry.intersectionRatio: ${entry.intersectionRatio}`)
        //if (entry.intersectionRatio >= 0.1) {
        // console.log({target: entry.target})
        //}
        visibleImages.add(entry.target)

        if (timer) clearTimeout(timer)
        timer = setTimeout(loadVisibleImages, 100)
      } else {
        visibleImages.delete(entry.target)
      }
    })
  }

  const images = document.getElementsByTagName('img');

  // https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
  const observer = new IntersectionObserver(onIntersection, {
    threshold: 0,
    rootMargin: "0% 0% 0% 0%"
  })

  for (var index = 0; index < images.length; index++) {
    observer.observe(images[index])
  }

})();


