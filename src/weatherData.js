export async function loadingWeatherData(cityName) {
  let weatherUrl = `https://api.weatherapi.com/v1/current.json?key=71da121eb4244394942145528231007&q=${cityName}`;
  try {
    const response = await fetch(weatherUrl);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error("Error loading weather data:", error);
    throw error;
  }
}
