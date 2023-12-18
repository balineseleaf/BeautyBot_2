import Api from '../utils/Api.js';

const api = new Api({
  url: 'http://localhost:5000',
  headers: {
    //authorization: '79aff481-506e-4c4c-8308-be7829df1002',
    'Content-Type': 'application/json',
  },
});

//получение инфо о пользователе
function getInfoAboutUser() {
  const testElement = document.getElementById('testfromserver');
  api
    .getUserInfo()
    .then((clientData) => {
      console.log('идет с сервера', clientData);
      testElement.textContent = clientData.clientName;
    })
    .catch((error) => console.log(error));
}

getInfoAboutUser();
