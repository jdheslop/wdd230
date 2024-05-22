
const currentTemp = document.querySelector("#currentTemp");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherDescription = document.querySelector("#weatherDescription");
const city = document.querySelector("#city");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=48.93&lon=9.20&appid=0fd0d0d95fb9f35e91e087899de43503&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}

function displayResults(data) {
    city.textContent = `${data.name} (${data.sys.country})`
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconSRC = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let description = data.weather[0].description;
    weatherIcon.setAttribute("src", iconSRC);
    weatherIcon.setAttribute("alt", description);
    weatherDescription.textContent = `${capitalizeFirstLetters(description)}`;
}


function capitalizeFirstLetters(string) {
    return string.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}





apiFetch();



/* 
This is the JSON structure fetched from https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=0fd0d0d95fb9f35e91e087899de43503&units=imperial 
{
    "coord":{"lon":6.64,"lat":49.75},
    "weather":[{
        "id":800,
        "main":"Clear",
        "description":"clear sky",
        "icon":"01d"}],
    "base":"stations",
    "main":{
        "temp":69.13,
        "feels_like":68.76,
        "temp_min":65.89,
        "temp_max":73.96,
        "pressure":1010,
        "humidity":64,
        "sea_level":1010,
        "grnd_level":975
    },
    "visibility":10000,
    "wind":{"speed":3.58,"deg":289,"gust":3.96},
    "clouds":{"all":4},"dt":1716205322,
    "sys":{
        "type":2,
        "id":2080314,
        "country":"DE",
        "sunrise":1716176507,
        "sunset":1716232709
    },
    "timezone":7200,
    "id":6554291,
    "name":"Trier",
    "cod":200
}


*/




