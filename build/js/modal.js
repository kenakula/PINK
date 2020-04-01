'use strict';

(function () {
  const ESC_KEY = 'Escape';

  const popupContainer = document.querySelector('main');
  const errorTemplate = document.querySelector('#error').content.querySelector('.modal--error');
  const successTemplate = document.querySelector('#success').content.querySelector('.modal--success');

  const onEscPressCloseModal = (evt) => {
    if (evt.key === ESC_KEY) {
      closeModal();
    }
  };

  const onButtonClickCloseModal = () => {
    closeModal();
  };

  const closeModal = () => {
    const modal = popupContainer.querySelector('.modal');
    if (modal) {
      popupContainer.removeChild(modal);
      document.removeEventListener('keydown', onEscPressCloseModal);
    }
  }

  const setModal = (template) => {
    const fragment = document.createDocumentFragment();
    const element = template.cloneNode(true);
    const closeButton = element.querySelector('.modal__button');
    closeButton.addEventListener('click', onButtonClickCloseModal);
    document.addEventListener('keydown', onEscPressCloseModal);
    fragment.appendChild(element);

    return fragment;
  }

  const renderSuccessPopup = function () {
    popupContainer.appendChild(setModal(successTemplate));
  };

  const renderErrorPopup = function () {
    popupContainer.appendChild(setModal(errorTemplate));
  };

  window.modal = {
    renderSuccessPopup: renderSuccessPopup,
    renderErrorPopup: renderErrorPopup
  }

})();
