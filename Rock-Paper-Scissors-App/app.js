const container = document.querySelector(".container");
const cpuImage = document.querySelector(".container .cpu-img");
const userImage = document.querySelector(".container .user-img");
const resultDisplay = document.querySelector(".container .result");
const controlButtons = document.querySelectorAll(
  ".container .control-game .item"
);
const iconClasses = [
  "fa-regular fa-hand-back-fist",
  "fa-regular fa-hand",
  "fa-regular fa-hand-scissors",
];
const gameOptions = ["R", "P", "S"];
const winnerState = {
  RP: "CPU",
  PR: "User",
  RS: "User",
  SR: "User",
  PS: "CPU",
  SP: "User",
};

controlButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    controlButtons.forEach((element) => element.classList.remove("active"));
    button.classList.add("active");

    container.classList.add("active");
    cpuImage.querySelector("i").setAttribute("class", iconClasses[0]);
    userImage.querySelector("i").setAttribute("class", iconClasses[0]);
    resultDisplay.textContent = "Wait...";

    const randomNumber = Math.floor(Math.random() * 3);
    const userChoice = button.querySelector("i").getAttribute("class");

    setTimeout(() => {
      container.classList.remove("active");
      userImage.querySelector("i").setAttribute("class", userChoice);
      cpuImage
        .querySelector("i")
        .setAttribute("class", iconClasses[randomNumber]);

      const cpuValue = gameOptions[randomNumber];
      const userValue = gameOptions[index];

      resultDisplay.textContent =
        cpuValue === userValue
          ? "Match Draw"
          : `${winnerState[userValue + cpuValue]} Won!!!`;
    }, 2500);
  });
});
