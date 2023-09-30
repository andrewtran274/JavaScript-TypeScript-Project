const container = document.querySelector(".container") as HTMLElement;
const buttons = container.querySelectorAll(
  ".group-button .btn"
) as NodeListOf<HTMLButtonElement>;
const cards = container.querySelectorAll(
  ".group-card .card"
) as NodeListOf<HTMLElement>;

container.addEventListener("click", (e: MouseEvent) => {
  if ((<HTMLButtonElement>e.target).classList.contains("btn")) {
    const activeButton = container.querySelector(
      ".group-button .active"
    ) as HTMLButtonElement;
    activeButton.classList.remove("active");
    (e.target as HTMLButtonElement).classList.add("active");

    cards.forEach((card) => {
      card.classList.add("hidden");
      if (
        card.dataset.name === (e.target as HTMLButtonElement).dataset.name ||
        (e.target as HTMLButtonElement).dataset.name === "all"
      ) {
        card.classList.remove("hidden");
      }
    });
  }
});
