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

Telegram.WebApp.onEvent('mainButtonClicked', function () {
  tg.MainButton.textColor = '#000000';
});

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p); // вставляем параграф с данными пользователя

// Telegram.WebApp.onEvent('mainButtonClicked', function () {
//   tg.sendData(); // отправляем данные
// });
