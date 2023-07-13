export default function welcomingScreen() {
  const mainContainer = document.getElementById("welcome-screen");

  const header = document.createElement("h1");
  header.textContent = "Forecast: Your Reliable Weather Companion";
  const subHeader = document.createElement("h2");
  subHeader.textContent = "Choose Your City!";
  const textLabel = document.createElement("input");
  textLabel.placeholder = "City Name";
  textLabel.id = "text-label";
  const enterButton = document.createElement("button");
  enterButton.textContent = "Enter";
  enterButton.id = "enter-button";

  mainContainer.appendChild(header);
  mainContainer.appendChild(subHeader);
  mainContainer.appendChild(textLabel);
  mainContainer.appendChild(enterButton);
}
