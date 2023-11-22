// Класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
// Принимает в конструктор единственный параметр — селектор попапа.
// Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
// Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
// Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке
// закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы.

export default class Popup {
  constructor(popup) {
    this.popup = popup; //popup
    //this._handleEscClose = this._handleEscClose.bind(this); //без этого не работает закрытие на esc, контекст теряется
  }

  openPopup() {
    this.popup.classList.add('popup_opened');
  }

  closePopup() {
    this.popup.classList.remove('popup_opened');
  }
  setEventListeners() {
    // закрытие на overlay
    this.popup.addEventListener('mousedown', (evt) => {
      if (
        evt.target.classList.contains('popup') ||
        evt.target.classList.contains('popup__close')
      ) {
        this.closePopup();
      }
    });
  }
}
