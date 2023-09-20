const selectMenus: NodeListOf<HTMLSelectElement> =
  document.querySelectorAll(".wrapper select");
const currentTime: HTMLHeadingElement | null =
  document.querySelector(".wrapper h1");
const buttonSetAlarm: HTMLButtonElement | null =
  document.querySelector(".wrapper button");
const inputTimeElement: HTMLElement | null =
  document.querySelector(".wrapper .content");

function populateSelectOptions(
  selectElement: HTMLSelectElement,
  start: number,
  end: number,
  step: number = 1,
  isAMPM: boolean = false
): void {
  for (let i = start; i > end; i -= step) {
    const formattedValue: string = i < 10 ? "0" + i.toString() : i.toString();
    const optionElement: HTMLOptionElement = document.createElement("option");
    optionElement.value = formattedValue;
    optionElement.textContent = formattedValue;
    selectElement.appendChild(optionElement);
  }

  if (isAMPM) {
    const amOption: HTMLOptionElement = document.createElement("option");
    const pmOption: HTMLOptionElement = document.createElement("option");
    amOption.value = "AM";
    amOption.textContent = "AM";
    pmOption.value = "PM";
    pmOption.textContent = "PM";
    selectElement.appendChild(amOption);
    selectElement.appendChild(pmOption);
  }
}

populateSelectOptions(selectMenus[0], 12, 1);
populateSelectOptions(selectMenus[1], 59, 1);
populateSelectOptions(selectMenus[2], 2, 1, 1, true);

let alarmTime: string | undefined;
let isAlarmSet: boolean = false;
const ringtone: HTMLAudioElement = new Audio("./Assets/ringtone.mp3");

setInterval(() => {
  const date: Date = new Date();
  let h: number = date.getHours();
  const m: number = date.getMinutes();
  const s: number = date.getSeconds();
  let ampm: string = "AM";

  if (h >= 12) {
    ampm = "PM";
    h -= 12;
  }

  h = h === 0 ? 12 : h;
  const formattedH: string = h < 10 ? "0" + h.toString() : h.toString();
  const formattedM: string = m < 10 ? "0" + m.toString() : m.toString();
  const formattedS: string = s < 10 ? "0" + s.toString() : s.toString();

  if (currentTime) {
    currentTime.innerText = `${formattedH}:${formattedM}:${formattedS} ${ampm}`;
  }

  if (alarmTime === `${formattedH}:${formattedM} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);

function setAlarm(): void {
  if (isAlarmSet && inputTimeElement && buttonSetAlarm) {
    alarmTime = undefined;
    ringtone.pause();
    inputTimeElement.classList.remove("disable");
    buttonSetAlarm.innerText = "Set Alarm";
    isAlarmSet = false;
    return;
  }

  if (
    selectMenus[0].value === "Hour" ||
    selectMenus[1].value === "Minute" ||
    selectMenus[2].value === "AM/PM"
  ) {
    alert("Vui Lòng Nhập Đầy Đủ Thông Tin!");
    return;
  }

  const time: string = `${selectMenus[0].value}:${selectMenus[1].value} ${selectMenus[2].value}`;
  alarmTime = time;
  isAlarmSet = true;
  if (inputTimeElement && buttonSetAlarm) {
    inputTimeElement.classList.add("disable");
    buttonSetAlarm.innerText = "Clear Alarm";
  }
}

buttonSetAlarm?.addEventListener("click", setAlarm);
