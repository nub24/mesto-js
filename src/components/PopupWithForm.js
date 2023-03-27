'use strict';

import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor (popup, onSubmitForm) {
    super(popup);
    this._onSubmitForm = onSubmitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._submitButton = this._popup.querySelector('.popup__button-save');
    this._inputs = Array.from(this._popupForm.querySelectorAll('.popup__input'));
  }

  _getInputValues () {
    const inputData = this._inputs.reduce((obj, input) => {
      obj[input.name] = input.value;
      return obj;
    }, {});
    return inputData;
  }

  _onSubmitHandler = (e) => {
    this._onSubmitForm(e, this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._onSubmitHandler);
  }

  loadingButton(isLoading, text = 'Сохранение данных...') {
    this._submitButton.disabled = isLoading;
    this._submitButton.textContent = text;
  }

  open(inputValues) {
    super.open();
    if(inputValues) {
      this._inputs.forEach(input => {
        input.value = inputValues[input.name] || '';
        //проверка полей ввода при открытии формы
        const initInput = new Event('input');
        input.dispatchEvent(initInput);
      })
    }
  }

  close () {
    this._popupForm.reset();
    super.close();
  }
}