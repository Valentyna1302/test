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

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(totalScore);
// console.log(averageScore);

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

//*? ********** toSorted() **********

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
// ];

// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAlphabeticalOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);

//*? ************* Ланцюжки методів ************

//Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест

// const students = [
//   { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
//   { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
//   { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
//   { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
// ];

// const names = students
//   .toSorted((a, b) => a.score - b.score)
//   .map(student => student.name);
// console.log(names);

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index) //* фільтрації унікальних елементів
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

//*? Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. Використовуй ланцюжок методів.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(names);
