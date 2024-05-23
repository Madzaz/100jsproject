const birthdayEl = document.querySelector("#birthday");
const calculateBtn = document.querySelector("#btn");
const result = document.querySelector("#result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    result.textContent = "Please enter your birthday";
    result.style.color = "red";
  } else {
    const age = getAge(birthdayValue);
    if (age < 0) {
      result.textContent = "Birthday cannot be in the future";
      result.style.color = "red";
    } else {
      result.textContent = `Your age is ${age} ${
        age > 0 ? "years" : "year"
      } old`;
      result.style.color = "black";
    }
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

calculateBtn.addEventListener("click", calculateAge);
