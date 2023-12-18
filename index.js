import { langArr } from './utils/language.js';

let tg = window.Telegram.WebApp; // создаем объект телеграмма
tg.expand();
tg.MainButton.color = '#7371e0';
tg.MainButton.text = 'Сохранить';
tg.BackButton.show();
tg.onEvent('backButtonClicked', function () {
  window.history.back();
  tg.BackButton.hide();
});

//-----------------------------------------------------------------------------------------------------//

const select = document.querySelector('.language-selector');
select.addEventListener('change', changeURLLanguage);
const allLang = ['ru', 'en'];

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  select.value = hash;
  for (let key in langArr) {
    let elem = document.querySelector('.lang-' + key);
    if (elem) {
      // проверка на существование элемента в целом
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();

//-------------------------------------------------------------------------------------------------//

// Telegram.WebApp.onClick('mainButtonClicked', function () {
//   tg.sendData(); // отправляем данные
// });

// tg.MainButton.setParams({
//   text: "Отправить данные"
// });

//-----------------------------------------------------------------------------------------------

// const closeButton = document.getElementById('close-btn');
// closeButton.addEventListener('click', function () {
//   window.history.back();
// });
