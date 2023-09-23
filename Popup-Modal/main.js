const buttonShowPopup = document.querySelector(".wrapper .buttonShow");
const overlay = document.querySelector(".wrapper .ovelay");
const popupModal = document.querySelector(".wrapper .popup-modal");

const buttonClosePopup = document.querySelector(".close-popup");

buttonShowPopup.addEventListener("click", () => {
  overlay.classList.add("active");
  buttonShowPopup.classList.add("active");
  popupModal.classList.add("active");
});

buttonClosePopup.addEventListener("click", () => {
  overlay.classList.remove("active");
  buttonShowPopup.classList.remove("active");
  popupModal.classList.remove("active");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  buttonShowPopup.classList.remove("active");
  popupModal.classList.remove("active");
});
