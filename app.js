const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');
const errorMessage = document.getElementById('error-message');

// Event listener for the search button
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    }
});

// Fetch weather data from OpenWeatherMap API
function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                // Update UI with weather data
                updateWeatherUI(data);
                weatherResult.classList.remove('hidden');
                errorMessage.classList.add('hidden');
            } else {
                // Display error message if city not found
                weatherResult.classList.add('hidden');
                errorMessage.classList.remove('hidden');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            errorMessage.classList.remove('hidden');
        });
}

// Update the weather result UI
function updateWeatherUI(data) {
    const cityName = document.getElementById('city-name');
    const description = document.getElementById('description');
    const temp = document.getElementById('temp');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    cityName.textContent = data.name;
    description.textContent = data.weather[0].description;
    temp.textContent = data.main.temp.toFixed(1);
    humidity.textContent = data.main.humidity;
    wind.textContent = data.wind.speed;
}
