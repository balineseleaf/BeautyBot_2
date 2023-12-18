import Api from '../utils/Api.js';

const apiProfile = new Api({
  url: 'http://localhost:5000',
  headers: {
    //authorization: '79aff481-506e-4c4c-8308-be7829df1002',
    'Content-Type': 'application/json',
  },
});

//получение инфо о пользователе
function getInfoAboutUser() {
  const userName = document.getElementById('userName');
  const userPhone = document.getElementById('userPhone');
  const userEmail = document.getElementById('userEmail');
  const userGender = document.getElementById('userGender');
  apiProfile
    .getUserInfo()
    .then((clientData) => {
      const clientId = clientData.clientId;
      userName.textContent = 'Ваше имя:   ' + clientData.clientName;
      userPhone.textContent = 'Ваш телефон:   ' + clientData.clientPhone;
      userEmail.textContent = 'Ваша почта:   ' + clientData.clientEmail;
      userGender.textContent = 'Ваш пол:   ' + clientData.clientGender;
    })
    .catch((error) => console.log(error));
}
console.log(clientId);
getInfoAboutUser();
