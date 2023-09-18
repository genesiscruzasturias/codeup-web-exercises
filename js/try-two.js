document.addEventListener('DOMContentLoaded', function () {
    //My API keys
     const mapboxKey = MAPBOX_API_TOKEN;
    let openWeatherKey = WEATHER_MAP_KEY;


    // Initialize Mapbox
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-122.33178089059577, 47.60769856291158],
        zoom: 9
    });

    // Initialize Mapbox Geocoder
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });
    map.addControl(geocoder);

    document.getElementById('search-button').addEventListener('click', () => {
        const location = document.getElementById('location-search').value;

        // Use Mapbox Geocoder to obtain coordinates for the location
        geocoder.query(location);

        // Handle the 'result' event from the geocoder
        geocoder.on('result', (event) => {
            const coordinates = event.result.geometry.coordinates;

            // Fetch current city weather data
            $.get(BASE_WEATHER_URL + `lat=${coordinates[1]}&lon=${coordinates[0]}&appid=${WEATHER_MAP_KEY}&units=imperial`)
                .done((data) => {
                    updateCurrentCityForecast(data);
                });

            // Fetch 5-day forecast data
            $.get(BASE_FORECAST_URL + `lat=${coordinates[1]}&lon=${coordinates[0]}&appid=${WEATHER_MAP_KEY}&units=imperial`)
                .done((list) => {
                    updateFiveDayForecast(list);
                });
        });
    });
    // Function to update the content of the "Current City Forecast" section
    function updateCurrentCityForecast(data) {
        const html = `
            <div class="city-name">${data.name}</div>
            <div>Current Temp:</div> 
            <div>${data.main.temp.toFixed(0)}</div>      
            <div>Current Humidity:</div>
            <div>${data.main.humidity}</div>
            <div>Current conditions:</div> 
            <div class="cloud-img">${data.weather[0].main}</div>`;

        // Update the content of the "current-city-forecast" div
        $("#current-city-forecast").html(html);

        // Apply background image based on weather conditions (you can add this logic here)
    }

    // Function to update the content of the "5-Day Forecast" section
    function updateFiveDayForecast(list) {
        // Loop through the forecast data and update the cards (you can add this logic here)
    }
});


// Function to update the content of the "current-city-forecast" div
function updateCurrentCityForecast(data) {
    // Update the content here
}

// Function to update the content of the "five-day-forecast" div
function updateFiveDayForecast(data) {
    // Update the content here
}
// ```
//
// 3. **CSS Styling:**
//
//    - You may need to adjust the CSS styles to ensure that the map and search input are displayed correctly.
//
// 4. **Mapbox and OpenWeatherMap API:**
//
//    - Ensure that you have valid API keys for Mapbox and OpenWeatherMap.
//    - Use these keys to make API requests to fetch weather data and display it on the map.