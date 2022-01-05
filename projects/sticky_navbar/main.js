const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
const navToggleBtn = document.querySelector(".navbar--toggle");
const fas = document.querySelector(".fas");
const navMenu = document.querySelector(".menu");

document.addEventListener("scroll", () => {
  console.log(navHeight);
  if (window.scrollY > navHeight) {
    nav.classList.add("active");
    navToggleBtn.style.padding = "0.5em";
    fas.style.color = "black";
  } else {
    nav.classList.remove("active");
    navToggleBtn.style.padding = "0em";

    fas.style.color = "white";
  }
});

navToggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
