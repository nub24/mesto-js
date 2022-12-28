'use strict';

let likeButtons = document.querySelectorAll('.like-button');


// Реализация нажатия/отжатия лайка на карточке
for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].setAttribute('src', './images/unliked-button.svg');
  likeButtons[i].addEventListener('click', function() {
    if (likeButtons[i].getAttribute('src') === './images/unliked-button.svg') {
      likeButtons[i].setAttribute('src', './images/liked-button.svg');
    } else {
      likeButtons[i].setAttribute('src', './images/unliked-button.svg');
    }
  });
}




