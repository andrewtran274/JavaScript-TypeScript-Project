const pageNumbers = document.querySelectorAll(".pageNumbers .number");
const prevAndNextBtn = document.querySelectorAll(".container .prevAndNextBtn");
const startBtn = document.querySelector(".startBtn");
const endBtn = document.querySelector(".endBtn");

console.log(startBtn, endBtn);

let currentNumber = 0;

const handleActiveNumber = () => {
  pageNumbers.forEach((number, indexNumber) => {
    if (indexNumber === currentNumber) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
  });
};

const handleActiveButton = () => {
  if (currentNumber == 0) {
    prevAndNextBtn[0].classList.add("disabled");
    startBtn.classList.add("disabled");
  } else if (currentNumber === pageNumbers.length - 1) {
    prevAndNextBtn[1].classList.add("disabled");
    endBtn.classList.add("disabled");
  } else {
    prevAndNextBtn[0].classList.remove("disabled");
    startBtn.classList.remove("disabled");
    prevAndNextBtn[1].classList.remove("disabled");
    endBtn.classList.remove("disabled");
  }
};

pageNumbers.forEach((number, indexNumber) => {
  number.addEventListener("click", () => {
    currentNumber = indexNumber;
    document.querySelector(".pageNumbers .active").classList.remove("active");
    number.classList.add("active");
    handleActiveButton();
  });
});

prevAndNextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    currentNumber =
      (currentNumber += button.id === "next" ? 1 : -1) >= pageNumbers.length - 1
        ? pageNumbers.length - 1
        : currentNumber <= 0
        ? 0
        : currentNumber;
    handleActiveNumber();
    handleActiveButton();
  });
});

endBtn.addEventListener("click", () => {
  currentNumber = pageNumbers.length - 1;
  handleActiveNumber();
  document.querySelectorAll(".disabled").forEach((button) => {
    button.classList.remove("disabled");
  });
  handleActiveButton();
});

startBtn.addEventListener("click", () => {
  currentNumber = 0;
  handleActiveNumber();
  document.querySelectorAll(".disabled").forEach((button) => {
    button.classList.remove("disabled");
  });
  handleActiveButton();
});
