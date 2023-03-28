'use strict';

//константы для API
export const token = '6a95f001-9add-456c-b850-9575114e6ce8';
export const address = 'https://mesto.nomoreparties.co/v1/cohort-63';

//секция для рендеринга карточек
export const cardsBlock = document.querySelector(".cards"); // Блок для рендеринга карточек

//константы попапа просмотра картинки для класса Card
export const popupView = document.querySelector('.popup_type_view'); //окно просмотра

//объект с настойками для валидации
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save', //кнопка сабмита
  errorClass: 'popup__input-error_visible', // отображение спана с ошибкой
  inputErrorClass: 'popup__input_type_error', // красная линия под инпутом
}

//переменные для редактирования аватара
export const popupAvatarEdit = document.querySelector('.popup_type_avatar');
export const profileAvatar = document.querySelector('.profile__photo');
export const buttonAvatarEdit = document.querySelector('.profile__avatar-container');

//попап удаления карточки
export const popupDeleteCard = document.querySelector('.popup_type_delete');

// Переменные для формы добавления
export const popupAdd = document.querySelector('.popup_type_add'); //окно добавления
export const buttonAdd = document.querySelector(".profile__button-add"); //кнопка добавления

//переменные для формы редактирования
export const profileTitle = document.querySelector(".profile__title"); //имя на странице
export const profileSubtitle = document.querySelector(".profile__subtitle"); //описание на странице
export const popupEdit = document.querySelector('.popup_type_edit'); //окно редактирования
export const buttonEdit = document.querySelector(".profile__button-edit"); //кнопка редактирования

//массив форм для валидации
export const forms = Array.from(document.querySelectorAll('.popup__form'));