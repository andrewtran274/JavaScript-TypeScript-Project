const boxes = document.querySelectorAll(".container .box");

const imageElement = document.querySelector(".container .box img");

boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();

    box.classList.add("hover");
  });

  box.addEventListener("dragleave", (e) => {
    box.classList.remove("hover");
  });

  box.addEventListener("drop", () => {
    box.appendChild(imageElement);
  });
});
