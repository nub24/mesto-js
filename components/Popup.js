export default class Popup {
  constructor (popup) {
    this._popup = popup;
    this._popupButtonClose = this._popup.querySelector('.popup__button-close');
  }

  open () {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close = () => {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove('popup_active');
  }

  _handleEscClose = (e) => {
    e.key === "Escape" &&  this.close();
    }
  

  _handleOverlayClose = (e) => {
    e.target.classList.contains('popup') &&  this.close();
    }


  setEventListeners () {
    this._popup.addEventListener('click', this._handleOverlayClose);
    this._popupButtonClose.addEventListener('click', this.close)
  }
}