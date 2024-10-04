"use strict";

var apiKey = 'e53b14a2bf755ee66ac0cadeb07a3ac2'; // Replace with your OpenWeatherMap API key

var weatherDataElement = document.getElementById("weatherData");
var cityInput = document.getElementById("cityInput");
var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function () {
  var city = cityInput.value;

  if (city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey, "&units=metric");
    fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (data) {
      var cityName = data.name;
      var temperature = data.main.temp;
      var description = data.weather[0].description;
      var weatherIcon = "http://openweathermap.org/img/wn/".concat(data.weather[0].icon, "@2x.png");
      weatherDataElement.innerHTML = "\n                    <p id=\"city\">".concat(cityName, "</p>\n                    <p id=\"temperature\">").concat(temperature, "\xB0C</p>\n                    <p id=\"description\">").concat(description, "</p>\n                    <img id=\"weatherIcon\" src=\"").concat(weatherIcon, "\" alt=\"Weather Icon\">\n                ");
    })["catch"](function (error) {
      weatherDataElement.innerHTML = "<p>Error: ".concat(error.message, "</p>");
    });
  } else {
    alert("Please enter a city name.");
  }
});