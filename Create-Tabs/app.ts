const navigationButtons =
  document.querySelectorAll<HTMLElement>(".container .btn");

const contentTabs = document.querySelectorAll<HTMLElement>(".content-item");

const line = document.querySelector<HTMLElement>(".line");

navigationButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    navigationButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    contentTabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    contentTabs[index].classList.add("active");
    button.classList.add("active");

    console.log(e.target);
    let valueX = (e.target as HTMLElement).offsetLeft + "px";
    let valueWidth = (e.target as HTMLElement).offsetWidth + "px";

    if (line) {
      line.style.left = valueX;
      line.style.width = valueWidth;
    }

    console.log(valueX, valueWidth);
  });
});
