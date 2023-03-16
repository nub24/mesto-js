'use strict';

class Card {
  constructor (cardData, cardTemplate, handlePhotoClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardTemplate = cardTemplate;
    this._openPopup = handlePhotoClick;
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

  //метод для лайка
  _setLike () {
    this.classList.toggle("card__button-like_active");    
  }

  //метод удаления карточки
  _deleteCard () {
    this._card.remove();
    this._card = null;
  }

  _handlePopupOpen = () => {this._openPopup({name: this._name, link: this._link})};

  //навешиваем слушатели
  _setEventListeners () {
    // this._card.querySelector('.card__photo').addEventListener('click', () => this._handleOpenPopup());
    this._card.querySelector('.card__photo').addEventListener('click', this._handlePopupOpen)
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