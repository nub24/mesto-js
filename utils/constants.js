'use strict';

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

// Начальный массив мест
export const initialCards = [
  {
    name: "Андромеда",
    link: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
  },
  {
    name: "Туманность",
    link: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80",
  },
  {
    name: "Млечный путь",
    link: "https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Вертушка",
    link: "https://images.unsplash.com/photo-1555226196-f9930c35a7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
  },
  {
    name: "Солнце",
    link: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Заповедник мумба-юмба",
    link: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
  },
];