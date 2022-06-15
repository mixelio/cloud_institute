"use strict";

const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 41,
  centerInsufficientSlides: true,
  // centeredSlides: true,
  initialSlide: 0,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 21,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 21,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 13,
    }
  },
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
  let screenWidth = window.innerWidth;
  let header = document.querySelectorAll('.header');
  let fixedLogo = document.querySelectorAll('.fixed_logo');

  if (((scrollDisatnce / (screenHeight * 2)) >= 0.48) && screenWidth > 950) {
    header[0].classList.add('_close');
    fixedLogo[0].classList.add('_active');
  } else {
    header[0].classList.remove('_close');
    fixedLogo[0].classList.remove('_active');
  }
})

const iconMenu = document.querySelector(".menu_icon");
const menuBody = document.querySelector(".burger_menu");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
