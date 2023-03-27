"use strict";

import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import { 
  // initialCards, 
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
  profileAvatar,
  popupAvatarEdit,
  buttonAvatarEdit,
  token,
  address } from '../utils/constants.js';

import './index.css';

const api = new Api({address, token});

//загрузка начальных данных
Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cards]) => {
    userinfo.setUserInfo(userData);
    cardSection.renderItems(cards.reverse());
  })
  .catch((err) => console.log(`Ошибка получения данных: ${err}`));

//попап просмотра карточки
const popupWithImageClass = new PopupWithImage(popupView);
popupWithImageClass.setEventListeners();

//попап добавления карточки
const popupAddClass = new PopupWithForm(popupAdd, handleFormAddSubmit);
popupAddClass.setEventListeners();

//попап формы редактирования
const popupEditClass = new PopupWithForm(popupEdit, handleFormEditSubmit)
popupEditClass.setEventListeners();

//попап редактирования аватара
const popupAvatarClass = new PopupWithForm(popupAvatarEdit, handleFormEditAvatarsubmit)
popupAvatarClass.setEventListeners();

const userinfo = new UserInfo( {
  name: profileTitle, 
  about: profileSubtitle,
  avatar: profileAvatar})

//функция на сабмит формы смены аватара
function handleFormEditAvatarsubmit(evt, {avatar}) {
  evt.preventDefault();
  popupAvatarClass.loadingButton(true);
  api
    .patchAvatar(avatar)
    .then((data) => {
      userinfo.setUserInfo(data);
      popupAvatarClass.close();
    })
    .catch((err) => console.log(`Ошибка изменения аватара: ${err}`))
    .finally(() => {
      popupAvatarClass.loadingButton(false);
    })
}

//Функция на сабмит формы редактирования
function handleFormEditSubmit(evt, inputData) {
  evt.preventDefault();
  popupEditClass.loadingButton(true);
  api
    .patchProfile(inputData)
    .then((data) => {
      userinfo.setUserInfo(data);
      popupEditClass.close()
    })
    .catch((err) => console.log(`Ошибка редактирования профиля: ${err}`))
    .finally(() => {
      popupEditClass.loadingButton(false, 'Сохранить');
    })
}

const cardSection = new Section(
  { renderer: (item) => getCard(item) },
  cardsBlock
)

//создание карточки
function getCard(item) {
  return new Card(
    item,
    "#card-template",
    () => {popupWithImageClass.open(item)}
  ).createCard();
}

// Функция на сабмит формы добавления места
// function handleFormAddSubmit(evt, inputData) {
//   evt.preventDefault();
//   const cardData = {};
//   cardData.name = inputData.name;
//   cardData.link = inputData.link;
//   cardSection.addItem(cardData);
//   popupAddClass.close()
// }

function handleFormAddSubmit(evt, inputData) {
  evt.preventDefault();
  api
    .postCard(inputData)
    .then((data) => {
      cardSection.addItem(data);
      popupAddClass.close()
    })
    .catch((err) => console.log(`Ошибка при добавлении карточки: ${err}`))
  
  
}

//запуск валидации
forms.forEach(form => {
  const formValidation = new FormValidator(validationSettings, form);
    formValidation.enableValidation();
})

buttonEdit.addEventListener('click', () => {popupEditClass.open(userinfo.getUserInfo())}); // Слушатель на кнопке редактирования
buttonAdd.addEventListener('click', () => {popupAddClass.open()}); // слушатель на кнопке добавления
buttonAvatarEdit.addEventListener('click', () => popupAvatarClass.open()); //слушатель на аватарке