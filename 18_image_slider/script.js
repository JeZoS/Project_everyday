const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");

let active = 0;

setBgtoBody();

function setBgtoBody() {
  body.style.backgroundImage = slides[active].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[active].classList.add("active");
}

leftbtn.addEventListener("click", () => {
  active--;
  if (active < 0) {
    active = slides.length - 1;
  }
  setBgtoBody();
  setActiveSlide();
});

rightbtn.addEventListener("click", () => {
  active++;
  if (active > slides.length - 1) {
    active = 0;
  }
  setBgtoBody();
  setActiveSlide();
});
