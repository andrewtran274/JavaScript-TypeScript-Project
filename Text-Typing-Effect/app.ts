const words: string[] = ["Fullstack", "Fontend", "Backend", "Mobile"];

const dynamicTextElement = document.querySelector(
  ".typing-text .dynamic-text"
) as HTMLElement;

let wordIndex: number = 0;
let charIndex: number = 0;
let isDeleting: boolean = false;

const typeText = (): void => {
  const currentWord: string = words[wordIndex];
  const currentChar: string = currentWord.substring(0, charIndex);

  dynamicTextElement.classList.add("stop-blinking");

  dynamicTextElement.textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeText, 200);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeText, 100);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    dynamicTextElement.classList.remove("stop-blinking");
    setTimeout(typeText, 1200);
  }
};
typeText();
