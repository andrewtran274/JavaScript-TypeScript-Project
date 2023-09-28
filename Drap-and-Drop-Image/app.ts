const boxes: NodeListOf<HTMLDivElement> =
  document.querySelectorAll(".container .box");

const imageElement: HTMLImageElement | null = document.querySelector(
  ".container .box img"
);

boxes.forEach((box: HTMLDivElement) => {
  box.addEventListener("dragover", (event: DragEvent) => {
    event.preventDefault();

    box.classList.add("hover");
  });

  box.addEventListener("dragleave", () => {
    box.classList.remove("hover");
  });

  box.addEventListener("drop", () => {
    if (imageElement) {
      box.appendChild(imageElement);
    }
  });
});
