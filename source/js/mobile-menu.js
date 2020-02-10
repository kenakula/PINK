'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var nav = header.querySelector('.main-nav');
  var toggleButton = nav.querySelector('.main-nav__toggle');
  var menu = nav.querySelector('.main-nav__list');

  var changeToggleButtonText = function () {
    toggleButton.classList.contains('main-nav__toggle--close') ?
    toggleButton.innerHTML = 'Закрыть меню' :
    toggleButton.innerHTML = 'Открыть меню';
  }

  var changeToggleButtonState = function () {
    toggleButton.classList.toggle('main-nav__toggle--close')
    changeToggleButtonText();
  };

  var changeHeaderTransparancy = function () {
    header.classList.toggle('page-header--transparent')
  }

  var changeMenuState = function () {
    menu.classList.toggle('main-nav__list--opened')
    changeToggleButtonState();
    changeHeaderTransparancy();
  };

  toggleButton.addEventListener('click', changeMenuState);
})()
