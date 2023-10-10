const button = document.querySelector(".btn");
const qrImage = document.querySelector(".qrcode img");
const inputText = document.querySelector(".container input");

button.addEventListener("click", () => {
  const text = inputText.value;
  if (text === "") return;
  const linkQR = "https://api.qrserver.com/v1/create-qr-code/";
  qrImage.src = `${linkQR}?size=360x360&data=${text}`;

  inputText.value = "";
});
