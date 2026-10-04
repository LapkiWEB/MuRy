// WOW JS Конфликтует с оверфлоу хайден на бади или секций

$(window).on('scroll', function () {
  let header = document.querySelector('.header-down');
  if ($(this).scrollTop() >= 500) {
    header.classList.add('header__fixed');
  }
  else {
    header.classList.remove('header__fixed');
  }
});

$(function () {

  $('.menu__btn').on('click', (function () {
    if (!$('.nav').hasClass('active')) {
      $('.nav').addClass('active');
      $('.menu__btn').addClass('active');
      $('body').addClass('menu-opened');
      // $('.menu__list-drop').addClass('active');
      // $('.menu__list-drop').on('click', (e) => {
      //   e.target.classList.toggle('active');
      // })

    } else {
      $('.nav').removeClass('active');
      $('.menu__btn').removeClass('active');
      $('body').removeClass('menu-opened');
      // $('.menu__list-drop').removeClass('active');
      // $('.menu__list-drop').on('click', (e) => {
      //   e.target.classList.toggle('active');
      // })
    }


  }));
});