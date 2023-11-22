// // класс UserInfo отвечает за управление отображением информации о пользователе на странице
// //Принимает в конструктор объект с селекторами двух элементов:
// //элемента имени пользователя и элемента информации о себе.
// export default class UserInfo {
//   constructor({ profileName, profileGender, profileNumber, profileEmail }) {
//     this._name = profileName;
//     this._gender = profileGender;
//     this._number = profileNumber;
//     this._email = profileEmail;
//   }

//   // cодержит публичный метод getUserInfo, который возвращает объект с данными пользователя
//   // этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии
//   // есть метод getUserInfo который возвращает текущие значения из разметки
//   // то есть textContent свойство двух элементов в виде объекта

//   //Фукнция getUserInfo должна достать значения из элементов профиля и вернуть объект
//   getUserInfo() {
//     return {
//       name: this._name.textContent,
//       gender: this._gender.textContent,
//       number: this._number.textContent,
//       email: this._email.textContent,
//     }; // вернет нам объект c 4 полями, мы получим данные с экрана и перерадим
//     // в index.js  для константы userData и дальше будем ее уже использовать
//   }

//   // cодержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу
//   // setUserInfo должен принять объект данных и проставить из него значения в элементы профиля
//   setUserInfo(userData) {
//     this._name.textContent = userData.name;
//     this._gender.textContent = userData.gender;
//     this._number.textContent = userData.number;
//     this._email.textContent = userData.email;
//   }
// }
