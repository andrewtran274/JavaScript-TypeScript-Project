const requirementItems = document.querySelectorAll(".container .check-list li");

const passwordInput = document.querySelector(".container .input-password");

const passwordRequirements = [
  { regex: /.{8,}/, index: 0 },
  { regex: /[0-9]/, index: 1 },
  { regex: /[a-z]/, index: 2 },
  { regex: /[^A-Za-z0-9]/, index: 3 },
  { regex: /[A-Z]/, index: 4 },
];

passwordInput.addEventListener("keyup", (e) => {
  passwordRequirements.forEach((item) => {
    const isValid = item.regex.test(e.target.value);
    const requirementItem = requirementItems[item.index];

    if (isValid) {
      requirementItem.classList.add("active");
    } else {
      requirementItem.classList.remove("active");
    }
  });
});
