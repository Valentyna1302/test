// const numbers = [1, 2, 3, 4, 5];

// // Ваш код тут
// const doubled = numbers.map(number => number * 2);

// console.log(doubled); // [2, 4, 6, 8, 10]

// const people = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Alice', age: 22 },
// ];

// // Ваш код тут
// const formattedPeople = people.map(humen => `${humen.name}: ${humen.age}`);

// console.log(formattedPeople);
// // ["John: 25", "Jane: 30", "Alice: 22"]

// const stringNumbers = ['1', '2', '3', '4', '5'];

// // Ваш код тут
// const numbers = stringNumbers.map(number => Number(number));

// console.log(numbers); // [1, 2, 3, 4, 5]

// const numbers = [1, 2, 3, 4, 5];

// // Ваш код тут
// const squared = numbers.map(number => number * number);

// console.log(squared); // [1, 4, 9, 16, 25]

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
