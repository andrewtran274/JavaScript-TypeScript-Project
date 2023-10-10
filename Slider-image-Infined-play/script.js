const buttons = document.querySelectorAll(".group-button i");
const slider = document.querySelector(".slider");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const sliderImage = document.querySelectorAll(".slider .item");
    if (e.target.id === "left") {
      slider.appendChild(sliderImage[0]);
    } else if (e.target.id === "right") {
      slider.prepend(sliderImage[sliderImage.length - 1]);
    }
  });
});
