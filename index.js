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

// const select = document.querySelector('.language-selector');
// select.addEventListener('change', changeURLLanguage);
// const allLang = ['ru', 'en'];

// function changeURLLanguage() {
//   let lang = select.value;
//   location.href = window.location.pathname + '#' + lang;
//   location.reload();
// }

// function changeLanguage() {
//   let hash = window.location.hash;
//   hash = hash.substring(1);
//   if (!allLang.includes(hash)) {
//     location.href = window.location.pathname + '#en';
//     location.reload();
//   }
//   select.value = hash;
//   for (let key in langArr) {
//     let elem = document.querySelector('.lang-' + key);
//     if (elem) {
//       // проверка на существование элемента в целом
//       elem.innerHTML = langArr[key][hash];
//     }
//   }
// }

// changeLanguage();

const allLangs = ['ru', 'en'];
let currentLang =
  localStorage.getItem('language') || checkBrowserLang() || 'ru';
const langButtons = document.querySelectorAll('[data-btn]');
const currentPathName = window.location.pathname;

let currentText = {};

function checkPagePathName() {
  switch (currentPathName) {
    case '/index.html':
      currentText = langArr;
      break;
    case '/preprofile.html':
      currentText = anotherlangArr;
      break;

    default:
      currentText = langArr;
      break;
  }
}
checkPagePathName();

function changeLang() {
  for (const key in currentText) {
    const elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentText[key][currentLang];
    }
  }
}
changeLang();

langButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    currentLang = event.target.dataset.btn;
    localStorage.setItem('language', event.target.dataset.btn);
    resetActiveClass(langButtons, 'switch-language-btn-active');
    btn.classList.add('switch-language-btn-active');
    changeLang();
  });
});

function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass);
  });
}

function checkActiveLanguageButton() {
  switch (currentLang) {
    case 'ru':
      document
        .querySelector('[data-btn="ru"]')
        .classList.add('switch-language-btn-active');
      break;
    case 'en':
      document
        .querySelector('[data-btn="en"]')
        .classList.add('switch-language-btn-active');
      break;
    default:
      document
        .querySelector('[data-btn="ru"]')
        .classList.add('switch-language-btn-active');
      break;
  }
}
checkActiveLanguageButton();

// Проверка языка браузера
function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some((elem) => {
    return elem === navLang;
  });
  if (result) {
    return navLang;
  }
}

console.log('navigator.language', checkBrowserLang());
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
