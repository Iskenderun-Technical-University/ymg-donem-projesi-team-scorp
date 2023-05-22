const app = document.getElementById("hava-app-sec");
const temp = document.getElementById("temperature");
const dateOutput = document.getElementById("loca-date");
const timeOutput = document.getElementById("loca-time");
const conditionOutput = document.getElementById("weather-condition");
const nameOutput = document.getElementById("loca-name");
const icon = document.getElementById("speImg");
const cloudOutput = document.getElementById("footer-bulut");
const humidityOutput = document.getElementById("footer-nem");
const windOutput = document.getElementById("footer-rüzgar");
//const form = document.getElementById("locationInput");
//const search = document.getElementById("search");
//const btn = document.getElementById("submit");


let cityInput = "Istanbul";

cities.forEach((city) => {
    city.addEventListener("click", (e) => {

        cityInput = e.target.innerHTML;

        fetchWeatherData(); 

        app.style.opacity = "0";
    });
});

form.addEventListener("submit", (e) => {
    if(search.value.length == 0){
        alert("Lütfen şehir ismi giriniz.");
    }
    else{
        cityInput = search.value;

        fetchWeatherData(); 

        search.value = "";

        app.style.opacity = "0";
    }

    e.preventDefault();
});

function dayOfWeek(day, month, year) {
    const weekday= [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
    ];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()];
}

function fetchWeatherData() {
    fetch(`http://api.weatherapi.com/v1/current.json?key=844062924c5b4f1096795224232205&q=Istanbul&aqi=no`)
}










/*
hava-app-sec = weather-add
head1 = brand
temperature = temp
location-data = city-time
loca-name = name
time-and-date = small
loca-time = time
loca-date = date
weather-info = weather
weather-condition = condition
footer = details
footer-bulut = cloud
footer-nem = humidity
footer-rüzgar = wind
speImg = icon
*/