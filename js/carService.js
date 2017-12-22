define(['./template.js'], function (template) {
  var apiUrlPath = 'http://bstavroulakis.com/pluralsight/courses/progressive-web-apps/service/'
  var apiUrlLatest = apiUrlPath + 'latest-deals.php'
  var apiUrlCar = apiUrlPath + 'car.php?carId='

  function loadCarPage (carId) {
    fetch(apiUrlCar + carId)
      .then(function (response) {
        return response.text()
      }).then(function (data) {
      document.body.insertAdjacentHTML('beforeend', data)
    }).catch(function () {
      alert('Oops, can\'t retrieve page')
    })
  }

  function loadMoreRequest () {
    fetch(apiUrlLatest)
      .then(function (response) {
        return response.json()
      }).then(function (data) {
        template.appendCars(data.cars)
      }
    )
  }

  return {
    loadMoreRequest: loadMoreRequest,
    loadCarPage: loadCarPage
  }
})
