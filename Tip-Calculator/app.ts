const billAmount: HTMLInputElement | undefined =
  document.querySelector("#bill-amount");
const tipRate: HTMLInputElement | undefined =
  document.querySelector("#tip-percentage");
const calculateButton: HTMLButtonElement | undefined =
  document.querySelector(".button");
const total: HTMLDivElement | undefined = document.querySelector(".result");

function CalculatorTotal(): void {
  if (
    billAmount === undefined ||
    tipRate === undefined ||
    calculateButton === undefined ||
    total === undefined
  ) {
    return;
  }

  const billValue: number = billAmount.value;
  const tipValue: number = tipRate.value;
  const totalValue: number = billValue * (1 + tipValue / 100);
  total.innerText = `$${totalValue.toFixed(2)}`;
}

calculateButton?.addEventListener("click", CalculatorTotal);
