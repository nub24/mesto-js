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




