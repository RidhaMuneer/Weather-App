import { loadingWeatherData } from "./weatherData.js";
import { displayCityWeather } from "./displayData.js";

export function displayNavBar() {
  const navBar = document.getElementById("nav-bar");

  const svgMarkup =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z" /></svg>';

  const weatherIcon = document.createElement("img");
  weatherIcon.src = "data:image/svg+xml," + encodeURIComponent(svgMarkup);
  weatherIcon.style.width = "40px";
  weatherIcon.style.height = "40px";

  navBar.appendChild(weatherIcon);

  const inputForm = document.createElement("form");
  inputForm.id = "city-form-1";

  const textLabel = document.createElement("input");
  textLabel.placeholder = "City Name";
  textLabel.id = "text-label-1";
  textLabel.type = "text";
  textLabel.required = true;
  const enterButton = document.createElement("button");
  enterButton.textContent = "Enter";
  enterButton.id = "enter-button-1";
  enterButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (textLabel.value !== "") {
      let cityName = textLabel.value;
      loadingWeatherData(cityName)
        .then((response) => {
          textLabel.value = "";
          displayCityWeather(response);
        })
        .catch((error) => {
          console.error("Error loading weather data:", error);
        });
    }
  });

  inputForm.appendChild(textLabel);
  inputForm.appendChild(enterButton);

  navBar.appendChild(inputForm);

  const changeUnit = document.createElement("div");
  changeUnit.id = "buttons";
  const changeUnitFr = document.createElement("button");
  changeUnitFr.textContent = "Fr";
  const changeUnitC = document.createElement("button");
  changeUnitC.textContent = "C";

  changeUnit.appendChild(changeUnitFr);
  changeUnit.appendChild(changeUnitC);

  navBar.appendChild(changeUnit);
}
