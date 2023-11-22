import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
//import Api from './components/Api.js';

let tg = window.Telegram.WebApp; // создаем объект телеграмма

tg.expand(); // на весь экран сайт

// создается тг, а не сайтом эта кнопка
tg.MainButton.textColor = '#FFFFFF'; // изменим текст кнопки
tg.MainButton.color = '#0a85d8';
let item = '';

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
const buttonEditProfile = document.getElementById('btn-edit-profile');
const buttonClosePopup = document.getElementById('btn-close-popup');
export const formEditProfile = document.querySelector(
  '.popup__form_edit-profile'
);

btn1.addEventListener('click', function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText('Вы выбрали товар 1!');
    item = '1';
    tg.MainButton.show();
  }
});

btn2.addEventListener('click', function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText('Вы выбрали товар 2!');
    item = '2';
    tg.MainButton.show();
  }
});

// Функция, которая передаст данные на сайт
// Telegram.WebApp.onEvent('mainButtonClicked', function () {
//   tg.sendData(item); // отправляем данные
// });

let usercard = document.getElementById('usercard');
let p = document.createElement('p');
usercard.appendChild(p); // вставляем параграф с данными пользователя

const profileUpdateProfile = document.getElementById('popup');
const profileName = document.querySelector('.profile_name');
const profileGender = document.querySelector('.profile_gender');
const profileNumber = document.querySelector('.profile_number');
const profileEmail = document.querySelector('.profile_email');
const userInfo = new UserInfo({
  profileName,
  profileGender,
  profileNumber,
  profileEmail,
});

const popupForEditProfile = new PopupWithForm(
  profileUpdateProfile,
  addProfileInfo
);
popupForEditProfile.setEventListeners();

Telegram.WebApp.onEvent('mainButtonClicked', function () {
  tg.MainButton.textColor = '#000000';
});

buttonEditProfile.addEventListener('click', function () {
  popupForEditProfile.openPopup();
  const userData = userInfo.getUserInfo();
  console.log('1', userData);
  //profileUpdateProfile.setInputValues(userData); // и дальше нужно будет передать эти данные в форму
});

buttonClosePopup.addEventListener('click', function () {
  popupForEditProfile.closePopup();
});

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p); // вставляем параграф с данными пользователя

// Telegram.WebApp.onEvent('mainButtonClicked', function () {
//   tg.sendData(); // отправляем данные
// });

//Функции добавления информации пользователя и добавления карточки в профиль
function addProfileInfo() {}

// собрать значения из чекбокса
// const form = document.getElementById('formEditProfile');

// form.addEventListener('submit', function (event) {
//   var checkedValue = document.querySelector(
//     'input[name="gender"]:checked'
//   ).value;
//   console.log(checkedValue);
//   event.preventDefault();
// });
