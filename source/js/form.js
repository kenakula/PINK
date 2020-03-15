'use strict';

(function () {
  const form = document.querySelector('.form');
  const submitButton = form.querySelector('.form__button');

  const onLoadSuccess = function () {
    form.reset();
    window.modal.renderSuccessPopup();
  };

  const onLoadError = function () {
    window.modal.renderErrorPopup();
  };

  const onFormSubmit = function (evt) {
    evt.preventDefault();

    window.backend.upload(new FormData(form), onLoadSuccess, onLoadError);
  };

  form.addEventListener('submit', onFormSubmit);
})();
