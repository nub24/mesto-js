'use strict';

class Card {
  constructor ({name, link, likes, _id, owner}, cardTemplate, handleCardClick, userId, handleLike, openDelPopup) {
    this._name = name;
    this._link = link;
    this._likesLength = likes.length;
    this._cardId = _id;
    this._isUserOwner = owner._id === userId;
    this._isLiked = likes.some(like => like._id === userId);
    this._handleLike = handleLike;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;   
    this._openDelPopup = openDelPopup;
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

  //метод удаления карточки
  _handleDelCard = () => {
    this._openDelPopup(this._cardId, this._card);
  };
  
  //открытие окна просмотра
  _handlePopupOpen = () => {this._handleCardClick({name: this._name, link: this._link})};

  //навешиваем слушатели
  _setEventListeners () {
    this._cardImage.addEventListener('click', this._handlePopupOpen)
    this._likeBtn.addEventListener('click', () => this._handleLike(this));
    this._isUserOwner 
      ? this._buttonDelCard.addEventListener('click', this._handleDelCard)
      : this._buttonDelCard.remove();
  }

  //инфо о карточке
  getCardInfo() {
    return { cardId: this._cardId, isLiked: this._isLiked }
  }

  //обновление лайка на сайте
  updateLike (data) {
    if (this._isLiked) {
      this._likeBtn.classList.remove('card__button-like_active');
      this._likeCount.textContent = data.likes.length;
      this._isLiked = false;
    } else {
      this._likeBtn.classList.add('card__button-like_active');
      this._likeCount.textContent = data.likes.length;
      this._isLiked = true;
    }
  }

  //публичный метод содания карточки
  createCard () {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.card__photo');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._card.querySelector('.card__title').textContent = this._name;
    this._likeBtn = this._card.querySelector('.card__button-like');
    this._likeCount = this._card.querySelector('.card__like-count');
    this._likeCount.textContent = this._likesLength;
    this._buttonDelCard = this._card.querySelector('.card__button-delete');

    this._isLiked ? this._likeBtn.classList.add('card__button-like_active') : null;

    this._setEventListeners();
    return this._card
  }
}

export default Card;