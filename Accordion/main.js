const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");

    let content = item.querySelector(".accordion-item__content");
    if (item.classList.contains("active")) {
      content.style.height = `${content.scrollHeight}px`;
    } else {
      content.style.height = `0px`;
    }

    removeActive(index);
  });
});

function removeActive(index) {
  accordionItem.forEach((item, indexItem) => {
    if (index !== indexItem) {
      item.classList.remove("active");
      let content = item.querySelector(".accordion-item__content");
      content.style.height = `0px`;
    }
  });
}
