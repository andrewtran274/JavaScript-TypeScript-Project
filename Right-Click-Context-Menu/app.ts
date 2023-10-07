const contextMenu: HTMLElement | null =
  document.querySelector(".customContextMenu");
const submenu: HTMLElement | null = document.querySelector(
  ".customContextMenu .submenu"
);

document.addEventListener("contextmenu", (e: MouseEvent) => {
  e.preventDefault();
  const x: number = e.offsetX;
  const y: number = e.offsetY;

  const maxValueX: number = window.innerWidth - (contextMenu?.offsetWidth || 0);
  const maxValueY: number =
    window.innerHeight - (contextMenu?.offsetHeight || 0);
  console.log(maxValueX, maxValueY);

  const adjustedX: number = x >= maxValueX ? maxValueX - 10 : x;
  const adjustedY: number = y >= maxValueY ? maxValueY - 10 : y;
  if (contextMenu) {
    contextMenu.style.visibility = "visible";
    contextMenu.style.left = `${adjustedX}px`;
    contextMenu.style.top = `${adjustedY}px`;

    const maxContextMenu: number =
      (contextMenu?.offsetWidth || 0) + (submenu?.offsetWidth || 0);

    if (adjustedX >= window.innerWidth - maxContextMenu) {
      if (submenu) {
        submenu.style.right = "unset";
        submenu.style.left = "-200px";
      }
    } else {
      if (submenu) {
        submenu.style.left = "unset";
        submenu.style.right = "-200px";
      }
    }
  }
});

document.addEventListener("click", () => {
  if (contextMenu) {
    contextMenu.style.visibility = "hidden";
  }
});
