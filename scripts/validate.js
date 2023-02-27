'use strict';

//показ ошибки
const showInputError = (input, errorPlace, errorMessage, errorClass, inputErrorClass) => {
  input.classList.add(inputErrorClass);
  errorPlace.textContent = errorMessage;
  errorPlace.classList.add(errorClass);
}

//сокрытие ошибки
const hideInputError = (input, errorPlace, errorClass, inputErrorClass) => {
  input.classList.remove(inputErrorClass);
  errorPlace.textContent = '';
  errorPlace.classList.remove(errorClass);
}

//проверка валидности инпутов для кнопок
const hasInvalidInput = inputs => {
  return inputs.some(input => {
    return !input.validity.valid;
  })
}

//переключатель состояния кнопки
const toggleButtonState = (inputs, submitButton) => {
  if (hasInvalidInput(inputs)) {
    submitButton.setAttribute('disabled', '');
  } else {
    submitButton.removeAttribute('disabled', '');
  }
}

//** проверка валидности введённых данных
const checkInputValidity = (input, errorPlace, errorClass, inputErrorClass) => {
  if (input.validity.valid) {
    hideInputError(input, errorPlace, errorClass, inputErrorClass);
  } else {
    showInputError(input, errorPlace, input.validationMessage, errorClass, inputErrorClass);
  }
}

//** действие наложения обработчиков на поля форм
const setEventListeners = ((form, {...rest}) => {
  const inputs = Array.from(form.querySelectorAll(rest.inputSelector));
  const submitButton = form.querySelector(rest.submitButtonSelector);
  toggleButtonState(inputs, submitButton);

  //сброс кнопки при резете формы
  form.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState(inputs, submitButton), 0
    })
  })

  inputs.forEach(input => {
    input.addEventListener('input', e => {
      //**поиск errorplace
      const errorPlace =  form.querySelector(`.${input.name}-error`);
      checkInputValidity(input, errorPlace, rest.errorClass, rest.inputErrorClass);
      toggleButtonState(inputs, submitButton);
    })
  })
})

const enableValidation = function({ formSelector, ...rest }) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach(form => {
    form.addEventListener('submit', e => e.preventDefault());
    setEventListeners(form, rest);
  })
}