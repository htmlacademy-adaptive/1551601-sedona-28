let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav__menu--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav__menu--closed')) {
    navMain.classList.remove('nav__menu--closed');
    navMain.classList.add('nav__menu--opened');
  } else {
    navMain.classList.add('nav__menu--closed');
    navMain.classList.remove('nav__menu--opened');
  }
});
