const buttons = document.querySelectorAll<HTMLButtonElement>(
  ".wrapper .group-btn .btn"
);
const notifications = document.querySelector<HTMLElement>(
  ".wrapper .toast-notification"
);

interface ToastData {
  [key: string]: {
    icon: string;
    text: string;
  };
}

const toastData: ToastData = {
  Success: {
    icon: "checkmark-outline",
    text: "Success: This is a success toast.",
  },
  Error: {
    icon: "bug-outline",
    text: "Error: This is an error toast.",
  },
  Warning: {
    icon: "alert-outline",
    text: "Warning: This is a warning toast.",
  },
  Info: {
    icon: "information-outline",
    text: "Info: This is an information toast.",
  },
};

const removeToast = (toast: HTMLElement) => {
  toast.classList.add("closed");
  const timer = toast.getAttribute("data-timer");
  if (timer) {
    clearTimeout(parseInt(timer, 10));
  }
  setTimeout(() => {
    notifications?.removeChild(toast);
  }, 700);
};

const handleButtonClick = (id: string) => {
  const { icon, text } = toastData[id];

  const toastElement = document.createElement("div");

  toastElement.innerHTML = `<div class="toast-icon"><ion-icon name="${icon}"></ion-icon></div>
                              <div class="toast-text">${text}</div>
                              <div class="toast-btn-closed">
                                 <i class="bx bx-x"></i>
                              </div>`;
  toastElement.setAttribute("class", `toast ${id}`);
  toastElement.setAttribute("data-timer", "");

  notifications?.appendChild(toastElement);

  const timer = setTimeout(() => {
    removeToast(toastElement);
  }, 5000);
  toastElement.setAttribute("data-timer", timer.toString());
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleButtonClick(button.id);
  });
});
