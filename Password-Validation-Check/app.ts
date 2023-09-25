const requirementItems: NodeListOf<HTMLLIElement> = document.querySelectorAll(
  ".container .check-list li"
);

const passwordInput: HTMLInputElement | null = document.querySelector(
  ".container .input-password"
);

const passwordRequirements: { regex: RegExp; index: number }[] = [
  { regex: /.{8,}/, index: 0 },
  { regex: /[0-9]/, index: 1 },
  { regex: /[a-z]/, index: 2 },
  { regex: /[^A-Za-z0-9]/, index: 3 },
  { regex: /[A-Z]/, index: 4 },
];

if (passwordInput) {
  passwordInput.addEventListener("keyup", (e: KeyboardEvent) => {
    passwordRequirements.forEach((requirement) => {
      const isValid: boolean = requirement.regex.test(
        (e.target as HTMLInputElement).value
      );
      const requirementItem: HTMLLIElement =
        requirementItems[requirement.index];

      if (isValid) {
        requirementItem.classList.add("active");
      } else {
        requirementItem.classList.remove("active");
      }
    });
  });
}
