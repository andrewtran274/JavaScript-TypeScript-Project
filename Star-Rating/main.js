const starIcons = document.querySelectorAll(".rating i");
const ratingPoint = document.querySelector(".rating .point");

function handleRating() {
  let currentRating = 0;
  starIcons.forEach((star) => {
    star.addEventListener("click", () => {
      currentRating = star.id;
      for (let i = 0; i < 5; i++) {
        if (i < currentRating) {
          starIcons[i].classList.add("active");
        } else {
          starIcons[i].classList.remove("active");
        }
      }

      ratingPoint.innerText = `${currentRating}`;
    });
  });
}

window.addEventListener("load", handleRating);
