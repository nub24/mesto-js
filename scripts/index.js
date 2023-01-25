"use strict";

//переменные для рендеринга и просмотра картинки
const cardTemplate = document.querySelector("#card-template").content; //шаблон
const cardsBlock = document.querySelector(".cards"); // Блок для рендеринга карточек
const popupView = document.querySelector('.popup_type_view'); //окно просмотра
const popupPhoto = document.querySelector('.popup__photo'); //картинка для просмотра
const popupCaption = document.querySelector('.popup__caption'); //описание к картинке

//Переменные для формы редактирования
const popupEdit = document.querySelector('.popup_type_edit'); //окно редактирования
const popupEditForm = document.querySelector(".popup__form-edit"); //форма редактирования
const inputName = document.querySelector(".popup__input_profile_name"); //инпут имени
const inputDescription = document.querySelector(".popup__input_profile_description"); //инпут описания
const profileTitle = document.querySelector(".profile__title"); //имя на странице
const profileSubtitle = document.querySelector(".profile__subtitle"); //описание на странице
const editButton = document.querySelector(".profile__button-edit"); //кнопка редактирования

// Переменные для формы добавления
const popupAdd = document.querySelector('.popup_type_add'); //окно добавления
const popupAddForm = document.querySelector(".popup__form-add"); //форма добавления
const inputPlace = document.querySelector(".popup__input_place_name"); //инпут названия места
const inputLink = document.querySelector(".popup__input_place_link"); //инпут ссылки
const addButton = document.querySelector(".profile__button-add"); //кнопка добавления

// массив кнопок закрытия
const closeButtons = Array.from(document.querySelectorAll('.popup__button-close'));

// Функция создания карточки
function createCard({ name, link }) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const likeButton = cardElement.querySelector('.card__button-like');
  const deleteButton = cardElement.querySelector('.card__button-delete');
  const viewPhoto = cardElement.querySelector('.card__photo');

  viewPhoto.src = link; // установка атрибута src
  viewPhoto.alt = name; // установка атрибута alt
  cardElement.querySelector(".card__title").textContent = name; // 

  // Слушатели на лайк, удаление и просмотр картинок
  likeButton.addEventListener('click', toggleLike);
  deleteButton.addEventListener('click', deleteCard);
  viewPhoto.addEventListener('click', function() {
    popupView.style = 'background-color: rgba(0, 0, 0, 0.9)';
    popupPhoto.src = link;
    popupPhoto.alt = name;
    popupCaption.textContent = name;
    popupOpen(popupView);
  });
  return cardElement;
}

// Функция рендеринга карточки из массива
function renderCards(arrCards) {
  arrCards.forEach((item) => {
    arrCards.length > 1
      ? cardsBlock.append(createCard(item))
      : cardsBlock.prepend(createCard(item));
  });
}

// Функция переключения лайк/анлайк
function toggleLike(event) {
  event.target.classList.toggle("card__button-like_active");
};

// Функция удаления карточки
function deleteCard(event) {
  event.target.closest(".card").remove();
}

// функция открытия попап
function popupOpen(popupName) {
  popupName.classList.add('popup_active');
}

// Функция закрытия попап
function popupClose(popupName) {
  popupName.classList.remove('popup_active');
}

// функция закрытия всех попапов по крестику
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', function(event){
    popupClose(event.target.closest('.popup'));
  });
});

//функция открытия окна редактирования профиля
function openEditForm() {
  //Значения инпутов при инициализации popup-окна.
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
  popupOpen(popupEdit);
}

//Функция на сабмит формы редактирования
function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  popupClose(popupEdit);
}
// Функция на сабмит формы добавления места
function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const cardData = {};
  cardData.name = inputPlace.value;
  cardData.link = inputLink.value;
  renderCards([cardData]);
  popupAddForm.reset();
  popupClose(popupAdd);
}

renderCards(initialCards); // Рендер начального массива
editButton.addEventListener('click', openEditForm); // Слушатель на кнопке редактирования
popupEditForm.addEventListener('submit', handleFormEditSubmit); // сабмит формы редактирования
addButton.addEventListener('click', () => popupOpen(popupAdd)); // слушатель на кнопке добавления
popupAddForm.addEventListener('submit', handleFormAddSubmit); //сабмит формы добавления