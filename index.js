// import PopupWithForm from './components/PopupWithForm.js';
// import UserInfo from './components/UserInfo.js';
//import Api from './components/Api.js';

let tg = window.Telegram.WebApp; // создаем объект телеграмма

tg.expand();
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#0a85d8';

tg.BackButton.show();
tg.onEvent('backButtonClicked', function () {
  console.log('cryptoShagan');
  window.history.back();
});
// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;
// usercard.appendChild(p); // вставляем параграф с данными пользователя

// Telegram.WebApp.onClick('mainButtonClicked', function () {
//   tg.sendData(); // отправляем данные
// });
