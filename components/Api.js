// class Api {
//   constructor(config) {
//     this._url = config.url; // url
//     // this._headers = config.headers; // заголовок
//     // this._authorization = config.headers.authorization; // token
//   }

//   getUserData() {
//     return fetch(``, {
//       method: 'GET',
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

// // const api = new Api({
// //   url: '',
// //   headers: {
// //     authorization: '',
// //     'Content-Type': 'application/json',
// //   },
// // });

// export default api;
