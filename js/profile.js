// Получаем ссылки на поля и кнопку сабмита
const nameInput = document.getElementById('name-input');
const numberInput = document.getElementById('phoneNumber');
const genderInput1 = document.getElementById('m_gender');
const genderInput2 = document.getElementById('f_gender');
const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submitButton');

// Отправляем данные
// Telegram.WebApp.onClick('mainButtonClicked', function () {
//   tg.sendData('Данные отправляем тут'); // отправляем данные
// });
// Находим элементы ошибок
const nameError = document.getElementById('name-input-error');
const numberError = document.getElementById('phoneNumber-error');
const emailError = document.getElementById('email-input-error');
const radioInputError = document.getElementById('gender-error');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  validateForm();
});

// Валидация
function validateForm() {
  const fields = [nameError, emailError, numberError, radioInputError];
  fields.forEach((field) => field.classList.remove('error-visible'));

  const errors = [];

  // проверяем поле имени
  if (nameInput.value.trim() === '') {
    errors.push(nameError);
  }

  // проверяем поле email
  if (emailInput.value.trim() === '') {
    errors.push(emailError);
  } else if (!validateEmail(emailInput.value.trim())) {
    errors.push(emailError);
  }

  // проверяем поле номера телефона
  if (numberInput.value.trim() === '') {
    errors.push(numberError);
  } else if (!validatePhone(numberInput.value.trim())) {
    errors.push(numberError);
  }

  // проверяем состояние чекбокса
  const radioButtons = document.getElementsByName('gender');
  let isChecked = false;
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      isChecked = true;
      break;
    }
  }

  if (isChecked === false) {
    errors.push(radioInputError);
  }

  // if (!genderInput2.checked) {
  //   errors.push(radioInputError2);
  // }

  errors.forEach((error) => error.classList.add('error-visible'));
  return errors;
}

function validateEmail(email) {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
  return regex.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const regex =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  return regex.test(phone);
}

// Функция, проверяющая, заполнены ли все обязательные поля
function checkForm() {
  if (
    numberInput.value !== '' &&
    nameInput.value !== '' &&
    emailInput.value !== '' &&
    (genderInput1.checked || genderInput2.checked)
  ) {
    // nameError.classList.contains('error-visible') &&
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// Добавляем обработчики событий для каждого поля ввода
nameInput.addEventListener('input', checkForm);
emailInput.addEventListener('input', checkForm);
genderInput1.addEventListener('change', checkForm);
genderInput2.addEventListener('change', checkForm);
numberInput.addEventListener('input', checkForm);

// сбор данных с формы
const form = document.getElementById('formEditProfile');

//Получаем данные из формы
function sendDataForm() {
  const formData = {
    clientName: document.getElementById('name-input').value,
    clientGender: document.querySelector('input[name="gender"]:checked').value,
    clientPhone: document.getElementById('phoneNumber').value,
    clientEmail: document.getElementById('email-input').value,
  };
  console.log(formData);
}

submitButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  sendDataForm();
});
