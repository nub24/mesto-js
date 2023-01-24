"use strict";

// Функция лайк/анлайк
function toggleLike(event) {
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
  
  viewPhoto.setAttribute("src", link);
  viewPhoto.setAttribute("alt", name);
  cardElement.querySelector(".card__title").textContent = name;

  // Слушатели на лайк, удаление и просмотр картинок
  likeButton.addEventListener('click', toggleLike);
  deleteButton.addEventListener('click', deleteCard);
  viewPhoto.addEventListener('click', function() {
    popupView.style = 'background-color: rgba(0, 0, 0, 0.9)';
    popupPhoto.setAttribute('src', link);
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

// Рендер начального массива
renderCards(initialCards);


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
    popupClose(event.target.closest('.popup'));
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
const popupAddForm = document.querySelector(".popup__form-add");
const inputPlace = document.querySelector(".popup__input_place_name");
const inputLink = document.querySelector(".popup__input_place_link");
const addButton = document.querySelector(".profile__button-add");

// Слушатель на кнопке добавления
addButton.addEventListener('click', () => popupOpen(popupAdd));

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

popupAddForm.addEventListener('submit', handleFormAddSubmit);