export function displayCityWeather(response) {
  const mainContainer = document.getElementById("welcome-screen");

  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  mainContainer.style.flexDirection = "row";
  mainContainer.style.alignItems = "center";
  mainContainer.style.justifyContent = "space-around";

  if (response && response.current) {
    const parentDiv = document.createElement("div");
    parentDiv.style.display = "flex";
    parentDiv.style.flexDirection = "column";

    const emptyDiv = document.createElement("div");
    const cityName = document.createElement("h1");
    cityName.textContent = `${response.location.name}`;
    cityName.style.fontSize = "4rem";
    emptyDiv.appendChild(cityName);

    const temp = document.createElement("div");
    temp.id = "temp-container";
    temp.style.display = "flex";
    temp.style.flexDirection = "row";
    temp.style.alignItems = "center";
    temp.style.justifyContent = "center";
    temp.style.marginTop = "-40px";

    const header = document.createElement("h1");
    header.style.fontSize = "4.5rem";
    header.textContent = `${response.current.temp_c}`;

    const svgMarkup =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5,5C18.05,5 19.5,5.47 20.69,6.28L19.53,9.17C18.73,8.44 17.67,8 16.5,8C14,8 12,10 12,12.5C12,15 14,17 16.5,17C17.53,17 18.47,16.66 19.23,16.08L20.37,18.93C19.24,19.61 17.92,20 16.5,20A7.5,7.5 0 0,1 9,12.5A7.5,7.5 0 0,1 16.5,5M6,3A3,3 0 0,1 9,6A3,3 0 0,1 6,9A3,3 0 0,1 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z" /></svg>';

    const img = document.createElement("img");
    img.src = "data:image/svg+xml," + encodeURIComponent(svgMarkup);
    img.style.width = "50px";
    img.style.height = "50px";

    temp.appendChild(header);
    temp.appendChild(img);

    parentDiv.appendChild(emptyDiv);
    parentDiv.appendChild(temp);

    mainContainer.appendChild(parentDiv);

    const otherInformation = document.createElement("div");
    otherInformation.id = "other-information";
    const feelsLike = document.createElement("h3");
    feelsLike.textContent = `Feels Like: ${response.current.feelslike_c} C`;

    const humDiv = document.createElement("div");
    humDiv.style.display = "flex";
    humDiv.style.flexDirection = "row";
    humDiv.style.gap = "3px";
    humDiv.style.alignItems = "center";
    humDiv.style.justifyContent = "center";

    const humidity = document.createElement("h3");
    humidity.textContent = `${response.current.humidity}`;
    const humImg = document.createElement("img");
    const humMarkup =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z" /></svg>';
    humImg.src = "data:image/svg+xml," + encodeURIComponent(humMarkup);
    humImg.style.width = "30px";
    humImg.style.height = "30px";
    humDiv.appendChild(humImg);
    humDiv.appendChild(humidity);

    const uvDiv = document.createElement("div");
    uvDiv.style.display = "flex";
    uvDiv.style.flexDirection = "row";
    uvDiv.style.gap = "7px";
    uvDiv.style.alignItems = "center";
    uvDiv.style.justifyContent = "center";

    const uvImg = document.createElement("img");
    const uvMarkup =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 6C13.76 6 16 8.24 16 11S13.76 16 11 16 6 13.76 6 11 8.24 6 11 6M11 1L13.39 4.42C12.65 4.15 11.84 4 11 4S9.35 4.15 8.61 4.42L11 1M2.34 6L6.5 5.65C5.9 6.16 5.36 6.78 4.94 7.5C4.5 8.24 4.25 9 4.11 9.79L2.34 6M2.36 16L4.12 12.23C4.26 13 4.53 13.78 4.95 14.5C5.37 15.24 5.91 15.86 6.5 16.37L2.36 16M19.65 6L17.88 9.79C17.74 9 17.47 8.23 17.05 7.5C16.63 6.78 16.1 6.15 15.5 5.64L19.65 6M23 13H21C21 15.05 20.22 17.1 18.66 18.66C17.09 20.23 15.05 21 13 21V23C15.56 23 18.12 22 20.07 20.07S23 15.56 23 13M19 13H17C17 14 16.61 15.05 15.83 15.83C15.05 16.61 14 17 13 17V19C14.54 19 16.08 18.41 17.25 17.24C18.41 16.08 19 14.54 19 13" /></svg>';
    uvImg.src = "data:image/svg+xml," + encodeURIComponent(uvMarkup);
    uvImg.style.width = "30px";
    uvImg.style.height = "30px";
    const uv = document.createElement("h3");
    uv.textContent = `${response.current.uv}`;
    uvDiv.appendChild(uvImg);
    uvDiv.appendChild(uv);

    otherInformation.appendChild(feelsLike);
    otherInformation.appendChild(humDiv);
    otherInformation.appendChild(uvDiv);
    mainContainer.appendChild(otherInformation);
    console.log(response);
  } else {
    console.error("Invalid or missing response object:", response);
  }
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
    const parentDiv = document.createElement("div");
    parentDiv.style.display = "flex";
    parentDiv.style.flexDirection = "column";

    const emptyDiv = document.createElement("div");
    const cityName = document.createElement("h1");
    cityName.textContent = `${response.location.name}`;
    cityName.style.fontSize = "4rem";
    emptyDiv.appendChild(cityName);

    const temp = document.createElement("div");
    temp.id = "temp-container";
    temp.style.display = "flex";
    temp.style.flexDirection = "row";
    temp.style.alignItems = "center";
    temp.style.justifyContent = "center";
    temp.style.marginTop = "-30px";
    temp.style.gap = "5px";

    const header = document.createElement("h1");
    header.style.fontSize = "4.5rem";
    header.textContent = `${response.current.temp_f}`;

    const svgMarkup =
      '<?xml version="1.0" encoding="iso-8859-1"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 127.122 127.122" xml:space="preserve"><g><path style="fill:#010002;" d="M25.553,5.496C11.46,5.496,0,16.962,0,31.054c0,14.103,11.46,25.553,25.553,25.553s25.558-11.455,25.558-25.553C51.111,16.962,39.645,5.496,25.553,5.496z M25.553,43.836c-7.049,0-12.776-5.733-12.776-12.782c0-7.038,5.727-12.782,12.776-12.782s12.782,5.744,12.782,12.782C38.335,38.103,32.602,43.836,25.553,43.836z M127.122,34.323V14.454H61.766v107.171h24.171V78.537h38.481V58.815H85.937V34.323H127.122z"/></g></svg>';

    const img = document.createElement("img");
    img.src = "data:image/svg+xml," + encodeURIComponent(svgMarkup);
    img.style.width = "50px";
    img.style.height = "50px";

    temp.appendChild(header);
    temp.appendChild(img);

    parentDiv.appendChild(emptyDiv);
    parentDiv.appendChild(temp);

    mainContainer.appendChild(parentDiv);

    const otherInformation = document.createElement("div");
    otherInformation.id = "other-information";
    const feelsLike = document.createElement("h3");
    feelsLike.textContent = `Feels Like: ${response.current.feelslike_f} Fr`;
    const humDiv = document.createElement("div");
    humDiv.style.display = "flex";
    humDiv.style.flexDirection = "row";
    humDiv.style.gap = "3px";
    humDiv.style.alignItems = "center";
    humDiv.style.justifyContent = "center";

    const humidity = document.createElement("h3");
    humidity.textContent = `${response.current.humidity}`;
    const humImg = document.createElement("img");
    const humMarkup =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z" /></svg>';
    humImg.src = "data:image/svg+xml," + encodeURIComponent(humMarkup);
    humImg.style.width = "30px";
    humImg.style.height = "30px";
    humDiv.appendChild(humImg);
    humDiv.appendChild(humidity);

    const uvDiv = document.createElement("div");
    uvDiv.style.display = "flex";
    uvDiv.style.flexDirection = "row";
    uvDiv.style.gap = "7px";
    uvDiv.style.alignItems = "center";
    uvDiv.style.justifyContent = "center";

    const uvImg = document.createElement("img");
    const uvMarkup =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 6C13.76 6 16 8.24 16 11S13.76 16 11 16 6 13.76 6 11 8.24 6 11 6M11 1L13.39 4.42C12.65 4.15 11.84 4 11 4S9.35 4.15 8.61 4.42L11 1M2.34 6L6.5 5.65C5.9 6.16 5.36 6.78 4.94 7.5C4.5 8.24 4.25 9 4.11 9.79L2.34 6M2.36 16L4.12 12.23C4.26 13 4.53 13.78 4.95 14.5C5.37 15.24 5.91 15.86 6.5 16.37L2.36 16M19.65 6L17.88 9.79C17.74 9 17.47 8.23 17.05 7.5C16.63 6.78 16.1 6.15 15.5 5.64L19.65 6M23 13H21C21 15.05 20.22 17.1 18.66 18.66C17.09 20.23 15.05 21 13 21V23C15.56 23 18.12 22 20.07 20.07S23 15.56 23 13M19 13H17C17 14 16.61 15.05 15.83 15.83C15.05 16.61 14 17 13 17V19C14.54 19 16.08 18.41 17.25 17.24C18.41 16.08 19 14.54 19 13" /></svg>';
    uvImg.src = "data:image/svg+xml," + encodeURIComponent(uvMarkup);
    uvImg.style.width = "30px";
    uvImg.style.height = "30px";
    const uv = document.createElement("h3");
    uv.textContent = `${response.current.uv}`;
    uvDiv.appendChild(uvImg);
    uvDiv.appendChild(uv);

    otherInformation.appendChild(feelsLike);
    otherInformation.appendChild(humDiv);
    otherInformation.appendChild(uvDiv);
    mainContainer.appendChild(otherInformation);
  } else {
    console.error("Invalid or missing response object:", response);
  }
}
