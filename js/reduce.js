// Метод reduce() в JavaScript є одним з найпотужніших інструментів для обробки масивів. Він використовується для послідовного оброблення кожного елемента масиву з метою обчислення одного результату, наприклад, суми, добутку, масиву, об'єкта тощо.

// array.reduce(
//   callback(accumulator, currentValue, currentIndex, array),
//   initialValue
// );

// Аргументи

// callback: Це функція, яка виконується на кожному елементі масиву. Вона приймає такі аргументи:

// accumulator: Акумулятор, що зберігає результат попереднього виконання функції callback.Його значення оновлюється під час кожної ітерації.

// currentValue: Поточний елемент масиву, що обробляється.

// currentIndex (необов'язковий): Індекс поточного елемента.

// array(необов'язковий): Масив, який обробляється.

// initialValue (необов'язковий): Початкове значення для accumulator. Якщо його не вказано, перший елемент масиву використовується як початкове значення, і обробка починається з другого елемента.

// 1. Обчислення суми масиву

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // 15

// 2. Обчислення добутку масиву. Тут початкове значення accumulator встановлено на 1, і на кожній ітерації воно множиться на currentValue.

// const numbers = [1, 2, 3, 4, 5];

// const product = numbers.reduce((accumulator, currentValue) => {
//   return accumulator * currentValue;
// }, 1);

// console.log(product); // 120

// 3. Об'єднання масиву об'єктів в один об'єкт

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];

// const peopleByName = people.reduce((accumulator, person) => {
//   accumulator[person.name] = person.age;
//   return accumulator;
// }, {});

// console.log(peopleByName);
// // { Alice: 25, Bob: 30, Charlie: 35 }

// 4. Підрахунок кількості входжень елементів у масиві

// const letters = ['a', 'b', 'a', 'c', 'b', 'a'];

// const count = letters.reduce((accumulator, letter) => {
//   accumulator[letter] = (accumulator[letter] || 0) + 1;
//   return accumulator;
// }, {});

// console.log(count);
// // { a: 3, b: 2, c: 1 }

// Пояснення:

// accumulator є об'єктом, що підраховує кількість кожного символу.
// Якщо символ уже присутній в об'єкті, його значення збільшується на 1, інакше воно ініціалізується як 1.
