'use strict';

(function () {
  const slider = document.querySelector('.fire-rates');
  const bulletsContainer = slider.querySelector('.fire-rates__dots');
  // const slideList = slider.querySelector('.fire-rates__list');
  const slides = slider.querySelectorAll('.fire-rates__item');

  const getActiveSlide = function () {
    return slider.querySelector('.fire-rates__item--active');
  };

  const getNewSlideIndex = function (target) {
    return target.dataset.slide;
  }

  const changeActiveBullet = function (target) {
    let activeBullet = bulletsContainer.querySelector('.fire-rates__dot--active');
    activeBullet.classList.toggle('fire-rates__dot--active');
    target.classList.toggle('fire-rates__dot--active');
  };

  const onBulletClickSlideChange = function (evt) {
    if (evt.target.classList.contains('fire-rates__dot')) {
      let activeSlide = getActiveSlide();
      let newSlide = slides[getNewSlideIndex(evt.target)];

      activeSlide.classList.toggle('fire-rates__item--active');
      newSlide.classList.toggle('fire-rates__item--active');
      changeActiveBullet(evt.target);
    }


  };

  bulletsContainer.addEventListener('click', onBulletClickSlideChange);
})();
