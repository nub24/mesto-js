"use strict";

//Переменные для формы редактирования
let popupWindow = document.querySelector(".popup");
let inputName = document.querySelector(".input-name");
let inputDescription = document.querySelector(".input-description");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let editButton = document.querySelector(".button-edit");
let submitButton = document.querySelector(".button-save");
let closePopupButton = document.querySelector(".button-close-popup");

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
submitButton.addEventListener("click", handleFormSubmit);
closePopupButton.addEventListener("click", popupClose);
