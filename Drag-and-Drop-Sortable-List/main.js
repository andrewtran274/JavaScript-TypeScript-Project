const customerElements = document.querySelectorAll(".container .customer");
const sortableContainer = document.querySelector(".container");
customerElements.forEach((customerElement) => {
  customerElement.addEventListener("dragstart", (e) => {
    setTimeout(() => {
      customerElement.classList.add("dragging");
    }, 0);
  });

  customerElement.addEventListener("dragend", () => {
    customerElement.classList.remove("dragging");
  });
});

const handleSortableList = (e) => {
  e.preventDefault();

  const draggingCustomer = sortableContainer.querySelector(".dragging");
  const otherCustomers = [
    ...sortableContainer.querySelectorAll(".customer:not(.dragging)"),
  ];

  const nextCustomer = otherCustomers.find((customer) => {
    return e.clientY <= customer.offsetTop + customer.offsetHeight / 2;
  });

  sortableContainer.insertBefore(draggingCustomer, nextCustomer);
};

sortableContainer.addEventListener("dragover", handleSortableList);
sortableContainer.addEventListener("dragenter", (e) => e.preventDefault());
