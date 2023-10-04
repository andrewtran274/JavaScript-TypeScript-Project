const buttonDowload = document.querySelector(".button");

const fileLink =
  "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";

buttonDowload.addEventListener("click", (e) => {
  if (buttonDowload.classList.contains("active")) {
    return (location.href = fileLink);
  }
  let timer = buttonDowload.dataset.time;

  buttonDowload.classList.add("hiddenButton");
  buttonDowload.innerHTML = `<p>Your file will download in <span style="color:  rgb(63, 124, 254);">${timer}</span> seconds</p>`;

  const intervalID = setInterval(() => {
    if (timer > 0) {
      timer--;
      return (buttonDowload.innerHTML = `<p>Your file will dowload in <span style="color:  rgb(63, 124, 254);">${timer}</span> seconds</p>`);
    }
    clearInterval(intervalID);

    buttonDowload.innerHTML = `<p>Your file is downloading...</p>`;
    location.href = fileLink;
    setTimeout(() => {
      buttonDowload.classList.remove("hiddenButton");
      buttonDowload.classList.add("active");
      buttonDowload.innerHTML = `
                                <ion-icon name="cloud-download-outline"></ion-icon>
                                <span class="text">Download Again</span>
                                `;
    }, 3000);
  }, 1000);
});
