// import PopupWithForm from './components/PopupWithForm.js';
// import UserInfo from './components/UserInfo.js';
//import Api from './components/Api.js';

let tg = window.Telegram.WebApp; // создаем объект телеграмма
tg.expand();

// tg.MainButton.textColor = '#FFFFFF';
// tg.MainButton.color = '#0a85d8';

// let currentPage = window.location.href;

// if (currentPage !== 'http://127.0.0.1:5500/index.html') {
//   tg.BackButton.show();
//   tg.onEvent('backButtonClicked', function () {
//     window.history.back();
//   });
// } else {
//   tg.BackButton.hide();
// }
tg.BackButton.show();
tg.onEvent('backButtonClicked', function () {
  window.history.back();
  tg.BackButton.hide();
  // tg.close();
});

const closeButton = document.getElementById('close-btn');
closeButton.addEventListener('click', function () {
  window.history.back();
});

// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;
// usercard.appendChild(p); // вставляем параграф с данными пользователя

// Telegram.WebApp.onClick('mainButtonClicked', function () {
//   tg.sendData(); // отправляем данные
// });
