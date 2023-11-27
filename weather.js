const searchInput = document.querySelector('.cityInput');
const searchButton = document.querySelector('.cityButton');

const apiKey = 'd20ec213c85b288533b754bb122b8211'; 

function buildUrl(cityName) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;
}

async function getWeather(cityName) {
  const url = buildUrl(cityName);

  try {
    const res = await fetch(url);
    const data = await res.json();

    document.querySelector('.city').innerHTML=data.city.name;

    let result = data.list[0].dt_txt;
    let result2 = result.slice(0,10);

    document.querySelector('.date').innerHTML=result2;
  

    document.querySelector('.weatherDesc').innerHTML=data.list[0].weather[0].description;

    document.querySelector('.celcius').innerHTML=data.list[0].main.temp + "° C";
    document.querySelector('.feelLike').innerHTML=data.list[0].main.feels_like +" ° C";
    document.querySelector('.humidity').innerHTML=data.list[0].main.humidity + " %";
    document.querySelector('.pressure').innerHTML=data.list[0].main.pressure + " Nm^-2";
    document.querySelector('.windSpeed').innerHTML=data.list[0].wind.speed + " km/h";
    
    // day2

    document.querySelector('.date2').innerHTML=data.list[6].dt_txt;
    document.querySelector('.weatherDesc2').innerHTML=data.list[6].weather[0].description;

    document.querySelector('.celcius2').innerHTML=data.list[6].main.temp  +"° C";
    document.querySelector('.feelLike2').innerHTML=data.list[6].main.feels_like +" ° C";
    document.querySelector('.humidity2').innerHTML=data.list[6].main.humidity + " %";
    document.querySelector('.pressure2').innerHTML=data.list[6].main.pressure + " Nm^-2";
    document.querySelector('.windSpeed2').innerHTML=data.list[6].wind.speed + " km/h";

    // day3

    document.querySelector('.date3').innerHTML=data.list[14].dt_txt;
    document.querySelector('.weatherDesc3').innerHTML=data.list[14].weather[0].description;

    document.querySelector('.celcius3').innerHTML=data.list[14].main.temp + "° C";
    document.querySelector('.feelLike3').innerHTML=data.list[14].main.feels_like +" ° C";
    document.querySelector('.humidity3').innerHTML=data.list[14].main.humidity + " %";
    document.querySelector('.pressure3').innerHTML=data.list[14].main.pressure + " Nm^-2";
    document.querySelector('.windSpeed3').innerHTML=data.list[14].wind.speed + " km/h";
    
    // day4
    document.querySelector('.date4').innerHTML=data.list[22].dt_txt;
    document.querySelector('.weatherDesc4').innerHTML=data.list[22].weather[0].description;

    document.querySelector('.celcius4').innerHTML=data.list[22].main.temp + "° C";
    document.querySelector('.feelLike4').innerHTML=data.list[22].main.feels_like +" ° C";
    document.querySelector('.humidity4').innerHTML=data.list[22].main.humidity + " %";
    document.querySelector('.pressure4').innerHTML=data.list[22].main.pressure + " Nm^-2";
    document.querySelector('.windSpeed4').innerHTML=data.list[22].wind.speed + " km/h";

    // day5
    document.querySelector('.date5').innerHTML=data.list[30].dt_txt;
    document.querySelector('.weatherDesc5').innerHTML=data.list[30].weather[0].description;

    document.querySelector('.celcius5').innerHTML=data.list[30].main.temp + "° C";
    document.querySelector('.feelLike5').innerHTML=data.list[30].main.feels_like +" ° C";
    document.querySelector('.humidity5').innerHTML=data.list[30].main.humidity + " %";
    document.querySelector('.pressure5').innerHTML=data.list[30].main.pressure + " Nm^-2";
    document.querySelector('.windSpeed5').innerHTML=data.list[30].wind.speed + " km/h";

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const cityName = searchInput.value.trim();

  if (cityName !== '') {
    getWeather(cityName);
  }
});


getWeather('Dhaka'); 
