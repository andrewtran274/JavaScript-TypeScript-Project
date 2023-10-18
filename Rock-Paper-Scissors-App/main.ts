const container: HTMLDivElement | null = document.querySelector(".container");
const cpuImage: HTMLImageElement | null = document.querySelector(
  ".container .cpu-img"
);
const userImage: HTMLImageElement | null = document.querySelector(
  ".container .user-img"
);
const resultDisplay: HTMLDivElement | null =
  document.querySelector(".container .result");
const controlButtons: NodeListOf<HTMLButtonElement> | null =
  document.querySelectorAll(".container .control-game .item");
const iconClasses: string[] = [
  "fa-regular fa-hand-back-fist",
  "fa-regular fa-hand",
  "fa-regular fa-hand-scissors",
];
const gameOptions: string[] = ["R", "P", "S"];
const winnerState: { [key: string]: string } = {
  RP: "CPU",
  PR: "User",
  RS: "User",
  SR: "User",
  PS: "CPU",
  SP: "User",
};

if (container && cpuImage && userImage && resultDisplay && controlButtons) {
  controlButtons.forEach((button: HTMLButtonElement, index: number) => {
    button.addEventListener("click", () => {
      controlButtons.forEach((element: HTMLButtonElement) =>
        element.classList.remove("active")
      );
      button.classList.add("active");

      container!.classList.add("active");
      cpuImage!.querySelector("i")!.setAttribute("class", iconClasses[0]);
      userImage!.querySelector("i")!.setAttribute("class", iconClasses[0]);
      resultDisplay!.textContent = "Wait...";

      const randomNumber: number = Math.floor(Math.random() * 3);
      const userChoice: string = button
        .querySelector("i")!
        .getAttribute("class") as string;

      setTimeout(() => {
        container!.classList.remove("active");
        userImage!.querySelector("i")!.setAttribute("class", userChoice);
        cpuImage!
          .querySelector("i")!
          .setAttribute("class", iconClasses[randomNumber]);

        const cpuValue: string = gameOptions[randomNumber];
        const userValue: string = gameOptions[index];

        const result: string =
          cpuValue === userValue
            ? "Match Draw"
            : `${winnerState[userValue + cpuValue]} Won!!!`;
        resultDisplay!.textContent = result;
      }, 2500);
    });
  });
}
