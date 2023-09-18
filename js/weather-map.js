"use strict";

// INITIALIZE MAPBOX
mapboxgl.accessToken = MAPBOX_API_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-122.33178089059577, 47.60769856291158], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
// INITIALIZE MARKER FOR MAPBOX
const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([0, 0])
    .addTo(map);

const currentCityElement = document.getElementById('insert-weather');
const forecastElement = document.getElementById('insert-forecast');
const updateButton = document.getElementById('update-forecast-btn');

// NEW CITY 5 DAY FORECAST/CURRENT FORECAST
function updateForecast() {
    // GRABS THE CITY THE USER INPUT INTO THE TEXT FIELD PROVIDED
    const cityInput = document.getElementById('mapbox-search').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${WEATHER_MAP_KEY}&units=imperial`;
    const lngLat = marker.getLngLat();
    // GROUPS THE FORECAST DATA DAY BY DAY
    fetch(BASE_FORECAST_URL + `q=${cityInput}&appid=${WEATHER_MAP_KEY}&units=imperial`)
        // CONVERTS API INTO JSON FORMAT
        .then(response => response.json())
        // CONTAINS DATA FOR THE SPECIFIED CITY
        .then(list => {
            //DIDNT UNDERSTAND IT BUT KNOW IT KIND OF WORKS
            const forecastItems = list.list.slice(0, 80); // Get the first 5 forecast items
            // CLEARS "insert-forecast" element
            forecastElement.innerHTML = ''; // Clear previous forecast

            const forecastByDay = {};
            forecastItems.forEach(item => {
                const date = new Date(item.dt * 1000);
                const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

                // Group forecast items by day
                if (!forecastByDay[dayOfWeek]) {
                    forecastByDay[dayOfWeek] = item;
                }
            });

            // Display the 5-day forecast
            Object.keys(forecastByDay).forEach(dayOfWeek => {
                const item = forecastByDay[dayOfWeek];
                const forecastTemp = item.main.temp.toFixed(0);
                const tempLow = item.main.temp_min.toFixed(0);
                const forecastConditions = item.weather[0].main;

                const forecastItem = document.createElement('div');
                forecastElement.classList.add('forecast-div-two')


                forecastItem.innerHTML = `
                <div class="day-week">${dayOfWeek}</div>
                <hr>
                <div>Main: ${forecastTemp}°F</div>
                <hr>
                <div>Low: ${tempLow}°F</div>
                <br>
                <div>${forecastConditions}</div>
            
            `;

                forecastElement.appendChild(forecastItem);
            });

            // Make the API request to fetch current city
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const currentCity = data.name;
                    const currentTemp = data.main.temp.toFixed(0);
                    const currentHumidity = data.main.humidity;
                    const currentConditions = data.weather[0].main;


                    currentCityElement.innerHTML = `
                    <div class="forecast-div-two">
                    <div class="city-name">${data.name}</div>
                    <div>Current Temp:</div> 
                    <div>${data.main.temp.toFixed(0)}°F</div>
                    <div>Humidity:</div>
                    <div>${data.main.humidity}%</div>
                    <div>Conditions:</div> 
                    <div class="cloud-img">${data.weather[0].main}</div>
                    </div>`;
                    // Process and use the forecast data as needed
                })
        });
}
        updateButton.addEventListener('click', updateForecast);

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const BASE_FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast?'
// JUST TO MAKE SURE I WAS RIGHT ON TRACK
// console.log(BASE_WEATHER_URL + `lat=${47.60537214369371}&lon=${-122.32423484983421}&appid=${WEATHER_MAP_KEY}&units=imperial`)

// SEATTLE 5 DAY FORECAST
$.get(BASE_FORECAST_URL + `lat=${47.60537214369371}&lon=${-122.32423484983421}&appid=${WEATHER_MAP_KEY}&units=imperial`).done((list) => {

    let html = '';

    for (let i = 0; i < 5; i++) {
        const forecastData = list.list[i * 8];
        // CONVERT TIMESTAP INTO DATE
        const date = new Date(forecastData.dt * 1000);
        // Multiply by 1000 on line 82 IOT convert seconds to millisconds

        // Get day of week as a string
        const dayOfWeek = date.toLocaleDateString('en-US', {weekday: 'long'})

        // Each Forecast Card
        html +=
            `<div class="forecast-div">
        <div class="day-week">${dayOfWeek}</div>
        <hr>
        <div>Main: ${forecastData.main.temp.toFixed(0)}°F</div>
        <hr>
        <div>Low: ${forecastData.main.temp_min}°F</div>
        <br>
        <div>${forecastData.weather[0].main}</div>
        </div>`
    }
    // Insert to cards
    $("#insert-forecast").html(html);
// ***************************************************************************
// ***************************************************************************

    // SEATTLE CURRENT FORECAST-TOP CARD
    function updateCurrentCityForecast(data) {
        let html = `
<div class="city-name">${data.name}</div>
<div>Current Temp:</div> 
<div>${data.main.temp.toFixed(0)}°F</div>
<div>Humidity:</div>
<div>${data.main.humidity}%</div>
<div>Conditions:</div> 
<div class="cloud-img">${data.weather[0].main}</div>`;

        let backgroundImageURL = '';

        if (data.weather[0].main === 'Clear' && data.main.temp > 70) {
            backgroundImageURL = 'url("img/pexels-zszen-john-2651796.jpg")';
            $("#insert-weather").css('color', 'black');
        } else if (data.weather[0].main === 'Clear' && data.main.temp <= 70) {
            backgroundImageURL = 'url("img/pexels-zszen-john-2651796.jpg")';
        } else if (data.weather[0].main === 'Rain') {
            backgroundImageURL = 'url("img/pexels-valeriia-miller-2530911.jpg")';
        } else if (data.weather[0].main === 'Clouds') {
            backgroundImageURL = 'url("img/pexels-alex-conchillos-3888585.jpg")';
        } else {
            backgroundImageURL = 'url("img/pexels-stephan-seeber-1261728.jpg")';
        }

        // Apply the background image to your card
        $("#insert-weather-img").css('background-image', backgroundImageURL).css('background-repeat', 'no-repeat');

        $("#insert-weather").html(html);
    }

// This is for the top card, current city forecast.
    function fetchAndUpdateCurrentCityWeather() {
        $.get(BASE_WEATHER_URL + `lat=${47.60537214369371}&lon=${-122.32423484983421}&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => {
            updateCurrentCityForecast(data);
        });
    }
// // Call the function to update the current city weather when the page loads
    fetchAndUpdateCurrentCityWeather();
})

