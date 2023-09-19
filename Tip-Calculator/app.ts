const billAmount: HTMLInputElement | null =
  document.querySelector("#bill-amount");
const tipRate: HTMLInputElement | null =
  document.querySelector("#tip-percentage");
const calculateButton: HTMLButtonElement | null =
  document.querySelector(".button");
const total: HTMLDivElement | null = document.querySelector(".result");

function CalculatorTotal(): void {
  if (
    billAmount === null ||
    tipRate === null ||
    calculateButton === null ||
    total === null
  ) {
    return;
  }

  const billValue: number = parseFloat(billAmount.value) || 0;
  const tipValue: number = parseFloat(tipRate.value) || 0;
  const totalValue: number = billValue * (1 + tipValue / 100);
  if (total) {
    total.innerText = `$${totalValue.toFixed(2)}`;
  }
}

if (calculateButton) {
  calculateButton.addEventListener("click", CalculatorTotal);
}
