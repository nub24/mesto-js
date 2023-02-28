'use strict';

const popupView = document.querySelector('.popup_type_view'); //окно просмотра
const popupPhoto = document.querySelector('.popup__photo'); //картинка для просмотра
const popupCaption = document.querySelector('.popup__caption'); //описание к картинке

class Card {
  constructor (cardData, cardTemplate) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardTemplate = cardTemplate;
  }

  _getTemplate () {
    const cardElement = document
    .querySelector(this._cardTemplate)
    .content
    .querySelector('.card')
    .cloneNode(true);
    
    return cardElement;
  }

  _handleOpenPopup () {
    popupPhoto.src = this._link;
    popupPhoto.alt = this._name;
    popupCaption.textContent = this._name;
    popupView.classList.add('popup_active');
  }

  _setLike () {
    this.classList.toggle("card__button-like_active");    
  }

  _deleteCard () {
    this._card.remove();
  }

  _setEventListeners () {
    this._card.querySelector('.card__photo').addEventListener('click', () => this._handleOpenPopup());
    this._card.querySelector('.card__button-delete').addEventListener('click', () => this._deleteCard());
    this._card.querySelector('.card__button-like').addEventListener('click', this._setLike)
  }

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