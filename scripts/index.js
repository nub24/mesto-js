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
    name: "Заповедник мумба-юмба",
    link: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
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

const popupView = document.querySelector('.popup_type_view'); //окно просмотра
const popupPhoto = document.querySelector('.popup__photo'); //картинка для просмотра
const popupCaption = document.querySelector('.popup__caption');

// Функция создания карточки
function createCard({ name, link }) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const likeButton = cardElement.querySelector('.card__button-like');
  const deleteButton = cardElement.querySelector('.card__button-delete');
  const viewPhoto = cardElement.querySelector('.card__photo');
  
  cardElement.querySelector(".card__photo").setAttribute("src", link);
  cardElement.querySelector(".card__photo").setAttribute("alt", name);
  cardElement.querySelector(".card__title").textContent = name;

  // Слушатели на лайк, удаление и просмотр картинок
  likeButton.addEventListener('click', likeUnlikeCard);
  deleteButton.addEventListener('click', deleteCard);
  viewPhoto.addEventListener('click', function() {
    popupPhoto.setAttribute('src', link);
    popupCaption.textContent = name;
    popupOpen(popupView);
  });
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


// функция открытия попап
function popupOpen(popupName) {
  popupName.classList.add('popup_active');
}

// Функция закрытия попап
function popupClose(popupName) {
  popupName.classList.remove('popup_active');
}

// Закрытие всех попапов
const closeButtons = Array.from(document.querySelectorAll('.popup__button-close'));
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', function(event){
    event.target.closest('.popup').classList.remove('popup_active');
  });
});

// Блок редактирования профиля
//Переменные для формы редактирования
const popupEdit = document.querySelector('.popup_type_edit'); //окно редактирования
const popupEditForm = document.querySelector(".popup__form-edit");
const inputName = document.querySelector(".popup__input_profile_name");
const inputDescription = document.querySelector(".popup__input_profile_description");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const editButton = document.querySelector(".profile__button-edit");

// Слушатель на кнопке редактирования
editButton.addEventListener('click', function(){
  //Значения инпутов при инициализации popup-окна.
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
  popupOpen(popupEdit);
});

//Функция на сабмит формы редактирования
function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  popupClose(popupEdit);
}
popupEditForm.addEventListener('submit', handleFormEditSubmit);

// Переменные для формы добавления
const popupAdd = document.querySelector('.popup_type_add'); //окно добавления
let popupAddForm = document.querySelector(".popup__form-add");
let inputPlace = document.querySelector(".popup__input_place_name");
let inputLink = document.querySelector(".popup__input_place_link");
let addButton = document.querySelector(".profile__button-add");

// Слушатель на кнопке добавления
addButton.addEventListener('click', () => popupOpen(popupAdd));

// Функция на сабмит формы добавления места
function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const addObj = {};
  addObj.name = inputPlace.value;
  addObj.link = inputLink.value;
  renderCard([addObj]);

  inputPlace.value = '';
  inputLink.value = '';
  popupClose(popupAdd);
}

popupAddForm.addEventListener('submit', handleFormAddSubmit);