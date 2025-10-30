//; Завдання 1
// #region
/* З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


На що буде звертати увагу ментор при перевірці:

Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
У консолі має бути виведено наступне повідомлення: */
// #endregion

const catElem = document.querySelector("ul#categories");
const items = catElem.querySelectorAll(".item");

const catTotal = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${catTotal.length}`);

for (let item of items) {
  const catName = item.firstElementChild.textContent;
  const elemTotal = item.lastElementChild.children.length;

  console.log(`Category: ${catName}`);
  console.log(`Elements: ${elemTotal}`);
}
