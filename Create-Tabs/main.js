const navigationButtons = document.querySelectorAll(".container .btn");

const contentTabs = document.querySelectorAll(".content-item");

const line = document.querySelector(".line");

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
    let valueX = e.target.offsetLeft + "px";
    let valueWidth = e.target.offsetWidth + "px";

    line.style.left = valueX;
    line.style.width = valueWidth;

    console.log(valueX, valueWidth);
  });
});
