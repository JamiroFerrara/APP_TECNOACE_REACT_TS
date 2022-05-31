export function getWeather(){
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=d5b8726082cf88201501ac54bad5f4c2')
    .then(response => response.json())
    .then(data => console.log(data));
}
