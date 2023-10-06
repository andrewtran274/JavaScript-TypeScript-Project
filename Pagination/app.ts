// Định nghĩa kiểu dữ liệu cho các phần tử HTML
type PageNumberElement = HTMLDivElement;
type PrevAndNextButton = HTMLButtonElement;
type StartButton = HTMLButtonElement;
type EndButton = HTMLButtonElement;

// Lấy các phần tử HTML từ DOM
const pageNumbers = document.querySelectorAll<PageNumberElement>(
  ".pageNumbers .number"
);
const prevAndNextBtn = document.querySelectorAll<PrevAndNextButton>(
  ".container .prevAndNextBtn"
);
const startBtn = document.querySelector<StartButton>(".startBtn");
const endBtn = document.querySelector<EndButton>(".endBtn");

console.log(startBtn, endBtn);

let currentNumber: number = 0;

// Hàm xử lý việc thêm hoặc bỏ đi lớp 'active' cho số trang
const handleActiveNumber = () => {
  pageNumbers.forEach((number, indexNumber) => {
    if (indexNumber === currentNumber) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
  });
};

// Hàm xử lý việc thêm hoặc bỏ đi lớp 'disabled' cho các nút điều hướng
const handleActiveButton = () => {
  if (currentNumber === 0) {
    prevAndNextBtn[0].classList.add("disabled");
    startBtn?.classList.add("disabled");
  } else if (currentNumber === pageNumbers.length - 1) {
    prevAndNextBtn[1].classList.add("disabled");
    endBtn?.classList.add("disabled");
  } else {
    prevAndNextBtn[0].classList.remove("disabled");
    startBtn?.classList.remove("disabled");
    prevAndNextBtn[1].classList.remove("disabled");
    endBtn?.classList.remove("disabled");
  }
};

// Xử lý sự kiện khi người dùng nhấn vào số trang
pageNumbers.forEach((number, indexNumber) => {
  number.addEventListener("click", () => {
    currentNumber = indexNumber;
    const activeNumber = document.querySelector<PageNumberElement>(
      ".pageNumbers .active"
    );
    activeNumber?.classList.remove("active");
    number.classList.add("active");
    handleActiveButton();
  });
});

// Xử lý sự kiện khi người dùng nhấn vào nút trang trước hoặc sau
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

// Xử lý sự kiện khi người dùng nhấn vào nút cuối cùng
endBtn?.addEventListener("click", () => {
  currentNumber = pageNumbers.length - 1;
  handleActiveNumber();
  document.querySelectorAll(".disabled").forEach((button) => {
    button.classList.remove("disabled");
  });
  handleActiveButton();
});

// Xử lý sự kiện khi người dùng nhấn vào nút đầu tiên
startBtn?.addEventListener("click", () => {
  currentNumber = 0;
  handleActiveNumber();
  document.querySelectorAll(".disabled").forEach((button) => {
    button.classList.remove("disabled");
  });
  handleActiveButton();
});
