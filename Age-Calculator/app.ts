const inputDateOfBirth: HTMLInputElement | null =
  document.querySelector("#dateOfBirth");

const calculateButton: HTMLButtonElement | null =
  document.querySelector(".calculatorButton");

const resultElement: HTMLElement | null = document.querySelector(".result");

function CalculatorAge(): void {
  if (inputDateOfBirth?.value === "") {
    alert("Please enter your birthday");
  } else {
    const ageValue: number = GetAge(inputDateOfBirth?.value || "");
    if (resultElement) {
      resultElement.innerText = `Your age is ${ageValue} ${
        ageValue > 1 ? "years" : "year"
      }`;
    }
  }
}

function GetAge(dateOfBirth: string): number {
  const currentDate: Date = new Date();
  const birthdayDate: Date = new Date(dateOfBirth);

  let age: number = currentDate.getFullYear() - birthdayDate.getFullYear();
  const monthDiff: number = currentDate.getMonth() - birthdayDate.getMonth();
  const dayDiff: number = currentDate.getDay() - birthdayDate.getDay();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}
