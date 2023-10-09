const buttons: NodeListOf<HTMLElement> =
  document.querySelectorAll(".group-button i");
const slider: HTMLElement | null = document.querySelector(".slider");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const sliderImage: NodeListOf<HTMLElement> =
      document.querySelectorAll(".slider .item");
    if (e.target && e.target instanceof HTMLElement) {
      if (e.target.id === "left" && slider) {
        slider.appendChild(sliderImage[0]);
      } else if (e.target.id === "right" && slider) {
        slider.prepend(sliderImage[sliderImage.length - 1]);
      }
    }
  });
});
