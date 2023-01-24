

function handleFormAddSubmit(evt) {
  

  popupAdd.classList.remove('popup_active');
}

addButton.addEventListener('click', popupAddOpen);
popupAddForm.addEventListener('submit', handleFormAddSubmit);