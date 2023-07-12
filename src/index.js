import { loadingWeatherData } from "./weatherData.js";

//this is returing an object that has all of the related data;
loadingWeatherData()
  .then((weatherData) => {
    console.log(weatherData);
  })
  .catch((error) => {
    console.error("Error loading weather data:", error);
  });
