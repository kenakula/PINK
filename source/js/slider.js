'use strict';

(function () {
  const slider = document.querySelector('.reviews');
  const slidesList = slider.querySelector('.reviews__list');
  const slides = slider.querySelectorAll('.reviews__item');
  const bulletsContainer = slider.querySelector('.reviews__dots');

  const getActiveSlideWidth = function () {
    return slides[0].clientWidth;
  };

  const getSlideListShift = function (width, target) {
    let newSlideIndex = target.dataset.slide;

    return width * newSlideIndex;
  }

  const changeSlide = function (shift, slideList) {
    slideList.style.left = -shift + 'px';
  }

  const onBulletClickSlideChange = function (evt) {
    if (evt.target.classList.contains('reviews__dot')) {
      let slideWidth = getActiveSlideWidth();
      let shift = getSlideListShift(slideWidth, evt.target);
      changeSlide(shift, slidesList);
      changeActiveBullet(evt.target);
    }
  };

  const changeActiveBullet = function (target) {
    let activeBullet = bulletsContainer.querySelector('.reviews__dot--active');
    activeBullet.classList.toggle('reviews__dot--active');
    target.classList.toggle('reviews__dot--active');
  };

  bulletsContainer.addEventListener('click', onBulletClickSlideChange);

})()
