const leftBtn = document.querySelector(".left--button");
const rightBtn = document.querySelector(".right--button");
const progress = document.querySelector(".progress--bar");
const steps = document.querySelectorAll(".step");

let currentIdx = 1;

function update() {
  steps.forEach((step, index) => {
    if (index < currentIdx) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (steps.length - 1)) * 100 + "%";

  if (currentIdx === 1) {
    leftBtn.disabled = true;
  } else if (currentIdx === steps.length) {
    rightBtn.disabled = true;
  } else {
    leftBtn.disabled = false;
    rightBtn.disabled = false;
  }
}

rightBtn.addEventListener("click", () => {
  currentIdx++;

  if (currentIdx > steps.length) {
    currentIdx = steps.length;
  }
  update();
});

leftBtn.addEventListener("click", () => {
  currentIdx--;

  if (currentIdx < 1) {
    currentIdx = 1;
  }
  update();
});
