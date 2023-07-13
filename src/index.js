import { loadingWeatherData } from "./weatherData.js";
import welcomingScreen from "./welcomeScreen.js";

const cityName = welcomingScreen();

//this is returing an object that has all of the related data;
const response = await loadingWeatherData(cityName);
