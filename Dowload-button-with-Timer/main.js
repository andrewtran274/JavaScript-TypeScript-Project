const downloadButton = document.querySelector(".button");

const fileDownloadLink =
  "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";

downloadButton.addEventListener("click", (e) => {
  if (downloadButton.classList.contains("active")) {
    return (location.href = fileDownloadLink);
  }
  let countdown = downloadButton.dataset.time;

  downloadButton.classList.add("hiddenButton");
  downloadButton.innerHTML = `<p>Your file will download in <span style="color:  rgb(63, 124, 254);">${countdown}</span> seconds</p>`;

  const intervalID = setInterval(() => {
    if (countdown > 0) {
      countdown--;
      return (downloadButton.innerHTML = `<p>Your file will dowload in <span style="color:  rgb(63, 124, 254);">${countdown}</span> seconds</p>`);
    }
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
  }, 1000);
});
