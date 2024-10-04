
const apiKey = 'e53b14a2bf755ee66ac0cadeb07a3ac2'; // Replace with your OpenWeatherMap API key
const weatherDataElement = document.getElementById("weatherData");
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    const city = cityInput.value;
    if (city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

       
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const cityName = data.name;
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

                weatherDataElement.innerHTML = `
                    <p id="city">${cityName}</p>
                    <p id="temperature">${temperature}°C</p>
                    <p id="description">${description}</p>
                    <img id="weatherIcon" src="${weatherIcon}" alt="Weather Icon">
                `;
            })
            .catch(error => {
                weatherDataElement.innerHTML = `<p>Error: ${error.message}</p>`;
            });
    } else {
        alert("Please enter a city name.");
    }
});