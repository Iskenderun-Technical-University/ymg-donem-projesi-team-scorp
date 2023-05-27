
window.addEventListener("load", ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
        });
    }
    
});



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