function displayWeather(response) {
  console.log(response);
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
