const buttons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event: MouseEvent) => {
    let xValue: number =
      event.clientX - (event.target as HTMLElement).offsetLeft;
    let yValue: number =
      event.clientY - (event.target as HTMLElement).offsetTop;

    const rippleEffect: HTMLSpanElement = document.createElement("span");
    rippleEffect.style.left = `${xValue}px`;
    rippleEffect.style.top = `${yValue}px`;
    button.appendChild(rippleEffect);

    setTimeout(() => {
      button.removeChild(rippleEffect);
    }, 800);
  });
});
