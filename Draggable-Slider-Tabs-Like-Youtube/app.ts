const tabsBox = document.querySelector(".tags") as HTMLDivElement;
const allTabs = tabsBox.querySelectorAll(
  ".tag-item"
) as NodeListOf<HTMLDivElement>;
const arrowIcons = document.querySelectorAll(
  ".icon i"
) as NodeListOf<HTMLElement>;
let isDragging = false;

const handleIcons = (scrollVal: number) => {
  const maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement!.style.display = scrollVal <= 0 ? "none" : "flex";
  arrowIcons[1].parentElement!.style.display =
    maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
    const scrollWidth = (tabsBox.scrollLeft += icon.id === "left" ? -340 : 340);
    handleIcons(scrollWidth);
  });
});

allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabsBox.querySelector(".active")?.classList.remove("active");
    tab.classList.add("active");
  });
});

const dragging = (e: MouseEvent) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
  handleIcons(tabsBox.scrollLeft);
};

const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("mousedown", () => (isDragging = true));
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
