
let weatherForecast = document.querySelector("#weatherForecast");

let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=48.93&lon=9.20&cnt=30&appid=0fd0d0d95fb9f35e91e087899de43503&units=imperial";

async function forecastApiFetch() {
    try {
        const forecastResponse = await fetch(forecastURL);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            displayForecastResults(forecastData);
        } else {
            throw Error (await forecastResponse.text());
        }
    } catch(error) {
        console.log(error);
    }
}

function displayForecastResults(forecastData) {

    // Filter the results for only the results from 12:00:00
    let onlyNoonData = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));

    // Get the current date
    let today = new Date();
    let todayString = today.toISOString().split("T")[0];

    for (let i = 0; i < onlyNoonData.length; i++) {
        
        // Used to limit the forecast to three days
        counter = 1;

        // If it doesn't include the current date
        if (!onlyNoonData[i].dt_txt.includes(todayString)) {

            // Get the name of the day
            let date = new Date(onlyNoonData[i].dt_txt);
            let day = date.toLocaleDateString('en-US', { weekday: 'long' });

            // Get the forecast temperature
            let temperature = `${Math.round(onlyNoonData[i].main.temp)}&deg;F`;

            // Add to HTML
            let forecastText = document.createElement("p");
            forecastText.innerHTML = `${day}: ${temperature}`;
            
            weatherForecast.appendChild(forecastText);

            // Break once three days have been forecast
            counter += 1;
            if (counter === 3) {
                break;
            }
        }
    }
}

forecastApiFetch();


/* 
This is the JSON structure fetched from https://api.openweathermap.org/data/2.5/forecast?lat=48.93&lon=9.20&cnt=3&appid=0fd0d0d95fb9f35e91e087899de43503&units=imperial 

{
    "cod":"200",
    "message":0,
    "cnt":3,
    "list":[
        {"dt":1716800400,
        "main":{
            "temp":61.21,
            "feels_like":61.18,
            "temp_min":60.04,
            "temp_max":61.21,
            "pressure":1020,
            "sea_level":1020,
            "grnd_level":984,
            "humidity":88,
            "temp_kf":0.65},
        "weather":[
            {
                "id":500,
                "main":"Rain",
                "description":"light rain",
                "icon":"10d"
            }],
        "clouds":{"all":100},
        "wind":{
            "speed":1.61,
            "deg":219,
            "gust":2.13},
        "visibility":9995,
        "pop":1,
        "rain":{"3h":1.87},
        "sys":{"pod":"d"},
        "dt_txt":"2024-05-27 09:00:00"
        },
        
        {"dt":1716811200,
        "main":{"temp":61.7,"feels_like":61.7,"temp_min":61.65,"temp_max":61.7,"pressure":1018,"sea_level":1018,"grnd_level":983,"humidity":88,"temp_kf":0.03},
        "weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],
        "clouds":{"all":100},
        "wind":{"speed":2.19,"deg":41,"gust":2.71},
        "visibility":10000,"pop":1,"rain":{"3h":4.28},"sys":{"pod":"d"},
        "dt_txt":"2024-05-27 12:00:00"},
        
        {"dt":1716822000,
        "main":{"temp":61.86,"feels_like":61.74,"temp_min":61.86,"temp_max":61.86,"pressure":1016,"sea_level":1016,"grnd_level":982,"humidity":85,"temp_kf":0},
        "weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],
        "clouds":{"all":84},"wind":{"speed":5.17,"deg":187,"gust":6.22},
        "visibility":10000,"pop":1,"rain":{"3h":1.25},"sys":{"pod":"d"},
        "dt_txt":"2024-05-27 15:00:00"}
    ],
    
    "city":{
        "id":2925189,
        "name":"Freiberg am Neckar",
        "coord":{"lat":48.93,"lon":9.2},
        "country":"DE",
        "population":15235,
        "timezone":7200,
        "sunrise":1716780465,
        "sunset":1716837202
    }
}


*/




