export default class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
    //this._authorization = config.headers.authorization;// token
  }

  getUserInfo() {
    return fetch(`${this._url}/clientData`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // Функция для получения данных с сервера о текстах на разных языках
  switchLanguage() {
    const selectedLanguage = document.getElementById('languageSelector').value;
    return fetch(`${this._url}/language/${selectedLanguage}`, {
      // понять какой язык
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }
}
