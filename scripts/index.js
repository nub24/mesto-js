"use strict";

import initialCards from './data.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

//переменные для рендеринга
const cardsBlock = document.querySelector(".cards"); // Блок для рендеринга карточек

//Переменные для формы редактирования
const popupEdit = document.querySelector('.popup_type_edit'); //окно редактирования
const popupEditForm = document.querySelector(".popup__form-edit"); //форма редактирования
const inputName = document.querySelector(".popup__input_profile_name"); //инпут имени
const inputDescription = document.querySelector(".popup__input_profile_description"); //инпут описания
const profileTitle = document.querySelector(".profile__title"); //имя на странице
const profileSubtitle = document.querySelector(".profile__subtitle"); //описание на странице
const buttonEdit = document.querySelector(".profile__button-edit"); //кнопка редактирования
const submitButtonEdit = document.querySelector('.submit-button-edit'); //кнопка сабмита на форме редактирования

// Переменные для формы добавления
const popupAdd = document.querySelector('.popup_type_add'); //окно добавления
const popupAddForm = document.querySelector(".popup__form-add"); //форма добавления
const inputPlace = document.querySelector(".popup__input_place_name"); //инпут названия места
const inputLink = document.querySelector(".popup__input_place_link"); //инпут ссылки
const buttonAdd = document.querySelector(".profile__button-add"); //кнопка добавления

// массив кнопок закрытия
const buttonCloseList = Array.from(document.querySelectorAll('.popup__button-close'));

//массив оверлеев для отслеживания
const popups = Array.from(document.querySelectorAll('.popup'));

//закрытие попапа по клавише Escape
function handleEscClose(e) { 
  if (e.key === "Escape") { 
    const popupOpened = document.querySelector('.popup_active');
    closePopup(popupOpened)
  }}

// функция открытия попап
export function openPopup(popupName) {
  popupName.classList.add('popup_active');
  document.addEventListener('keydown', handleEscClose)
}

// Функция закрытия попап
function closePopup(popupName) {
  document.removeEventListener('keydown', handleEscClose)
  popupName.classList.remove('popup_active');  
}

// функция закрытия всех попапов по крестику
buttonCloseList.forEach((buttonClose) => {
  buttonClose.addEventListener('click', function(event){
    closePopup(event.target.closest('.popup'));
  });
});

//функция закрытия попапов по клику на оверлей
popups.forEach(popup =>  popup.addEventListener('click', e => {
  if (e.target.classList.contains('popup')){
    closePopup(popup);
  }
}))

//функция открытия окна редактирования профиля
function openEditForm() {
  //Значения инпутов и кнопки при инициализации popup-окна.
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
  submitButtonEdit.removeAttribute('disabled', '');

  //проверка полей ввода при открытии формы
  let initInput = new Event('input');
  inputName.dispatchEvent(initInput);
  inputDescription.dispatchEvent(initInput);

  openPopup(popupEdit);
}

//Функция на сабмит формы редактирования
function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  closePopup(popupEdit);
}

// Функция на сабмит формы добавления места
function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const cardData = {};
  cardData.name = inputPlace.value;
  cardData.link = inputLink.value;
  renderCard(cardData);
  popupAddForm.reset();
  closePopup(popupAdd);
}

//создание и добавление в разметку экземпляпв карточки
function renderCard (item) {
  const card = new Card (item, "#card-template");
  const cardElement = card.createCard();

  cardsBlock.prepend(cardElement);
}

// Рендер начального массива
initialCards.forEach(item => renderCard(item));

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save', //кнопка сабмита
  errorClass: 'popup__input-error_visible', // отображение спана с ошибкой
  inputErrorClass: 'popup__input_type_error', // красная линия под инпутом
});

buttonEdit.addEventListener('click', openEditForm); // Слушатель на кнопке редактирования
popupEditForm.addEventListener('submit', handleFormEditSubmit); // сабмит формы редактирования
buttonAdd.addEventListener('click', () => openPopup(popupAdd)); // слушатель на кнопке добавления
popupAddForm.addEventListener('submit', handleFormAddSubmit); //сабмит формы добавления