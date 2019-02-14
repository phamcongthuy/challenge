
(function() {
  // http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript#answer-901144
  function getParameterByName(name, url) {
    if (!url) url = window.location.href
    name = name.replace(/[\[\]]/g, "\\$&")
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, " "))
  }

  var form = document.querySelector('form')

  var fieldNames = ['learn', 'create', 'play', 'connect', 'live']
  var nextValue
  var nextTarget
  for (var index = 0; index < fieldNames.length; index++) {
    nextValue = getParameterByName(fieldNames[index])
    if (nextValue) {
      nextTarget = form.querySelector('input[name="' + fieldNames[index] + '"][value="' + nextValue + '"]')
      if (nextTarget) {
        nextTarget.checked = true
      }
    }
  }
})()
