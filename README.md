# AuraForecast 🌤️

**AuraForecast** is a sleek, responsive weather dashboard that provides real-time weather updates for any city in the world using the OpenWeatherMap API. Whether you're planning your day or preparing for a trip, AuraForecast gives you the weather details you need, presented in a clean and easy-to-navigate interface.

## Features

- **City Search**: Enter the name of any city to instantly retrieve real-time weather information.
- **Current Weather Data**: View essential details such as temperature, humidity, wind speed, and weather conditions.
- **Responsive Design**: Optimized for both desktop and mobile use, ensuring a smooth experience on all devices.
- **Error Handling**: Provides user-friendly feedback if the city is not found or an error occurs.
- **Minimal & Modern UI**: A simple yet elegant design that makes checking the weather a delightful experience.

## Tech Stack

- **HTML5**: For the structure and content of the application.
- **CSS3**: For styling and responsive design, ensuring a seamless user experience on any device.
- **JavaScript (ES6+)**: For dynamic interactions, fetching data from the API, and updating the UI in real-time.
- **OpenWeatherMap API**: Provides accurate and up-to-date weather information.

## Setup & Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/AuraForecast.git
   ```
2. Navigate to the project directory:
   ```bash
   cd AuraForecast
   ```
3. Open the `index.html` file in your favorite web browser.

## Getting Your API Key

1. Sign up at [OpenWeatherMap](https://openweathermap.org/) to get a free API key.
2. Open the `app.js` file and replace `'YOUR_API_KEY'` with your actual API key:
   ```javascript
   const apiKey = 'YOUR_API_KEY';  // Replace this with your OpenWeatherMap API key
   ```

## Usage

1. Open the application in your browser.
2. Enter the name of any city in the input field and click "Search."
3. View the real-time weather information including temperature, humidity, wind speed, and weather description.
4. If the city is not found, a helpful error message will appear.

## Example

![AuraForecast Screenshot](path-to-screenshot.png)  
*Screenshot of AuraForecast displaying weather data for New York City.*

## Future Enhancements

- **Unit Toggle**: Add a button to switch between Celsius and Fahrenheit.
- **Weather Icons**: Display icons representing the current weather (sunny, cloudy, rainy, etc.).
- **Forecast Data**: Show a 7-day forecast for the searched city.
- **Loading Indicator**: Add a loading animation while data is being fetched from the API.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
  
---

Feel free to customize and enhance **AuraForecast** to fit your needs!
