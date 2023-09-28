const customerElements: NodeListOf<Element> = document.querySelectorAll(
  ".container .customer"
);
const sortableContainer: Element | null = document.querySelector(".container");

customerElements.forEach((customerElement: Element) => {
  customerElement.addEventListener("dragstart", (e: Event) => {
    setTimeout(() => {
      customerElement.classList.add("dragging");
    }, 0);
  });

  customerElement.addEventListener("dragend", () => {
    customerElement.classList.remove("dragging");
  });
});

const handleSortableList = (e: DragEvent) => {
  e.preventDefault();

  const draggingCustomer: Element | null =
    sortableContainer?.querySelector(".dragging") ?? null;
  const otherCustomers: Element[] = [
    ...(sortableContainer?.querySelectorAll(".customer:not(.dragging)") || []),
  ];

  const nextCustomer: Element | undefined = otherCustomers.find((customer) => {
    return (
      e.clientY <=
      (customer as HTMLElement).offsetTop +
        (customer as HTMLElement).offsetHeight / 2
    );
  });

  if (draggingCustomer && nextCustomer) {
    sortableContainer?.insertBefore(draggingCustomer, nextCustomer);
  }
};

sortableContainer?.addEventListener("dragover", (e) =>
  handleSortableList(e as DragEvent)
);
sortableContainer?.addEventListener("dragenter", (e) => e.preventDefault());
