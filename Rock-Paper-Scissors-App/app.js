const containerGame = document.querySelector(".container");
const cpuGame = document.querySelector(".container .cpu-img");
const userGame = document.querySelector(".container .user-img");
const result = document.querySelector(".container .result");
const controlGame = document.querySelectorAll(".container .control-game .item");

controlGame.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    controlGame.forEach((element) => {
      element.classList.remove("active");
    });
    button.classList.add("active");

    const arrayClassImg = [
      "fa-regular fa-hand-back-fist",
      "fa-regular fa-hand",
      "fa-regular fa-hand-scissors",
    ];
    const arrayGame = ["R", "P", "S"];
    const radomNumber = Math.floor(Math.random() * 3);

    let classImg = button.querySelector("i").getAttribute("class");

    userGame.querySelector("i").setAttribute("class", classImg);
    cpuGame
      .querySelector("i")
      .setAttribute("class", arrayClassImg[radomNumber]);

    let cpuValue = arrayGame[radomNumber];
    let userValue = arrayGame[index];

    

    console.log(cpuValue, userValue);
  });
});
