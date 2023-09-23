const buttons = document.querySelectorAll(".wrapper .group-btn .btn");
const notifications = document.querySelector(".wrapper .toast-notification");

const dataToast = {
  Success: {
    icon: "checkmark-outline",
    text: "Success: This is a success toast.",
  },
  Error: {
    icon: "bug-outline",
    text: "Error: This is a error toast.",
  },
  Warning: {
    icon: "alert-outline",
    text: "Warning: This is a warning toast.",
  },
  Info: {
    icon: "information-outline",
    text: "Info: This is a infomation toast.",
  },
};
const handleRemoveChildToast = (toast) => {
  toast.classList.add("closed");
  if (toast.timer) {
    clearTimeout(toast.timer);
  }
  setTimeout(() => {
    notifications.removeChild(toast);
  }, 700);
};

const handleClickButton = (id) => {
  const { icon, text } = dataToast[id];

  const toastElement = document.createElement("div");

  toastElement.innerHTML = `<div class="toast-icon"><ion-icon name="${icon}"></ion-icon></div>
                            <div class="toast-text">${text}</div>
                            <div class="toast-btn-closed" onclick="handleRemoveChildToast(this.parentElement)">
                               <i class="bx bx-x"></i>
                            </div>`;
  toastElement.setAttribute("class", `toast ${id}`);

  notifications.appendChild(toastElement);

  toastElement.timer = setTimeout(() => {
    handleRemoveChildToast(toastElement);
  }, 5000);
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleClickButton(button.id);
  });
});
