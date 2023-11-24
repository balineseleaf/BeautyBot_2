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

// p.innerText = `${tg.initDataUnsafe?.user?.first_name}
// ${tg.initDataUnsafe?.user?.last_name}`;
// usercard.appendChild(p); // вставляем параграф с данными пользователя

// Telegram.WebApp.onClick('mainButtonClicked', function () {
//   tg.sendData(); // отправляем данные
// });

// tg.MainButton.setParams({
//   text: "Отправить данные"
// });

// Получаем ссылки на поля и кнопку сабмита
const nameInput = document.getElementById('name-input');
const numberInput = document.getElementById('phoneNumber');
const genderInput1 = document.getElementById('m_gender');
const genderInput2 = document.getElementById('f_gender');
const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submitButton');

// Функция, проверяющая, заполнены ли все обязательные поля
function checkForm() {
  if (
    numberInput.value !== '' &&
    nameInput.value !== '' &&
    emailInput.value !== '' &&
    genderInput2.value !== '' &&
    genderInput1.value !== ''
  ) {
    submitButton.disabled = false;
    tg.MainButton.show(); // Если все поля заполнены, активируем кнопку сабмита
  } else {
    submitButton.disabled = true;
    tg.MainButton.hide(); // Иначе оставляем кнопку неактивной
  }
}

// Добавляем обработчики событий для каждого поля ввода
nameInput.addEventListener('input', checkForm);
emailInput.addEventListener('input', checkForm);
genderInput1.addEventListener('change', checkForm);
genderInput2.addEventListener('change', checkForm);
numberInput.addEventListener('input', checkForm);

// Отправляем данные
// Telegram.WebApp.onClick('mainButtonClicked', function () {
//   tg.sendData('Данные отправляем тут'); // отправляем данные
// });
