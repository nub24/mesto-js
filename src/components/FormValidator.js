'use strict';

class FormValidator {
  constructor (settings, form) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._form = form;
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }

  _showInputError (input, errorPlace, errorMeassage) {
    input.classList.add(this._inputErrorClass);
    errorPlace.textContent = errorMeassage;
    errorPlace.classList.add(this._errorClass);
  }

  _hideInputError (input, errorPlace) {
    input.classList.remove(this._inputErrorClass);
    errorPlace.textContent = '';
    errorPlace.classList.remove(this._errorClass);
  }

  _checkInputValidity (input, errorPlace) {
    if (input.validity.valid) {
      this._hideInputError(input, errorPlace);
    } else {
      this._showInputError(input, errorPlace, input.validationMessage);
    }
  }

  //проверка инпутов формы на валидность
  _hasInvalidInput() {
    return this._inputs.some(input => !input.validity.valid)
  }

  //переключение состояния кнопки
  _toggleButtonState () {
    if (this._hasInvalidInput()) {
      this._submitButton.setAttribute('disabled', '');
    } else {
      this._submitButton.removeAttribute('disabled', '');
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    //сброс кнопки при резете формы
    this._form.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState(), 0
      })
    })

    this._inputs.forEach(input => {
      input.addEventListener('input', e => {
        const errorPlace = this._form.querySelector(`.${input.name}-error`)
        this._checkInputValidity(input, errorPlace);
        this._toggleButtonState();
      })
    })
  }

  //публичный метод для каждой формы
  enableValidation () {
    this._form.addEventListener('submit', e => e.preventDefault());
    this._setEventListeners();
  }
}

export default FormValidator;