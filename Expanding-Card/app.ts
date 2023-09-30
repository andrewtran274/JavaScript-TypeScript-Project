const imageCards = document.querySelectorAll<HTMLDivElement>(
  ".container .imgcard"
);

imageCards.forEach((card) => {
  card.addEventListener("click", () => {
    deactivateAllCards();
    card.classList.add("active");
  });
});

function deactivateAllCards() {
  imageCards.forEach((card) => {
    card.classList.remove("active");
  });
}
