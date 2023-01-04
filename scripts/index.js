"use strict";

//Переменные для формы редактирования
let popupWindow = document.querySelector(".popup");
let popupForm = document.querySelector('.popup__form');
let inputName = document.querySelector(".popup__input_name");
let inputDescription = document.querySelector(".popup__input_description");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let editButton = document.querySelector(".profile__button-edit");
let closePopupButton = document.querySelector(".popup__button-close");

//Функция открытия popup
function popupOpen() {
  //Значения инпутов при инициализации popup-окна.
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;

  popupWindow.classList.add("popup_active");
}

//Функция закрытия popup
function popupClose() {
  popupWindow.classList.remove("popup_active");
}

//Функция отправки формы
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  popupClose();
}

editButton.addEventListener("click", popupOpen);
popupForm.addEventListener("submit", handleFormSubmit);
closePopupButton.addEventListener("click", popupClose);