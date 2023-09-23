const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let xValue = event.clientX - event.target.offsetLeft;
    let yValue = event.clientY - event.target.offsetTop;

    const rippleEffect = document.createElement("p");
    rippleEffect.style.left = `${xValue}px`;
    rippleEffect.style.top = `${yValue}px`;
    button.appendChild(rippleEffect);

    setTimeout(() => {
      button.removeChild(rippleEffect);
    }, 800);
  });
});
