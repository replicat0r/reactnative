
const KEY = '82095435d439f0034ae34656dc848bc4'
var rootUrl = `http://api.openweathermap.org/data/2.5/weather?APPID=${KEY}`



function _ktoF(k) {
  return Math.round(k - 273.15)
}

module.exports = function(lat, lon) {
  var url = `${rootUrl}&lat=${lat}&lon=${lon}`
  console.log(url)
  return fetch(url).then(function(response) {
    console.log('response',response)
    return response.json()
  }).then(function(json) {
    return {
      city: json.name,
      temp: _ktoF(json.main.temp),
      description: json.weather[0].description
    }
  }).catch(function(e) {
    console.trace(e)
  })
}
