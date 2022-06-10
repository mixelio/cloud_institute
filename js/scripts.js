"use strict";

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 41,
  centerInsufficientSlides: true,
  centeredSlides: true,
  initialSlide: 1,
  scroll: EventTarget,
});

window.addEventListener('scroll', () => {
  let scrollDisatnce = window.scrollY;
  let screenHeight = window.innerHeight;
  let animateItems = document.querySelectorAll('._anim-items');
  let fixedElement = document.querySelectorAll('.fixed_container');
  let header = document.querySelectorAll('.header');
  let fixedLogo = document.querySelectorAll('.fixed_logo');

  if ((scrollDisatnce / (screenHeight * 2)) >= 0.1) {
    animateItems[4].classList.add('_active');
  } else {
    animateItems[4].classList.remove('_active');
  }
  if ((scrollDisatnce / (screenHeight * 2)) >= 0.2) {
    animateItems[0].classList.add('_active');
  } else {
    animateItems[0].classList.remove('_active');
  }
  if ((scrollDisatnce / (screenHeight * 2)) >= 0.3) {
    animateItems[1].classList.add('_active');
  } else {
    animateItems[1].classList.remove('_active');
  }
  if ((scrollDisatnce / (screenHeight * 2)) >= 0.45) {
    animateItems[2].classList.add('_active');
    animateItems[3].classList.add('_active');
  } else {
    animateItems[2].classList.remove('_active');
    animateItems[3].classList.remove('_active');
  }
  if ((scrollDisatnce / (screenHeight * 2)) >= 0.55) {
    animateItems[4].classList.add('_position');
  } else {
    animateItems[4].classList.remove('_position');
  }
  if ((scrollDisatnce / (screenHeight * 2)) >= 0.65) {
    fixedElement[0].classList.add('_unfixed');
  } else {
    fixedElement[0].classList.remove('_unfixed');
  }
  if ((scrollDisatnce / (screenHeight * 2)) >= 1.05) {
    header[0].classList.add('_close');
  } else {
    header[0].classList.remove('_close');
  }
})

