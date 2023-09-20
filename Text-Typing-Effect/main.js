const words = ["Fullstack", "Backend", "Fontend", "Mobile"];

const dynamicText = document.querySelector(".typing-text .dynamic-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const TypingText = () => {
  const curremntWord = words[wordIndex];
  const currentChar = curremntWord.substring(0, charIndex);
  dynamicText.classList.add("stop-blinking");

  dynamicText.textContent = currentChar;

  if (!isDeleting && charIndex < curremntWord.length) {
    charIndex++;
    setTimeout(TypingText, 200);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(TypingText, 100);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    dynamicText.classList.remove("stop-blinking");
    setTimeout(TypingText, 1200);
  }
};

TypingText();
