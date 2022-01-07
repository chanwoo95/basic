const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const setHand = () => {
  const time = new Date();

  const hours = time.getHours();
  const hoursDegrees = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const minutes = time.getMinutes();
  const minutesDegrees = (minutes / 60) * 360;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const seconds = time.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
};

const getTime = () => {
  const time = new Date();
  let hours = time.getHours();
  let hoursForClock = hours >= 13 ? hours % 12 : hours;
  let month = time.getMonth();
  let day = time.getDay();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  const ampm = hours < 12 ? "AM" : "PM";

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  timeEl.textContent = `${hoursForClock}:${minutes} ${ampm}`;
  dateEl.textContent = `${days[day]}, ${months[month]}, ${day}`;

  document.querySelector(".hours").textContent = hours;
  document.querySelector(".minutes").textContent = minutes;
  document.querySelector(".seconds").textContent = seconds;
  document.querySelector(".ampm").textContent = ampm;
};

getTime();

setInterval(setHand, 0);
setInterval(getTime, 1000);
