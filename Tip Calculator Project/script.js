const billAmount = document.querySelector("#bill");
const tipAmount = document.querySelector("#tip");
const totalAmount = document.querySelector("#total");
const totalBtn = document.querySelector("#calculate");

totalBtn.addEventListener("click", function () {
  const billValue = parseFloat(billAmount.value);
  const tipValue = parseFloat(tipAmount.value);

  if (isNaN(billValue) || billValue <= 0) {
    totalAmount.innerHTML = "Please enter a valid bill amount";
    return;
  }

  if (isNaN(tipValue) || tipValue < 0) {
    totalAmount.innerHTML = "Please enter a valid tip percentage";
    return;
  }

  const totalValue = billValue * (1 + tipValue / 100);
  totalAmount.innerHTML = totalValue.toFixed(2);
});
