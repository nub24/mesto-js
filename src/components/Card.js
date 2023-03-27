'use strict';

class Card {
  constructor ({name, link, likes}, cardTemplate, handleCardClick) {
    this._name = name;
    this._link = link;
    this._likesLength = likes.length;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
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

  //открытие окна просмотра
  _handlePopupOpen = () => {this._handleCardClick({name: this._name, link: this._link})};

  //навешиваем слушатели
  _setEventListeners () {
    this._cardImage.addEventListener('click', this._handlePopupOpen)
    this._card.querySelector('.card__button-delete').addEventListener('click', () => this._deleteCard());
    this._card.querySelector('.card__button-like').addEventListener('click', this._setLike)
  }

  //публичный метод содания карточки
  createCard () {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.card__photo');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._card.querySelector('.card__title').textContent = this._name;
    this._likeCount = this._card.querySelector('.card__like-count')
    this._likeCount.textContent = this._likesLength;
    this._setEventListeners();
    return this._card
  }
}

export default Card;