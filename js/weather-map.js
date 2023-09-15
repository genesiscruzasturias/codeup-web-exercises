const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'
console.log(BASE_WEATHER_URL);

const BASE_FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast?'

console.log(BASE_WEATHER_URL + `lat=${47.60537214369371}&lon=${-122.32423484983421}&appid=${WEATHER_MAP_KEY}&units=imperial`)

$.get(BASE_WEATHER_URL + `lat=${47.60537214369371}&lon=${-122.32423484983421}&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => {

    let html = `
    <div class="city-name">${data.name}</div>
    <div>Current Temp:</div> 
    <div>${data.main.temp.toFixed(0)}</div>      
    <div>Current Humidity:</div>
    <div>${data.main.humidity}</div>
    <div>Current conditions:</div> 
    <div class="cloud-img">${data.weather[0].main}</div>`;

    let backgroundImageURL = ``;

    if (data.weather[0].main === 'Clear' && data.main.temp > 70) {
        backgroundImageUrl = 'url("img/pexels-lukas-296234.jpg")';
    } else if (data.weather[0].main === 'Clear' && data.main.temp <= 70) {
        backgroundImageUrl = 'url("img/pexels-lukas-296234.jpg")';
    } else if (data.weather[0].main === 'Rain') {
        backgroundImageUrl = 'url("img/pexels-lukas-296234.jpg")';
    } else {
        backgroundImageUrl = 'url("img/pexels-lukas-296234.jpg")';
    }
    // Apply the background image to your card
    $("#insert-weather-img").css('background-image', backgroundImageUrl, 'background-repeat', "no-repeat");


    $("#insert-weather").html(html);

})

$.get(BASE_FORECAST_URL + `lat=${47.60537214369371}&lon=${-122.32423484983421}&appid=${WEATHER_MAP_KEY}&units=imperial`).done((list) => {

    let html = `
    <div>${list.list[0].dt_txt}</div>
    <div>Main: ${list.list[0].main.temp.toFixed(0)}</div>
    <div>Low: ${list.list[0].main.temp_min}</div>
    <div>${list.list[0].weather[0].main}</div>
    `;

    // Day One
    console.log(list.list[0].weather[0].description);
    var descriptionOne = list.list[0].weather[0].description;
    $("#description-day-1").text(descriptionOne);

    console.log(list.list[0].main.temp);
    var tempOne = list.list[0].main.temp;
    $("#temp-day-1").text(tempOne);
    $("#temperature").text("Temp (°F): " + tempOne);

    console.log(list.list[0].main.humidity);
    var humidityOne = list.list[0].main.humidity;
    $("#humidity-day-1").text(humidityOne);
    $("#hot-tub").text("Humidity: " + humidityOne);

    console.log(list.list[0].wind.speed);
    var windspeedOne = list.list[0].wind.speed;
    $("#windspeed-day-1").text(windspeedOne);
    $("#kite").text("Windspeed: " + windspeedOne);
    //
    // // Day Two
    console.log(list.list[1].weather[0].description);
    var descriptionTwo = list.list[1].weather[0].description;
    $("#description-day-2").text(descriptionTwo);

    console.log(list.list[1].main.temp);
    var tempTwo = list.list[1].main.temp;
    $("#temp-day-2").text(tempTwo);

    console.log(list.list[1].main.humidity);
    var humidityTwo = list.list[1].main.humidity;
    $("#humidity-day-2").text(humidityTwo);

    console.log(list.list[1].wind.speed);
    var windspeedTwo = list.list[1].wind.speed;
    $("#windspeed-day-2").text(windspeedTwo);

    //Day Three
    console.log(list.list[2].weather[0].description);
    var descriptionThree = list.list[2].weather[0].description;
    $("#description-day-3").text(descriptionThree);

    console.log(list.list[2].main.temp);
    var tempThree = list.list[2].main.temp;
    $("#temp-day-3").text(tempThree);

    console.log(list.list[2].main.humidity);
    var humidityThree = list.list[2].main.humidity;
    $("#humidity-day-3").text(humidityThree);

    console.log(list.list[2].wind.speed);
    var windspeedThree = list.list[2].wind.speed;
    $("#windspeed-day-3").text(windspeedThree);

    //Day Four
    console.log(list.list[3].weather[0].description);
    var descriptionFour = list.list[3].weather[0].description;
    $("#description-day-4").text(descriptionFour);

    console.log(list.list[3].main.temp);
    var tempFour = list.list[3].main.temp;
    $("#temp-day-4").text(tempFour);

    console.log(list.list[3].main.humidity);
    var humidityFour = list.list[3].main.humidity;
    $("#humidity-day-4").text(humidityFour);

    console.log(list.list[3].wind.speed);
    var windspeedFour = list.list[3].wind.speed;
    $("#windspeed-day-4").text(windspeedFour);

    //Day 5
    console.log(list.list[4].weather[0].description);
    var descriptionFive = list.list[4].weather[0].description;
    $("#description-day-5").text(descriptionFive);

    console.log(list.list[4].main.temp);
    var tempFive = list.list[4].main.temp;
    $("#temp-day-5").text(tempFive);

    console.log(list.list[4].main.humidity);
    var humidityFive = list.list[4].main.humidity;
    $("#humidity-day-5").text(humidityFive);

    console.log(list.list[4].wind.speed);
    var windspeedFive = list.list[4].wind.speed;
    $("#windspeed-day-5").text(windspeedFive);

    // For OpenWeather Search and MapBox
    function fetchAndDisplayWeather(city) {
        const [latitude, longitude] = coordinates;
        const openWeatherEndPoint = (BASE_FORECAST_URL + `lat=${47.60537214369371}&lon=${-122.32423484983421}&appid=${WEATHER_MAP_KEY}&units=imperial`)

        fetch(openWeatherEndPoint)
            .then(response => response.json())
            .then(data => {
                const cardContainer = document.getElementById('day-one');
                cardContainer.innerHTML = '';

            //     Create card to put new day-1 forecast for city searched
                const newCard = document.createElement('div');
                newCard.classList.add('weather-card');

            //     Display relevant info
                card.innerHTML = `<div>${list.list[0].dt_txt}</div>
                <div>Main: ${list.list[0].main.temp.toFixed(0)}</div>
                <div>Low: ${list.list[0].main.temp_min}</div>
                <div>${list.list[0].weather[0].main}</div>`

            //     Append card to cardContainer
                cardContainer.appendChild(newCard);
            })
            .catch(error => {
                console.error(`Error fetching weather data for ${city}:`, error);
            })
    }


// loop through the array using forEach()
//     for ( let i = 0; i < 40; i += 8 ) {
        //
        // if (list.list[0].weather[0].main === 'Clear' && list.list[0].main.temp.toFixed(0) > 70) {
        //     backgroundImageUrl = 'url()';
        // } else if (list.list[0].weather[0].main === 'Clear' && list.list[0].main.temp.toFixed(0) <= 70) {
        //     backgroundImageUrl = 'url("img/pexels-lukas-296234.jpg")';
        // } else if (list.list[0].weather[0].main === 'Rain') {
        //     backgroundImageUrl = 'url()';
        // } else {
        //     backgroundImageUrl = 'url()';
        // }
        // // Apply the background image to your card
        // $("#insert-forecast-img").css('background-image', backgroundImageUrl, 'background-repeat', "no-repeat");
        // $("#insert-forecast").html(html).html(html);
        // console.log(list[i]);


    // if (list.weather[0].main === 'Clear' && list.main.temp > 70) {
    //     backgroundImageUrl = 'url()';
    // } else if (list.weather[0].main === 'Clear' && list.main.temp <= 70) {
    //     backgroundImageUrl = 'url("img/pexels-lukas-296234.jpg")';
    // } else if (list.weather[0].main === 'Rain') {
    //     backgroundImageUrl = 'url()';
    // } else {
    //     backgroundImageUrl = 'url()';
    // }
    // Apply the background image to your card
    // $("#insert-weather-img").css('background-image', backgroundImageUrl, 'background-repeat', "no-repeat");


    // $("#insert-forecast").html(html);
    // console.log(list.list[0].weather[0].main);
})

// COde for forecast images
// navigator.geolocation.getCurrentPosition(function(position) {
//
//     // Set latitude and longitude
//     let lat = position.coords.latitude;
//     let lon = position.coords.longitude;
//
//     // Fetch data from the openweathermap API
//     fetch(BASE_FORECAST_URL + `lat=${47.60537214369371}&lon=${-122.32423484983421}&appid=${WEATHER_MAP_KEY}&units=imperial`)
//         .then(response => response.json())
//         .then(data => {
//
//             // Set a condition for the background image
//             let condition = data.weather[0].main;
//             let backgroundImage = '';
//             // Select images based on condition
//             switch(condition.toLowerCase()) {
//                 case 'clouds': backgroundImage = '/images/cloudy.jpg'; break;
//                 case 'rain': backgroundImage = '/images/rainy.jpg'; break;
//                 case 'snow': backgroundImage = '/images/snowy.jpg'; break;
//                 case 'clear': backgroundImage = '/images/sunny.jpg'; break;
//                 default: backgroundImage = '/images/default.jpg';
//             }
//
//             // Create a style element and set the selected image as the background
//             let styleNode = document.createElement("style");
//             document.head.appendChild(styleNode);
//             styleNode.innerHTML = `html body { background-image: url('${backgroundImage}'); }`;
//         });
// });








