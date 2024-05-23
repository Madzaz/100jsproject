const buttons = document.querySelectorAll(".button");
const tabs = document.querySelectorAll(".content");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const stepId = this.getAttribute("data-id");

    buttons.forEach((button) => button.classList.remove("live"));
    tabs.forEach((tab) => tab.classList.remove("live"));

    this.classList.add("live");
    document.getElementById(stepId).classList.add("live");
  });
});
