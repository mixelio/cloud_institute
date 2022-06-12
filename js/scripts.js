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

function intro() {
  let animateItems = document.querySelectorAll('._anim-items');
  let i = 0;
  setInterval(function () {
    if (i < animateItems.length)
      animateItems[i].classList.add('_active');
    i++;
  },
    800);
}

intro();

window.addEventListener('scroll', () => {
  let scrollDisatnce = window.scrollY;
  let screenHeight = window.innerHeight;
  let header = document.querySelectorAll('.header');
  let fixedLogo = document.querySelectorAll('.fixed_logo');

  if ((scrollDisatnce / (screenHeight * 2)) >= 0.48) {
    header[0].classList.add('_close');
    fixedLogo[0].classList.add('_active');
  } else {
    header[0].classList.remove('_close');
    fixedLogo[0].classList.remove('_active');
  }
})

