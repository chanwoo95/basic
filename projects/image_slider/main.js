const leftBtn = document.querySelector(".left--button");
const rightBtn = document.querySelector(".right--button");
const imgs = document.querySelector(".cards");
const allImgs = document.querySelectorAll("#imgs .img");

let index = 0;

let interval = setInterval(() => run(), 2000);

const run = () => {
  index++;
  changeImg();
};

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(() => run(), 2000);
};

const changeImg = () => {
  if (index > allImgs.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = allImgs.length - 1;
  }

  imgs.style.transform = `translateX(${-index * 500}px)`;
};

leftBtn.addEventListener("click", () => {
  index--;
  changeImg();
  resetInterval();
});

rightBtn.addEventListener("click", () => {
  index++;
  changeImg();
  resetInterval();
});
