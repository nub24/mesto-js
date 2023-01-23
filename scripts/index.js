"use strict";

// Начальный массив мест
// name объекта будет проходить и как название карточки и как alt картинки
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

// Функция лайк/анлайк
function likeUnlikeCard(event) {
  event.target.classList.toggle("card__button-like_active");
};

// Функция удаления карточки
function deleteCard(event) {
  event.target.closest(".card").remove();
}

// Блок для рендеринга карточек
const cardsBlock = document.querySelector(".cards");

// Функция создания карточки
function createCard({ name, link }) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const likeButton = cardElement.querySelector('.card__button-like');
  const deleteButton = cardElement.querySelector('.card__button-delete');

  cardElement.querySelector(".card__photo").setAttribute("src", link);
  cardElement.querySelector(".card__photo").setAttribute("alt", name);
  cardElement.querySelector(".card__title").textContent = name;

  likeButton.addEventListener('click', likeUnlikeCard);
  deleteButton.addEventListener('click', deleteCard)

  return cardElement;
}

// Функция рендеринга карточки из массива
function renderCard(arrCards) {
  arrCards.forEach((item) => {
    arrCards.length > 1
      ? cardsBlock.append(createCard(item))
      : cardsBlock.prepend(createCard(item));
  });
}

// Рендер начального массива
renderCard(initialCards);

const addButton = document.querySelector(".profile__button-add");
const addArray = [
  {
    name: "1",
    link: "https://images.unsplash.com/photo-1674423301019-5f8c0d855efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

addButton.addEventListener("click", () => {
  renderCard(addArray);
});

//Переменные для формы редактирования
let popupEdit = document.querySelector(".popup_edit");
let popupForm = document.querySelector(".popup__form-edit");
let inputName = document.querySelector(".popup__input_name_profile-name");
let inputDescription = document.querySelector(".popup__input_name_profile-description");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let editButton = document.querySelector(".profile__button-edit");
let closePopupButton = document.querySelector(".popup__button-close");

//Функция открытия окна редактирования
function popupEditOpen() {
  //Значения инпутов при инициализации popup-окна.
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;

  popupEdit.classList.add("popup_active");
}

//Функция закрытия popup
function popupClose() {
  popupEdit.classList.remove("popup_active");
}

//Функция отправки формы редактирования
function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  popupClose();
}

editButton.addEventListener("click", popupEditOpen);
popupForm.addEventListener("submit", handleFormEditSubmit);
closePopupButton.addEventListener("click", popupClose);
