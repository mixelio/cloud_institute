"use strict";

const swiperExist = document.querySelectorAll(".swiper");
if (swiperExist.length > 0) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 20,

    centerInsufficientSlides: true,
    //centeredSlides: true,
    initialSlide: 0,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
    }
  });
}


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
  let firstScreen = document.getElementById('scroll_screen');
  let header = document.querySelectorAll('.header');
  let fixedLogo = document.querySelectorAll('.fixed_logo');
  if (firstScreen) {
    if ((((scrollDisatnce / (screenHeight * 2)) >= 0.48)) && screenWidth > 950 || (scrollDisatnce > firstScreen.offsetHeight && screenWidth > 950)) {
      header[0].classList.add('_close');
      fixedLogo[0].classList.add('_active');
    } else {
      header[0].classList.remove('_close');
      fixedLogo[0].classList.remove('_active');
    }
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

function submenu() {
  const sublist = document.querySelectorAll('.sub_menu');
  if (sublist.length > 0) {
    for (let i = 0; i < sublist.length; i++) {
      sublist[i].addEventListener('click', function (e) {
        sublist[i].classList.toggle('_active');
      })
    }
  }
}

submenu();

function accordionReasons() {
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

accordionReasons();

function accordionCoach() {
  const accord = document.querySelectorAll('.coach__hover_item');
  if (accord.length > 0) {
    for (let i = 0; i < accord.length; i++) {

      if (accord[i].classList.contains('_active')) {
        let hideElements = accord[i].children;
        let heightElement = hideElements[1].offsetHeight;
        accord[i].style.paddingBottom = heightElement + 'px';
      }

      accord[i].addEventListener('click', function (e) {
        for (let j = 0; j < accord.length; j++) {
          if (accord[j].classList.contains('_active')) {
            accord[j].classList.remove('_active');
            accord[j].style.paddingBottom = 0 + 'px';
          }
        }
        accord[i].classList.toggle('_active');
        if (accord[i].classList.contains('_active')) {
          let hideElements = accord[i].children;
          let heightElement = hideElements[1].offsetHeight;
          accord[i].style.paddingBottom = heightElement + 'px';
        }
      })
    }
  }
}

accordionCoach();

function accordionCaces() {
  const accord = document.querySelectorAll('.cases__item');
  const blockWidth = window.innerWidth;

  if (accord.length > 0 && blockWidth < 900) {
    for (let i = 0; i < accord.length; i++) {
      if (accord[i].classList.contains('_active')) {
        let hideElements = accord[i].children;
        let heightElement = hideElements[2].offsetHeight;
        console.log(heightElement);
        accord[i].style.paddingBottom = heightElement + 'px';
      }
      accord[i].addEventListener('click', function (e) {
        for (let j = 0; j < accord.length; j++) {
          if (accord[j].classList.contains('_active')) {
            accord[j].classList.remove('_active');
            accord[j].style.paddingBottom = 0 + 'px';
          }
        }
        accord[i].classList.toggle('_active');
        if (accord[i].classList.contains('_active')) {
          let hideElements = accord[i].children;
          let heightElement = hideElements[2].offsetHeight;
          accord[i].style.paddingBottom = heightElement + 'px';
        }
      })
    }
  } else {
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

accordionCaces();


function filterBurger() {
  const blogFilter = document.getElementById('blog_filter');
  const filterTitle = document.getElementById('filter_title');
  if (filterTitle) {
    const container = document.getElementById('filter_container');
    const blogFilterHeith = container.offsetHeight;
    if (filterTitle) {
      filterTitle.addEventListener('click', function (e) {
        blogFilter.classList.toggle('_active');

        if (blogFilter.classList.contains('_active')) {
          blogFilter.style.paddingBottom = blogFilterHeith + 'px';
          console.log(blogFilter.classList);
        } else {
          blogFilter.style.paddingBottom = 0 + "px";
        }
      })
    }
  }
}

filterBurger();