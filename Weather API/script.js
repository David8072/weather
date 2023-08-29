document.addEventListener('DOMContentLoaded', function () {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const fetchWeatherButton = document.getElementById('fetch-weather');
  
    fetchWeatherButton.addEventListener('click', fetchWeather);
  
    function fetchWeather() {
      const apiKey = 'c310d29722a7f48e730ec44266bf8e71';
      const city = 'Zocca';
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
          displayWeather(data);
        })
        .catch(error => {
          console.error('Error fetching weather:', error);
        });
    }
  
    function displayWeather(weatherData) {
      locationElement.textContent = weatherData.name;
      temperatureElement.textContent = `Temperature: ${weatherData.main.temp}°C`;
      descriptionElement.textContent = `Weather: ${weatherData.weather[0].description}`;
    }
  });
  