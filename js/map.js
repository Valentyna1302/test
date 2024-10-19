//*?Завдання 1: Подвоєння значень масиву
// Напишіть функцію, яка приймає масив чисел і повертає новий масив, у якому кожен елемент подвоєний.

// const numbers = [1, 2, 3, 4, 5];

// // Ваш код тут
// const doubled = numbers.map(number => number * 2);

// console.log(doubled); // [2, 4, 6, 8, 10]

//*? Завдання 2: Перетворення масиву об'єктів
// Дано масив об'єктів, кожен з яких містить ім'я та вік. Використовуючи map(), перетворіть цей масив на масив рядків у форматі "Ім'я: Вік"

// const people = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Alice', age: 22 },
// ];

// // Ваш код тут
// const formattedPeople = people.map(humen => `${humen.name}: ${humen.age}`);

// console.log(formattedPeople);
// // ["John: 25", "Jane: 30", "Alice: 22"]

//*? Завдання 3: Перетворення рядків на числа
// Дано масив рядків, кожен з яких містить числове значення. Перетворіть цей масив рядків у масив чисел.

// const stringNumbers = ['1', '2', '3', '4', '5'];

// // Ваш код тут
// const numbers = stringNumbers.map(number => Number(number));

// console.log(numbers); // [1, 2, 3, 4, 5]

//*? Завдання 4: Підняття до степеня
// Дано масив чисел. Створіть новий масив, у якому кожне число піднесено до квадрату.

// const numbers = [1, 2, 3, 4, 5];

// // Ваш код тут
// const squared = numbers.map(number => number * number);

// console.log(squared); // [1, 4, 9, 16, 25]

//*? Завдання 5: Додавання ключа до об'єктів
// Дано масив об'єктів. Кожен об'єкт містить тільки ім'я людини. Використовуючи map(), додайте до кожного об'єкта новий ключ id, значенням якого буде індекс цього об'єкта в масиві.

// const people = [{ name: 'John' }, { name: 'Jane' }, { name: 'Alice' }];

// // Ваш код тут
// const peopleWithId = people.map((person, index) => ({
//   ...person,
//   id: index,
// }));

// console.log(peopleWithId);
// // [{ name: 'John', id: 0 }, { name: 'Jane', id: 1 }, { name: 'Alice', id: 2 }]

// Пояснення:
// Використовуючи map(), ми перебираємо кожен об'єкт у масиві people.
// Для кожного об'єкта ми створюємо новий об'єкт за допомогою синтаксису { ...person, id: index }.
// Оператор ...person копіює всі існуючі властивості з об'єкта person у новий об'єкт.
// Додаємо нову властивість id з індексом поточного елемента index як значенням.
// Таким чином, результат буде саме таким, як ви очікували: [{ name: 'John', id: 0 }, { name: 'Jane', id: 1 }, { name: 'Alice', id: 2 }].

//*? Завдання 6: Перетворення імен на великі літери
// Дано масив рядків з іменами. Використовуючи map(), перетворіть кожне ім'я на велике (всі літери мають бути великими).

// const names = ['john', 'jane', 'alice'];

// // Ваш код тут
// const upperCaseNames = names.map(name => name.toUpperCase());

// console.log(upperCaseNames);
// // ["JOHN", "JANE", "ALICE"]

//*? Завдання 2: Заміна об'єктів масиву на значення ключа
// Дано масив об'єктів, кожен з яких містить ключ value. Використовуючи map(), створіть новий масив, який міститиме лише значення цього ключа з кожного об'єкта.

// const items = [{ value: 10 }, { value: 20 }, { value: 30 }];

// // Ваш код тут
// const values = items.map(item => item.value);

// console.log(values);
// // [10, 20, 30]

//*? Завдання 3: Зменшення чисел у масиві на 10%
// Дано масив чисел. Використовуючи map(), створіть новий масив, де кожне число зменшене на 10%.

// const prices = [100, 200, 300, 400];

// // Ваш код тут
// const discountedPrices = prices.map(price => price * 0.9);

// console.log(discountedPrices);
// // [90, 180, 270, 360]

//*? Завдання 4: Перетворення об'єктів на рядки JSON
// Дано масив об'єктів. Використовуючи map(), створіть новий масив, у якому кожен об'єкт перетворено на рядок JSON.

// const objects = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
// ];

// // Ваш код тут
// const jsonStrings = objects.map(object => JSON.stringify(object));

// console.log(jsonStrings);
// // ['{"name":"John","age":25}', '{"name":"Jane","age":30}']

// Пояснення:
// JSON.stringify(object): Ця функція перетворює об'єкт на рядок у форматі JSON.
// Метод map(): Ми використовуємо map(), щоб створити новий масив jsonStrings, де кожен елемент — це JSON-рядок, отриманий з об'єкта.

//*? Завдання 5: Додавання суфікса до чисел
// Дано масив чисел. Використовуючи map(), перетворіть кожне число на рядок з суфіксом -kg.

// const weights = [50, 60, 70];

// // Ваш код тут
// const weightsWithSuffix = weights.map(weight => weight + '-kg');

// console.log(weightsWithSuffix);
// // ["50-kg", "60-kg", "70-kg"]

//*?Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map(car => {
//         return {
//             ...car, //*Оператор розпакування ...car копіює всі властивості існуючого автомобіля в новий об'єкт.
//             price: car.price * (1 - discount), //*Властивість price перезаписується,
//         }
//     })
// }

// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));

//*? Задача

// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

//*? Збільшуємо кількість годин гравця за id

// const playerIdToUpdate = "player-3";

// const updatePlayers = players.map((player) => {
//     if(player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100
//         }
//     }
//     return player;
// })

// console.table(updatePlayers);

//*? Задача. Поверни масив поштових адрес користувачів

// const getUserEmails = users => {
//   return users.map(element => element.email);
// };

// console.log(
//   getUserEmails([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       skills: ['ex', 'culpa', 'nostrud'],
//       gender: 'male',
//       age: 27,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       skills: ['non', 'amet', 'ipsum'],
//       gender: 'male',
//       age: 38,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//     },
//   ])
// );

//*?Дано масив рядків ["apple", "banana", "cherry"]. За допомогою map створіть новий масив об'єктів з виглядом { fruit: "apple" }.

// const fruits = ['apple', 'banana', 'cherry'];
// const FruitObjects= fruits.map(fruit => {
//   return {
//     fruit: fruit,
//   };
// });

// console.log(FruitObjects);

//* Коротше
// const fruits = ['apple', 'banana', 'cherry'];
// const fruitObjects = fruits.map(fruit => ({ fruit: fruit }));
// console.log(fruitObjects);

//* Ще коротше
// const fruitObjects = fruits.map(fruit => ({ fruit }));
// console.log(fruitObjects);

// const getUserNames = users => users.map(user => user.name);

// console.log(
//   getUserNames([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       balance: 2811,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       balance: 3821,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       balance: 3793,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       balance: 2278,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       balance: 3951,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       balance: 1498,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       balance: 2764,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

//*? ************FlatMap()*************

//*? Розбити рядки на масиви слів

// const phrases = ['Hello world', 'JavaScript is awesome'];
// const words = phrases.flatMap(phrase => phrase.split(' '));
// console.log(words);

// Виведе: ["Hello", "world", "JavaScript", "is", "awesome"]

//* з map цього би не получилось, тому що ри першій ітерації:
// phrase дорівнює "Hello world".
// Виконується phrase.split(" "), що розбиває рядок на масив слів: ["Hello", "world"].
// При другій ітерації:
// phrase дорівнює "JavaScript is awesome".
// Виконується phrase.split(" "), що розбиває рядок на масив слів: ["JavaScript", "is", "awesome"].

//*? Розгорнути вкладені масиви

// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const newArr = arr.flatMap(element => element);
// console.log(newArr);

//*? Створити масив об'єктів з декількох властивостей

// const products = [
//   { name: 'Laptop', features: ['Touchscreen', '16GB RAM'] },
//   { name: 'Phone', features: ['5G', '128GB Storage'] },
// ];

// const allFeatures = products.flatMap(product => product.features);
// console.log(allFeatures);

// //*? Дублювати кожен елемент масиву
// const numbers = [1, 2, 3];
// const dupliceted = numbers.flatMap(number => [number, number]);
// console.log(dupliceted);

//*? *************filter, find ***********

//*? фільтр по кольору очей
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };

// console.log(
//   getUsersWithEyeColor(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//       },
//     ],
//     'green'
//   )
// );

//*? фільтер по віку

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age <= maxAge);
// };

// console.log(
//   getUsersWithAge(
//     [
//       {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male',
//         age: 37,
//       },
//       {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female',
//         age: 34,
//       },
//       {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male',
//         age: 24,
//       },
//       {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female',
//         age: 21,
//       },
//       {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male',
//         age: 27,
//       },
//       {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male',
//         age: 38,
//       },
//       {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female',
//         age: 39,
//       },
//     ],
//     20,
//     30
//   )
// );

// const getUsersWithFriend = (users, friendName) =>
//   users.filter(user => user.friends.includes(friendName));

// const allUsers = [
//   {
//     name: 'Moore Hensley',
//     friends: ['Sharron Pace'],
//   },
//   {
//     name: 'Sharlene Bush',
//     friends: ['Briana Decker', 'Sharron Pace'],
//   },
//   {
//     name: 'Ross Vazquez',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//   },
//   {
//     name: 'Elma Head',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//   },
//   {
//     name: 'Carey Barr',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//   },
//   {
//     name: 'Blackburn Dotson',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//   },
//   {
//     name: 'Sheree Anthony',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//   },
// ];

// console.log(getUsersWithFriend(allUsers, 'Briana Decker'));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, 'Goldie Gentry'));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // []

// const sortByDescendingFriendCount = users =>
//   users.toSorted(
//     (firstUser, secondUser) =>
//       secondUser.friends.length - firstUser.friends.length
//   );
// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: 'Moore Hensley',
//       friends: ['Sharron Pace'],
//       gender: 'male',
//     },
//     {
//       name: 'Sharlene Bush',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       gender: 'female',
//     },
//     {
//       name: 'Ross Vazquez',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       gender: 'male',
//     },
//     {
//       name: 'Elma Head',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       gender: 'female',
//     },
//     {
//       name: 'Carey Barr',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       gender: 'male',
//     },
//     {
//       name: 'Blackburn Dotson',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       gender: 'male',
//     },
//     {
//       name: 'Sheree Anthony',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       gender: 'female',
//     },
//   ])
// );
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .reduce((total, user) => {
      return total + user.balance;
    }, 0);

const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, 'male')); // 12053

console.log(getTotalBalanceByGender(clients, 'female')); // 8863
