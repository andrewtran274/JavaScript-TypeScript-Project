const cardImages = document.querySelectorAll(".container .imgcard");

cardImages.forEach((card) => {
  card.addEventListener("click", () => {
    handleTurnOffActive();
    card.classList.add("active");
  });
});

function handleTurnOffActive() {
  cardImages.forEach((card) => {
    card.classList.remove("active");
  });
}
