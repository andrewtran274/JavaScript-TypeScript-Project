const inputDateOfBirth = document.querySelector("#dateOfBirth");
const calculateButton = document.querySelector(".calculatorButton");
const resultElement = document.querySelector(".result");

function CalculatorAge() {
  if (inputDateOfBirth.value === "") {
    alert("Please enter your birthday");
  } else {
    const ageValue = GetAge(inputDateOfBirth.value);
    resultElement.innerText = `Your age is ${ageValue} ${
      ageValue > 1 ? "years" : "year"
    } old`;
  }
}

function GetAge(dateOfBirth) {
  const currentDate = new Date();
  const birthdayDate = new Date(dateOfBirth);

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthdayDate.getMonth();
  const dayDiff = currentDate.getDay() - birthdayDate.getDate();

  if (monthDiff < 0 || (monthDiff == 0 && dayDiff < 0)) {
    age--;
  }
  return age;
}

calculateButton.addEventListener("click", CalculatorAge);
