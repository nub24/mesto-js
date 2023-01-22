"use strict";

// Начальный массив мест
const initialCards = [
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
    name: "Галактическое ядро",
    link: "https://images.unsplash.com/photo-1447433693259-c8549e937d62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
  },
];


// Блок рендеригна карточек
let cardsBlock = document.querySelector('.cards');

function renderCards(arrCards) {
  arrCards.forEach(card => {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__photo').setAttribute('src', card.link);
    cardElement.querySelector('.card__photo').setAttribute('alt', card.name);
    cardElement.querySelector('.card__title').textContent = card.name;

    cardsBlock.append(cardElement);
  });
}

renderCards(initialCards);

// Блок отслеживания лайков
let likeButtons = Array.from(document.querySelectorAll('.card__button-like'));

function likeUnlikeCard(arrButtons) {
  arrButtons.forEach(likeButton => {
    likeButton.addEventListener('click', function() {
      likeButton.classList.toggle('card__button-like_active');
    });
  });
}

likeUnlikeCard(likeButtons);

// Блок удаления карточки
let deleteButtons = Array.from(document.querySelectorAll('.card__button-delete'));

function deleteCard(arrDeleteButtons) {
  arrDeleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', function() {
      deleteButton.closest('.card').remove();
    });
  });
}

deleteCard(deleteButtons);

//Переменные для формы редактирования
let popupWindow = document.querySelector(".popup");
let popupForm = document.querySelector(".popup__form");
let inputName = document.querySelector(".popup__input_name_profile-name");
let inputDescription = document.querySelector(".popup__input_name_profile-description");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let editButton = document.querySelector(".profile__button-edit");
let closePopupButton = document.querySelector(".popup__button-close");

//Функция открытия popup
function popupOpen() {
  //Значения инпутов при инициализации popup-окна.
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;

  popupWindow.classList.add("popup_active");
}

//Функция закрытия popup
function popupClose() {
  popupWindow.classList.remove("popup_active");
}

//Функция отправки формы
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  popupClose();
}

editButton.addEventListener("click", popupOpen);
popupForm.addEventListener("submit", handleFormSubmit);
closePopupButton.addEventListener("click", popupClose);
