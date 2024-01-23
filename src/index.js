function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
  searchInput.value = "";
}

let searchFormElement = document.querySelector("#search-section");
searchFormElement.addEventListener("submit", handleSearchSubmit);
