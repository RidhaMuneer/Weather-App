import { loadingWeatherData } from "./weatherData.js";
import { displayCityWeather } from "./displayData.js";
import { displayNavBar } from "./navBar.js";

export default function welcomingScreen() {
  const mainContainer = document.getElementById("welcome-screen");

  const header = document.createElement("h1");
  header.textContent = "Forecast: Your Reliable Weather Companion";
  const subHeader = document.createElement("h2");
  subHeader.textContent = "Choose Your City!";

  const inputForm = document.createElement("form");
  inputForm.id = "city-form";

  const textLabel = document.createElement("input");
  textLabel.placeholder = "City Name";
  textLabel.id = "text-label";
  textLabel.type = "text";
  textLabel.required = true;
  const enterButton = document.createElement("button");
  enterButton.textContent = "Enter";
  enterButton.id = "enter-button";
  enterButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (textLabel.value !== "") {
      let cityName = textLabel.value;
      loadingWeatherData(cityName)
        .then((response) => {
          mainContainer.removeChild(header);
          mainContainer.removeChild(subHeader);
          mainContainer.removeChild(inputForm);
          displayNavBar();
          displayCityWeather(response);
        })
        .catch((error) => {
          console.error("Error loading weather data:", error);
        });
    }
  });

  inputForm.appendChild(textLabel);
  inputForm.appendChild(enterButton);

  mainContainer.appendChild(header);
  mainContainer.appendChild(subHeader);
  mainContainer.appendChild(inputForm);
}
