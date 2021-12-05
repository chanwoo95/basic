const button = document.querySelector(".button");
const container = document.querySelector(".container");
const box = document.querySelector(".box");
const box2 = document.querySelector(".box2");

button.addEventListener("click", handleBtn);

let btn = false;

function handleBtn() {
  container.classList.toggle("dark");
  box.classList.toggle("dark");
  box2.classList.toggle("dark");
  if (btn === false) {
    button.textContent = "Dark Off";
  } else {
    button.textContent = "Dark On";
  }
  btn = !btn;
}
