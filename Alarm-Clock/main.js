const selectMenu = document.querySelectorAll(".wrapper select");
const currentTime = document.querySelector(".wrapper h1");
const buttonSetAlarm = document.querySelector(".wrapper button");
const inputTimeElement = document.querySelector(".wrapper .content");
for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let optionElement = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", optionElement);
}

for (let i = 59; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let optionElement = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", optionElement);
}

for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let optionElement = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", optionElement);
}
let alarmTime;
let isAlarmSet = false;
let ringtone = new Audio("./Assets/ringtone.mp3");

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = "AM";
  if (h >= 12) {
    ampm = "PM";
    h = h - 12;
  }

  h = h == 0 ? h == 12 : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

  console.log(alarmTime + " " + `${h}:${m} ${ampm}`);

  if (alarmTime === `${h}:${m} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);

function setAlarm() {
  if (isAlarmSet) {
    alarmTime = "";
    ringtone.pause();
    inputTimeElement.classList.remove("disable");
    buttonSetAlarm.innerText = "Set Alarm";
    return (isAlarmSet = false);
  }

  if (
    selectMenu[0].value === "Hour" ||
    selectMenu[1].value === "Minute" ||
    selectMenu[2].value === "AM/PM"
  ) {
    return alert("Vui Lòng Nhập Đầy Đủ Thông Tin!");
  }

  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
  alarmTime = time;
  isAlarmSet = !isAlarmSet;
  inputTimeElement.classList.add("disable");
  buttonSetAlarm.innerText = "Clear Alarm";
}

buttonSetAlarm.addEventListener("click", setAlarm);
