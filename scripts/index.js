'use strict';

//Переменные для формы редактирования
let popupWindow = document.querySelector('.popup');
let inputName = document.querySelector('.input-name');
let inputDescription = document.querySelector('.input-description');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let editButton = document.querySelector('.edit-button');
let submitButton = document.querySelector('.save-button');
let closePopupButton = document.querySelector('.popup__close-button');

//Функция открытия popup
function popupOpen() {
  //Значения инпутов при инициализвци popup-окна.
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;

  popupWindow.classList.add('popup_active');
}

//Фкнкция закрытия popup
function popupClose() {
  popupWindow.classList.remove('popup_active');
}

//Функция отправки формы
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  popupClose();
}

editButton.addEventListener('click', popupOpen);
submitButton.addEventListener('click', handleFormSubmit);
closePopupButton.addEventListener('click', popupClose)