//; Завдання 4
// #region
// Напиши скрипт управління формою логіна.n

/* відправлення форми form.login-form повинна відбуватися за подією submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


На що буде звертати увагу ментор при перевірці:

Прослуховується подія submit
Під час відправлення форми сторінка не перезавантажується
Якщо при сабміті у формі є незаповнені поля, виводиться alert
При сабміті в консоль виводиться об’єкт з двома властивостями, де ключі — це ім’я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях
Після сабміту елементи форми очищаються */

/*//? 4 завдання - всі інпути заповнені. Тільки тоді виводимо об’єкт у консоль. І це має бути саме об’єкт з двома властивостями, не рядок. */

/*  const formData = new FormData(formElem);
  const userData = Object.fromEntries(formData.entries()); */

// #endregion

const formElem = document.querySelector(".login-form");

const btnElem = document.querySelector(".form-btn");
const labelElem = document.querySelector(".form-label");
const inputElem = document.querySelector("#user-email");

btnElem.textContent = "Log in";

formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  const userData = {
    email: formElem.elements.email.value.trim(),
    password: formElem.elements.password.value.trim(),
  };

  if (userData.email === "" || userData.password === "") {
    return alert("All form fields must be filled in");
  }

  console.log(userData);

  formElem.reset();
});
