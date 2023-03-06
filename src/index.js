// In your project, display the current date and time using JavaScript: Tuesday 16:00
let now = new Date();

let date = now.getDate();

let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day} ${date} ${hours}:${minutes}`;

// Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function updateCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  let cityToUpdate = document.querySelector("#city-heading");
  cityToUpdate.innerHTML = city;
  let apiKey = "3499ef150985eccadd080ff408a018df";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(getWeather);
}

// In your project, when a user searches for a city (example: New York), it should display the name of the city on the result page and the current temperature of the city.

function getWeather(response) {
  let currentTemp = Math.round(response.data.main.temp);
  let temperature = document.querySelector("#current-temp");
  temperature.innerHTML = currentTemp;
}

let form = document.querySelector("form");
form.addEventListener("submit", updateCity);
