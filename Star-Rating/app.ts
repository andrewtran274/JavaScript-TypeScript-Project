const starIcons = document.querySelectorAll<HTMLDivElement>(".rating i");
const ratingPoint = document.querySelector<HTMLDivElement>(".rating .point");
let currentRating = 0;

function handleRating() {
  starIcons.forEach((star, index) => {
    star.addEventListener("click", () => {
      currentRating = index + 1;
      starIcons.forEach((s, i) =>
        s.classList.toggle("active", i < currentRating)
      );
      if (ratingPoint) {
        ratingPoint.innerText = `${currentRating}`;
      }
    });
  });
}

window.addEventListener("load", handleRating);
