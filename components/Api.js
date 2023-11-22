// export default class Api {
//   constructor(config) {
//     this._url = config.url; // url
//     this._headers = config.headers; // заголовок
//     this._authorization = config.headers.authorization; // token
//   }

//   getUserData() {
//     return fetch(`${this._url}/users/me`, {
//       method: 'GET',
//       headers: {
//         authorization: this._authorization,
//       },
//     }).then(this._handleResponse);
//   }

//   setUpdateUserData(userData) {
//     console.log('1', userData);
//     return fetch(`${this._url}/users/me`, {
//       method: 'PATCH',
//       headers: {
//         authorization: this._authorization,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name: userData.name,
//         about: userData.about,
//       }),
//     }).then(this._handleResponse);
//   }

//   _handleResponse(res) {
//     if (res.ok) {
//       return res.json(); // Метод json читает ответ от сервера в формате json
//       // и возвращает промис.
//       //Из этого промиса потом можно доставать нужные нам данные.
//     } else {
//       return Promise.reject(`Ошибка ${res.status}`);
//     }
//   }
// }
