import '../node_modules/modern-normalize';
import './sass/main.scss';

const body = document.body;

const slides = document.querySelectorAll('.slide');
console.log(slides);
const leftArrowButton = document.querySelector('.left-arrow');
const rightArrowButton = document.querySelector('.right-arrow');

let activeSlide = 0;

rightArrowButton.addEventListener('click', increaseActiveSlide);
leftArrowButton.addEventListener('click', decreaseActiveSlide);

function increaseActiveSlide() {
  activeSlide += 1;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setActiveSlide();
  localStorage.setItem('activeSlide', activeSlide);
}

function decreaseActiveSlide() {
  activeSlide -= 1;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setActiveSlide();
  localStorage.setItem('activeSlide', activeSlide);
}

function setActiveSlide() {
  slides.forEach(slide => slide.classList.remove('slide-active'));
  slides[activeSlide].classList.add('slide-active');
}
