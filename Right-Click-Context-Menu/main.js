const contextMenu = document.querySelector(".customContextMenu");
const submenu = document.querySelector(".customContextMenu .submenu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let x = e.offsetX;
  let y = e.offsetY;

  let maxValueX = window.innerWidth - contextMenu.offsetWidth;
  let maxValueY = window.innerHeight - contextMenu.offsetHeight;
  console.log(maxValueX, maxValueY);

  x = x >= maxValueX ? maxValueX - 10 : x;
  y = y >= maxValueY ? maxValueY - 10 : y;
  contextMenu.style.visibility = "visible";
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;

  let maxContextMenu = contextMenu.offsetWidth + submenu.offsetWidth;

  if (x >= window.innerWidth - maxContextMenu) {
    submenu.style.right = `unset`;
    submenu.style.left = `-200px`;
  } else {
    submenu.style.left = `unset`;
    submenu.style.right = `-200px`;
  }
});

document.addEventListener("click", () => {
  contextMenu.style.visibility = "hidden";
});
