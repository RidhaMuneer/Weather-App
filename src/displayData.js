export function displayCityWeather(response) {
  const mainContainer = document.getElementById("welcome-screen");

  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  mainContainer.style.flexDirection = "row";
  mainContainer.style.alignItems = "center";
  mainContainer.style.justifyContent = "space-around";

  if (response && response.current) {
    const temp = document.createElement("div");
    temp.id = "temp-container";
    const header = document.createElement("h1");
    header.style.fontSize = "4rem";
    header.textContent = `${response.current.temp_c} C`;
    temp.appendChild(header);
    mainContainer.appendChild(temp);

    const otherInformation = document.createElement("div");
    otherInformation.id = "other-information";
    const feelsLike = document.createElement("h3");
    feelsLike.textContent = `Feels Like: ${response.current.feelslike_c} C`;
    const humidity = document.createElement("h3");
    humidity.textContent = `Humidity: ${response.current.humidity}`;
    const uv = document.createElement("h3");
    uv.textContent = `UV: ${response.current.uv}`;
    otherInformation.appendChild(feelsLike);
    otherInformation.appendChild(humidity);
    otherInformation.appendChild(uv);
    mainContainer.appendChild(otherInformation);
  } else {
    console.error("Invalid or missing response object:", response);
  }

  console.log(response);
}

export function displayCityWeatherF(response) {
  const mainContainer = document.getElementById("welcome-screen");

  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  mainContainer.style.flexDirection = "row";
  mainContainer.style.alignItems = "center";
  mainContainer.style.justifyContent = "space-around";

  if (response && response.current) {
    const temp = document.createElement("div");
    temp.id = "temp-container";
    const header = document.createElement("h1");
    header.style.fontSize = "4rem";
    header.textContent = `${response.current.temp_f} Fr`;
    temp.appendChild(header);
    mainContainer.appendChild(temp);

    const otherInformation = document.createElement("div");
    otherInformation.id = "other-information";
    const feelsLike = document.createElement("h3");
    feelsLike.textContent = `Feels Like: ${response.current.feelslike_f} Fr`;
    const humidity = document.createElement("h3");
    humidity.textContent = `Humidity: ${response.current.humidity}`;
    const uv = document.createElement("h3");
    uv.textContent = `UV: ${response.current.uv}`;
    otherInformation.appendChild(feelsLike);
    otherInformation.appendChild(humidity);
    otherInformation.appendChild(uv);
    mainContainer.appendChild(otherInformation);
  } else {
    console.error("Invalid or missing response object:", response);
  }

  console.log(response);
}
