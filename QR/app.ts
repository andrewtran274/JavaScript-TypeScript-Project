const button = document.querySelector<HTMLButtonElement>(".btn");
const qrImage = document.querySelector<HTMLImageElement>(".qrcode img");
const inputText = document.querySelector<HTMLInputElement>(".container input");

if (button && qrImage && inputText) {
  button.addEventListener("click", () => {
    const text = inputText.value;
    if (text === "") return;
    const linkQR = "https://api.qrserver.com/v1/create-qr-code/";
    qrImage.src = `${linkQR}?size=360x360&data=${text}`;

    inputText.value = "";
  });
}
