export default class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
    //this._authorization = config.headers.authorization;// token
  }

  getUserInfo() {
    return fetch(`${this._url}/clientData/509294090`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // // Функция для получения данных с сервера о текстах на разных языках
  // switchLanguage() {
  //   const selectedLanguage = document.getElementById('languageSelector').value;
  //   const data = {
  //     language: selectedLanguage,
  //   };
  //   return fetch(`${this._url}/language/${selectedLanguage}`, {
  //     method: 'POST',
  //     headers: this._headers,
  //     body: JSON.stringify(data),
  //   }).then(this._handleResponse);
  // }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }
}
