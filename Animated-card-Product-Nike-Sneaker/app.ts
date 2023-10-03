const colors: HTMLElement | null = document.querySelector(".card-info");
const image: HTMLElement | null = document.querySelector(".card-img");

colors?.addEventListener("click", (e: Event) => {
  const activeElement: HTMLElement | null = colors.querySelector(".active");
  if (
    e.target instanceof HTMLElement &&
    e.target.classList.contains("circle") &&
    activeElement
  ) {
    activeElement.classList.remove("active");
    e.target.classList.add("active");
    console.log((e.target as HTMLElement).id);
    image?.querySelector(".active")?.classList.remove("active");
    image
      ?.querySelector(`#${(e.target as HTMLElement).id}`)
      ?.classList.add("active");
  }
});
