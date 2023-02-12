"use strict";

//переменные для рендеринга и просмотра картинки
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card"); //шаблон
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
const buttonEdit = document.querySelector(".profile__button-edit"); //кнопка редактирования
const submitButtonEdit = document.querySelector('.submit-button-edit'); //кнопка сабмита на форме редактирования

// Переменные для формы добавления
const popupAdd = document.querySelector('.popup_type_add'); //окно добавления
const popupAddForm = document.querySelector(".popup__form-add"); //форма добавления
const inputPlace = document.querySelector(".popup__input_place_name"); //инпут названия места
const inputLink = document.querySelector(".popup__input_place_link"); //инпут ссылки
const buttonAdd = document.querySelector(".profile__button-add"); //кнопка добавления

// массив кнопок закрытия
const buttonCloseList = Array.from(document.querySelectorAll('.popup__button-close'));

//массив оверлеев для отслеживания
const popups = Array.from(document.querySelectorAll('.popup'));

// Функция создания карточки
function createCard({ name, link }) {
  const cardElement = cardTemplate.cloneNode(true);
  const buttonLike = cardElement.querySelector('.card__button-like');
  const buttonDelete = cardElement.querySelector('.card__button-delete');
  const viewPhoto = cardElement.querySelector('.card__photo');
  
  viewPhoto.src = link; // установка атрибута src
  viewPhoto.alt = name; // установка атрибута alt
  cardElement.querySelector(".card__title").textContent = name; // 

  // Слушатели на лайк (через всплытие)
  cardElement.addEventListener('click', (e) => {
    if (e.target == buttonLike) {
      toggleLike(buttonLike)
    }
  });

  //Слушатели на удаление и просмотр картинок
  buttonDelete.addEventListener('click', () => cardElement.remove());
  viewPhoto.addEventListener('click', () => {
    popupPhoto.src = link;
    popupPhoto.alt = name;
    popupCaption.textContent = name;
    openPopup(popupView);
  });
  return cardElement;
}

// Функция рендеринга карточки из массива
function renderCard(cardData) {
  cardsBlock.prepend(createCard(cardData));
}

// Функция переключения лайк/анлайк
function toggleLike(buttonLike) {
  buttonLike.classList.toggle("card__button-like_active");
};

//закрытие попапа по клавише Escape
function handleEscClose(e) { 
  if (e.key === "Escape") { 
    const popupOpened = document.querySelector('.popup_active');
    closePopup(popupOpened)
  }}

// функция открытия попап
function openPopup(popupName) {
  popupName.classList.add('popup_active');
  document.addEventListener('keydown', handleEscClose)
}

// Функция закрытия попап
function closePopup(popupName) {
  document.removeEventListener('keydown', handleEscClose)
  popupName.classList.remove('popup_active');  
}

// функция закрытия всех попапов по крестику
buttonCloseList.forEach((buttonClose) => {
  buttonClose.addEventListener('click', function(event){
    closePopup(event.target.closest('.popup'));
  });
});

//функция закрытия попапов по клику на оверлей
popups.forEach(popup =>  popup.addEventListener('click', e => {
  if (e.target.classList.contains('popup')){
    closePopup(popup);
  }
}))

//функция открытия окна редактирования профиля
function openEditForm() {
  //Значения инпутов и кнопки при инициализации popup-окна.
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
  submitButtonEdit.removeAttribute('disabled', '');

  //проверка полей ввода при открытии формы
  let initInput = new Event('input');
  inputName.dispatchEvent(initInput);
  inputDescription.dispatchEvent(initInput);

  openPopup(popupEdit);
}

//Функция на сабмит формы редактирования
function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  closePopup(popupEdit);
}

// Функция на сабмит формы добавления места
function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const cardData = {};
  cardData.name = inputPlace.value;
  cardData.link = inputLink.value;
  renderCard(cardData);
  popupAddForm.reset();
  closePopup(popupAdd);
}

// Рендер начального массива
initialCards.forEach(item => {
  renderCard(item);
});

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save', //кнопка сабмита
  errorClass: 'popup__input-error_visible', // отображение спана с ошибкой
  inputErrorClass: 'popup__input_type_error', // красная линия под инпутом
});

buttonEdit.addEventListener('click', openEditForm); // Слушатель на кнопке редактирования
popupEditForm.addEventListener('submit', handleFormEditSubmit); // сабмит формы редактирования
buttonAdd.addEventListener('click', () => openPopup(popupAdd)); // слушатель на кнопке добавления
popupAddForm.addEventListener('submit', handleFormAddSubmit); //сабмит формы добавления