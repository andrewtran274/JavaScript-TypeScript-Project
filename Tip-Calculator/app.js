var billAmount = document.querySelector("#bill-amount");
var tipRate = document.querySelector("#tip-percentage");
var calculateButton = document.querySelector(".button");
var total = document.querySelector(".result");

function CalculatorTotal() {
  if (
    billAmount === undefined ||
    tipRate === undefined ||
    calculateButton === undefined ||
    total === undefined
  ) {
    return;
  }
  var billValue = billAmount.value;
  var tipValue = tipRate.value;
  var totalValue = billValue * (1 + tipValue / 100);
  total.innerText = "$".concat(totalValue.toFixed(2));
}
calculateButton === null || calculateButton === void 0
  ? void 0
  : calculateButton.addEventListener("click", CalculatorTotal);
