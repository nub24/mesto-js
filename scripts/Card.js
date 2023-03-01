'use strict';

//для исключения дублирования кода закрытия по Escape
import { openPopup } from './index.js';

//константы попапа просмотра картинки
const popupView = document.querySelector('.popup_type_view'); //окно просмотра
const popupPhoto = document.querySelector('.popup__photo'); //картинка для просмотра
const popupCaption = document.querySelector('.popup__caption'); //описание к картинке

class Card {
  constructor (cardData, cardTemplate) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardTemplate = cardTemplate;
  }

  //получаем шаблон карточки
  _getTemplate () {
    const cardElement = document
    .querySelector(this._cardTemplate)
    .content
    .querySelector('.card')
    .cloneNode(true);
    
    return cardElement;
  }

  //метод открытия попапа просмотра картинки
  _handleOpenPopup () {
    popupPhoto.src = this._link;
    popupPhoto.alt = this._name;
    popupCaption.textContent = this._name;
    openPopup(popupView);
  }

  //метод для лайка
  _setLike () {
    this.classList.toggle("card__button-like_active");    
  }

  //метод удаления карточки
  _deleteCard () {
    this._card.remove();
    this._card = null;
  }

  //навешиваем слушатели
  _setEventListeners () {
    this._card.querySelector('.card__photo').addEventListener('click', () => this._handleOpenPopup());
    this._card.querySelector('.card__button-delete').addEventListener('click', () => this._deleteCard());
    this._card.querySelector('.card__button-like').addEventListener('click', this._setLike)
  }

  //публичный метод содания карточки
  createCard () {
    this._card = this._getTemplate();

    this._card.querySelector('.card__photo').src = this._link;
    this._card.querySelector('.card__photo').alt = this._name;
    this._card.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();

    return this._card
  }
}

export default Card;