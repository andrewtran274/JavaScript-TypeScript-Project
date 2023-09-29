const buttons = document.querySelectorAll(".container .group-button .btn");
const cards = document.querySelectorAll(".container .group-card .card");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const activeElemnt = document.querySelector(
      ".container .group-button .active"
    );
    activeElemnt.classList.remove("active");
    e.target.classList.add("active");

    cards.forEach((card) => {
      card.classList.add("hiden");
      if (
        card.dataset.name === e.target.dataset.name ||
        e.target.dataset.name === "all"
      ) {
        card.classList.remove("hiden");
      }
    });
  });
});
