//Переменные для формы редактирования
let popupEdit = document.querySelector(".popup_edit");
let popupEditForm = document.querySelector(".popup__form-edit");
let inputName = document.querySelector(".popup__input_name_profile-name");
let inputDescription = document.querySelector(".popup__input_name_profile-description");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let editButton = document.querySelector(".profile__button-edit");

//Закрытие попапов
let closePopupButtonsArr = Array.from(document.querySelectorAll(".popup__button-close"));
  
closePopupButtonsArr.forEach(element => {
  element.closest.classList.remove('popup_active');
});
//Функция закрытия popup
function popupClose(event) {
  event.target.classList.remove('popup_active');
}


//Функция открытия окна редактирования
function popupEditOpen() {
  //Значения инпутов при инициализации popup-окна.
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;

  popupEdit.classList.add("popup_active");
}

//Функция отправки формы редактирования
function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  popupClose();
}

editButton.addEventListener("click", popupEditOpen);
popupEditForm.addEventListener("submit", handleFormEditSubmit);
closePopupButtonsArr('click', popupClose);
// closePopupButton.addEventListener("click", popupClose);

// Переменные для формы добавления
let popupAdd = document.querySelector(".popup_add");
let popupAddForm = document.querySelector(".popup__form-add");
let inputPlace = document.querySelector(".popup__input_placename-name");
let inputLink = document.querySelector(".popup__input_placename_link");
let addButton = document.querySelector(".profile__button-add");

function popupAddOpen() {
  popupAdd.classList.add('popup_active');
}

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const addObj = {};
  addObj.name = inputPlace.value;
  addObj.link = inputLink.value;
  
  renderCard([addObj]);

  inputPlace.value = '';
  inputLink.value = '';

  popupAdd.classList.remove('popup_active');
}

addButton.addEventListener('click', popupAddOpen);
popupAddForm.addEventListener('submit', handleFormAddSubmit);