const colors = document.querySelector(".card-info");
const image = document.querySelector(".card-img");

colors.addEventListener("click", (e) => {
  const activeElement = colors.querySelector(".active");
  if (e.target.classList.contains("circle") && activeElement) {
    activeElement.classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target.id);
    image.querySelector(".active").classList.remove("active");
    image.querySelector(`#${e.target.id}`).classList.add("active");
  }
});
