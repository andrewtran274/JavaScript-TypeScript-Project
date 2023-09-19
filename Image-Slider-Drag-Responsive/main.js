function handleSliderFunc() {
  const slideButtons = document.querySelectorAll(
    ".slider-wrapper .button-slide"
  );
  const imageList = document.querySelector(".slider-wrapper .image-list");

  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;

      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  if (imageList.scrollLeft <= 0) {
    imageList.style.display = "none";
  }

  function handleSlideButtons() {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
    slideButtons[1].style.display =
      imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }

  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
  });
}

window.addEventListener("load", handleSliderFunc);
