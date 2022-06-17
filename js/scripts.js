"use strict";

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  spaceBetween: 20,
  slidesPerView: 3,
  centerInsufficientSlides: true,
  centeredSlides: true,
  initialSlide: 1,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    400: {
      slidesPerView: 1,

    }
  }
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


$(function () {
  // открываем вкладку по умолчанию
  $(".active__item .spoller__text").slideDown();

  $("#accordion .spoller__title").on("click", function () {
    $("#accordion .spoller__text").not($(this).next()).slideUp(299);

    $(".reasons__spoller_item").removeClass("active__item");
    $(this).next().slideDown(299).parent().addClass("active__item");
  });
});


function accordion() {
  const accordion = document.querySelectorAll('.reasons__mobile_list');
  const accord = document.querySelectorAll('.reasons__mobile_item');
  if (accord.length > 0) {
    for (let i = 0; i < accord.length; i++) {
      accord[i].addEventListener('click', function (e) {
        for (let j = 0; j < accord.length; j++) {
          if (accord[j].classList.contains('_active')) {
            accord[j].classList.remove('_active');
          }
        }
        accord[i].classList.toggle('_active');
      })
    }
  }
}

accordion();