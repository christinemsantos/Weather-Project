function displayWeather(response) {
  let date = new Date(response.data.time * 1000);
  let wordDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let wordMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentDate = document.querySelector("#day");
  let currentTimeHours = document.querySelector("#time-hours");
  let currentTimeMinutes = document.querySelector("#time-minutes");
  let currentAmPm = document.querySelector("#am-pm");
  let currentCity = document.querySelector("#city");
  let currentTemp = document.querySelector("#current-temp");
  let currentHumid = document.querySelector("#humidity-value");
  let currentWind = document.querySelector("#windspeed-value");
  let currentIcon = document.querySelector("#weather-icon");
  let currentConditions = document.querySelector("#conditions");

  console.log(response.data);
  currentDate.innerHTML = `${wordDay[date.getDay()]} ${
    wordMonth[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;

  if (date.getHours() > 12) {
    currentTimeHours.innerHTML = `${date.getHours() - 12}`;
  } else {
    currentTimeHours.innerHTML = `${date.getHours()}`;
  }

  if (date.getMinutes() > 9) {
    currentTimeMinutes.innerHTML = `: ${date.getMinutes()}`;
  } else {
    currentTimeMinutes.innerHTML = `: 0${date.getMinutes()}`;
  }

  if (date.getHours() < 12) {
    currentAmPm.innerHTML = "am";
  } else {
    currentAmPm.innerHTML = "pm";
  }

  currentCity.innerHTML = response.data.city;
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
  currentHumid.innerHTML = `${Math.round(response.data.temperature.humidity)}%`;
  currentWind.innerHTML = `${response.data.wind.speed}mph`;
  currentIcon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon"/>`;
  currentConditions.innerHTML = response.data.condition.description;
}
function searchCity(city) {
  let apiKey = "af51t24f57b6fo0d3407bf1a846aaa92";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeather);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
  searchCity(searchInput.value);
  searchInput.value = "";
}

let searchFormElement = document.querySelector("#search-section");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Hartford");
