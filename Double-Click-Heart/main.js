const heart = document.querySelector(".container .heart");
const pictures = document.querySelector(".container");

pictures.addEventListener("dblclick", (e) => {
  console.log(e);

  let xValue = e.clientX - e.target.getBoundingClientRect().left;
  let yValue = e.clientY - e.target.getBoundingClientRect().top;

  heart.style.left = `${xValue}px`;
  heart.style.top = `${yValue}px`;

  heart.classList.add("active");

  setTimeout(() => {
    heart.classList.remove("active");
  }, 1000);
});
