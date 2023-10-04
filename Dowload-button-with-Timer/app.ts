const downloadButton: HTMLButtonElement | null =
  document.querySelector("button");

const fileDownloadLink: string =
  "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";

if (downloadButton) {
  downloadButton.addEventListener("click", () => {
    if (downloadButton.classList.contains("active")) {
      location.href = fileDownloadLink;
      return;
    }

    const countdownAttribute: string | null =
      downloadButton.getAttribute("data-time");

    if (!countdownAttribute) {
      return;
    }

    let countdown: number = parseInt(countdownAttribute, 10);

    if (isNaN(countdown)) {
      return;
    }

    downloadButton.classList.add("hiddenButton");
    downloadButton.innerHTML = `<p>Your file will download in <span style="color:  rgb(63, 124, 254);">${countdown}</span> seconds</p>`;
    const intervalID = setInterval(() => {
      if (countdown > 0) {
        countdown--;
        downloadButton.innerHTML = `<p>Your file will download in <span style="color:  rgb(63, 124, 254);">${countdown}</span> seconds</p>`;
      } else {
        clearInterval(intervalID);

        downloadButton.innerHTML = `<p>Your file is downloading...</p>`;
        location.href = fileDownloadLink;

        setTimeout(() => {
          downloadButton.classList.remove("hiddenButton");
          downloadButton.classList.add("active");
          downloadButton.innerHTML = `
              <ion-icon name="cloud-download-outline"></ion-icon>
              <span class="text">Download Again</span>
            `;
        }, 3000);
      }
    }, 1000);
  });
}
