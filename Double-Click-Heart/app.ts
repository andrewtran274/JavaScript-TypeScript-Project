const heart = document.querySelector<HTMLDivElement>(".container .heart");
const pictures = document.querySelector<HTMLDivElement>(".container");

pictures?.addEventListener("dblclick", (e: MouseEvent) => {
  console.log(e);

  const xValue =
    e.clientX - (e.target as HTMLElement).getBoundingClientRect().left;
  const yValue =
    e.clientY - (e.target as HTMLElement).getBoundingClientRect().top;

  if (heart) {
    heart.style.left = `${xValue}px`;
    heart.style.top = `${yValue}px`;

    heart.classList.add("active");

    setTimeout(() => {
      heart.classList.remove("active");
    }, 1000);
  }
});
