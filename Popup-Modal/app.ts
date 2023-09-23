const openPopupButton: HTMLElement | null = document.querySelector(
  ".wrapper .buttonShow"
);
const overlay: HTMLElement | null = document.querySelector(".wrapper .overlay");
const popupModal: HTMLElement | null = document.querySelector(
  ".wrapper .popup-modal"
);
const closePopupButton: HTMLElement | null =
  document.querySelector(".close-popup");

function openPopup() {
  if (overlay && openPopupButton && popupModal) {
    overlay.classList.add("active");
    openPopupButton.classList.add("active");
    popupModal.classList.add("active");
  }
}

function closePopup() {
  if (overlay && openPopupButton && popupModal) {
    overlay.classList.remove("active");
    openPopupButton.classList.remove("active");
    popupModal.classList.remove("active");
  }
}

if (openPopupButton) {
  openPopupButton.addEventListener("click", openPopup);
}

if (closePopupButton) {
  closePopupButton.addEventListener("click", closePopup);
}

if (overlay) {
  overlay.addEventListener("click", closePopup);
}
