
        // Function to fetch weather data
        function getWeather(city) {
            const apiKey = 'cd921f65ec10927e3f0da46004ed26b7';  // Replace with your OpenWeatherMap API key
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    console.log(data); // Log data for debugging
                    if (data.cod === 200) {
                        displayWeather(data);
                    } else {
                        document.getElementById("weather-info").innerHTML = `<p>City not found!</p>`;
                    }
                })
                .catch(error => {
                    console.error("Error fetching the weather data: ", error);
                });
        }

        // Function to display weather data
        function displayWeather(data) {
            const weatherInfo = `
                <div class="weather-card">
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
                    <p>${data.weather[0].description.toUpperCase()}</p>
                    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                </div>
            `;
            document.getElementById("weather-info").innerHTML = weatherInfo;
        }

        // Add event listener to button
        document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("get-weather").addEventListener("click", function() {
                const city = document.getElementById("city-input").value;
                if (city) {
                    getWeather(city);
                } else {
                    alert("Please enter a city.");
                }
            });
        });


