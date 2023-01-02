'use strict';

// Реализация нажатия/отжатия лайка на карточке
let likeButtons = document.querySelectorAll('.like-button');
let likeButtonPath = './images/liked-button.svg';
let unlikeButtonPath = './images/unliked-button.svg';

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].setAttribute('src', './images/unliked-button.svg');
  likeButtons[i].addEventListener('click', function() {
    if (likeButtons[i].getAttribute('src') === unlikeButtonPath) {
      likeButtons[i].setAttribute('src', likeButtonPath);
    } else {
      likeButtons[i].setAttribute('src', unlikeButtonPath);
    }
  });
}


//Переменные для формы редактирования
let popupWindow = document.querySelector('.popup');
let inputName = document.querySelector('.popup__name');
let inputDescription = document.querySelector('.popup__description');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let editButton = document.querySelector('.edit-button');
let submitButton = document.querySelector('.save-button');
let closePopupButton = document.querySelector('.popup__close-icon');

//Фкнкция открытия popup
function popupOpen() {
  //Значения инпутов при инициализвци popup-окна.
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;

  popupWindow.classList.replace('popup__unactive', 'popup__active');
}

//Фкнкция закрытия popup
function popupClose() {
  popupWindow.classList.replace('popup__active', 'popup__unactive');
}

//Функция отправки формы
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  popupWindow.classList.replace('popup__active', 'popup__unactive');
}

editButton.addEventListener('click', popupOpen);
submitButton.addEventListener('click', handleFormSubmit);
closePopupButton.addEventListener('click', popupClose)