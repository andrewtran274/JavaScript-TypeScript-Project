function initializeSlider() {
  const sliderButtons = document.querySelectorAll(
    ".slider-wrapper .slider-button"
  ) as NodeListOf<HTMLDivElement>;

  const imageList = document.querySelector(
    ".slider-wrapper .image-list"
  ) as HTMLDivElement;

  const maxScrollDistance = imageList.scrollWidth - imageList.clientWidth;

  sliderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;

      const scrollAmount = imageList.clientWidth * direction;

      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  if (imageList.scrollLeft <= 0) {
    imageList.style.display = "none";
  }

  function updateSliderButtonVisibility() {
    sliderButtons[0].style.display =
      imageList.scrollLeft <= 0 ? "none" : "block";

    sliderButtons[1].style.display =
      imageList.scrollLeft >= maxScrollDistance ? "none" : "block";
  }

  imageList.addEventListener("scroll", () => {
    updateSliderButtonVisibility();
  });
}

window.addEventListener("load", initializeSlider);
