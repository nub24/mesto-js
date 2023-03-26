"use strict";

import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { 
  initialCards, 
  cardsBlock, 
  validationSettings, 
  forms, 
  popupView, 
  popupAdd, 
  buttonAdd,
  profileTitle,
  profileSubtitle,
  popupEdit,
  buttonEdit,
  token,
  address } from '../utils/constants.js';

import './index.css';

//попап просмотра карточки
const popupWithImageClass = new PopupWithImage(popupView);
popupWithImageClass.setEventListeners();

//попап добавления карточки
const popupAddClass = new PopupWithForm(popupAdd, handleFormAddSubmit);
popupAddClass.setEventListeners();

//попап формы редактирования
const popupEditClass = new PopupWithForm(popupEdit, handleFormEditSubmit)
popupEditClass.setEventListeners();

const userinfo = new UserInfo( {user: profileTitle, userInfo: profileSubtitle})

//функция открытия окна редактирования профиля
function openEditForm() {
  //Значения инпутов и кнопки при инициализации popup-окна.
  popupEditClass.open(userinfo.getUserInfo())
}

//Функция на сабмит формы редактирования
function handleFormEditSubmit(evt, inputData) {
  evt.preventDefault();
  userinfo.setUserInfo(inputData)
  popupEditClass.close()
}

const cardSection = new Section(
  { renderer: (place) => getCard(place) },
  cardsBlock
)

//отрисовка начального массива
cardSection.renderItems(initialCards.reverse());

//создание карточки
function getCard(item) {
  return new Card(
    item,
    "#card-template",
    () => {popupWithImageClass.open(item)}
  ).createCard();
}

// Функция на сабмит формы добавления места
function handleFormAddSubmit(evt, inputData) {
  evt.preventDefault();
  const cardData = {};
  cardData.name = inputData.name;
  cardData.link = inputData.link;
  cardSection.addItem(cardData);
  popupAddClass.close()
}
//запуск валидации
forms.forEach(form => {
  const formValidation = new FormValidator(validationSettings, form);
    formValidation.enableValidation();
})

buttonEdit.addEventListener('click', openEditForm); // Слушатель на кнопке редактирования
buttonAdd.addEventListener('click', () => {popupAddClass.open()}); // слушатель на кнопке добавления

console.log(forms);