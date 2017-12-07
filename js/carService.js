define([], function () {
  var apiUrlPath = 'http://bstavroulakis.com/pluralsight/courses/progressive-web-apps/service/'
  var apiUrlLatest = apiUrlPath + 'latest-deals.php'

  function loadMoreRequest () {
    fetch(apiUrlLatest)
      .then(function (response) {
        return response.json()
      }).then(function (data) {
        console.log(data)
      }
    )
  }

  return {
    loadMoreRequest: loadMoreRequest
  }
})
