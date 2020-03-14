'use strict';

(function () {
  const staticMap = document.querySelector('.map__wrapper');
  const interaciveMap = document.querySelector('.map__iframe');

  if (staticMap) {
    staticMap.classList.add('hidden');
    interaciveMap.classList.remove('hidden');
  }
})();
