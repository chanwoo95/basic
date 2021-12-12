const container = document.querySelector(".container");
const modeBtn = document.querySelector("#mode--btn");

modeBtn.addEventListener("click", handleBtn);

function handleBtn() {
  if (container.classList.contains("dark")) {
    container.classList.remove("dark");
    modeBtn.textContent = "Dark";
  } else {
    container.classList.add("dark");
    modeBtn.textContent = "White";
  }
}
