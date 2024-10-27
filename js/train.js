// Напиши функцію, котра приймає масив користувачів і id.
// У масиві користувачів потрібно знайти людину з заданим id
// і повернути його ім'я. Якщо користувача не було знайдено
// функція повертає повідомлення
// "Користувача з таким id не знайдено"

// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Pete' },
//   { id: 3, name: 'Mary' },
// ];

// function findUser(arr, id) {
//     const user = arr.find(item => item.id === id);
//     if (user) {
//         return user.name;
//     } else {
//         return
//     }
// }

// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.
// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: 'Basic HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'GitHub Desctop'],
//   },
//   {
//     name: 'Intermediate HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'Git', 'Terminal'],
//   },
//   {
//     name: 'Basic JavaScript',
//     topics: [
//       'VSCode',
//       'Type system',
//       'Loops',
//       'Function',
//       'Git',
//       'Conditions',
//       'Classes',
//       'GitHub',
//       'DOM',
//     ],
//   },
//   {
//     name: 'Intermediate JavaScript',
//     topics: [
//       'VSCode',
//       'NPM',
//       'Bundlers',
//       'Transpiling',
//       'Git',
//       'Promises',
//       'AJAX',
//       'GitHub',
//     ],
//   },
// ];

// const unicTopic = courses
//   .flatMap(cours => cours.topics)
//   .filter((cours, index, arr) => arr.indexOf(cours) === index);
// console.log(unicTopic);

// const friends = [
//     { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//     { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//     { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//     { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//     { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//     { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
// ]
// Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.

// function getTotalBoysYears(obj) {
//   return obj
//     .filter(item => item.sex === 'm')
//     .reduce((acc, item) => acc + item.age, 0);
// }

// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.
// const products = [
//   { name: 'Milk', price: 20 },
//   { name: 'Bread', price: 10 },
//   { name: 'Eggs', price: 15 },
// ];

// const totalProducts = products
//   .filter(product => product.price > 10)
//   .reduce((acc, item) => acc + item.price, 0);

// console.log(totalProducts);

// // Маємо масив об'єктів, який представляє список замовлень:
// // Завдання:
// // 1. Перевірте, чи всі замовлення виконані.
// // 2. Поверніть список товарів з усіх виконаних замовлень.

// const orders = [
//   { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
//   { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
//   { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
// ];

// // Порахуй загальну кількість лайків в категорії  Fashion

// const posts = [
//   { title: 'Post 1', likes: 20, category: 'Tech' },
//   { title: 'Post 2', likes: 45, category: 'Fashion' },
//   { title: 'Post 3', likes: 12, category: 'Tech' },
//   { title: 'Post 4', likes: 30, category: 'Fitness' },
//   { title: 'Post 5', likes: 15, category: 'Fashion' },
//   { title: 'Post 6', likes: 50, category: 'Tech' }
// ];

// З масиву товарів, потрібно обрати товари котрі мають category: 'tel'
// Знайти телефон з  id=5 і вивести інформацію про нього у консоль
// у форматі рядка "Ви обрали телефон name, інформація про нього description"

// const products = [
//   {
//     id: 1,
//     name: 'Smartphone',
//     description: 'Samsung Galaxy S21 Ultra',
//     category: 'tel',
//   },
//   { id: 2, name: 'Laptop', description: 'MacBook Pro', category: 'comp' },
//   { id: 3, name: 'Tablet', description: 'iPad Pro', category: 'comp' },
//   { id: 4, name: 'Smart TV', description: 'Samsung QLED 4K', category: 'tv' },
//   {
//     id: 5,
//     name: 'Smartwatch',
//     description: 'Apple Watch Series 7',
//     category: 'tel',
//   },
//   {
//     id: 6,
//     name: 'Camera',
//     description: 'Sony Alpha a7 III',
//     category: 'photo',
//   },
//   {
//     id: 7,
//     name: 'Headphones',
//     description: 'Bose QuietComfort 45',
//     category: 'audio',
//   },
//   {
//     id: 8,
//     name: 'Router',
//     description: 'TP-Link Archer AX6000',
//     category: 'network',
//   },
// ];

// const productId = 5; // id товару, який шукаємо

/********************************************** */

// Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// передаючи аргументом країну-виробник телефону.
// "HUAWEI" - "China", "SAMSUNG" - "South Korea".

// const tel = {
//   regNumber: 'AE8345FEDAS',
//   brand: 'HUAWEI',
//   showInfo(country) {
//     console.log(`${country} ${this.regNumber} ${this.brand}`);
//   },
// };

// const tel_2 = {
//   regNumber: 'AO8518FEGHT',
//   brand: 'SAMSUNG',
// };

// tel.showInfo.call(tel_2, 'China');
// tel.showInfo.call(tel_2, ['China']);
// const telInfo = tel.showInfo.bind(tel_2);
// console.log(telInfo('South Korea'));

//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.

// class Rectangle {
//   constructor({ heigth, width }) {
//     this.heigth = heigth;
//     this.width = width;
//   }
//   CalculateArea() {
//     return this.width * this.heigth;
//   }
// }
// const rectangle1 = new Rectangle({ heigth: 24, width: 30 });
// const rectangle2 = new Rectangle({ heigth: 5, width: 10 });
// console.log(rectangle1);
// console.log(rectangle1.CalculateArea());
// console.log(rectangle2.CalculateArea());

// Створіть клас Car, який має конструктор для зберігання марки та
// року виробництва автомобіля.
// 1. Додайте метод, який обчислює вік автомобіля на основі поточного року
// та року виробництва і виведе в кнсоль рядок `Вік автомобіля: age років`
// 2. Додайте перевірку, якщо вік автомобіля більше ніж 5 років, виводимо
// повідомлення "Автомобіль потребує технічного обслуговування."
// в іншому випадку - "Автомобіль не потребує технічного обслуговування зараз."
// 3. Додайте перевірку, якщо рік виробництва перевищює поточний рік,
// вивести повідомлення "Помилка: Рік виробництва не може бути пізнішим за поточний рік."

// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }
//   calculateAge(currentYear) {
//     if (this.year > currentYear) {
//       return 'Помилка: Рік виробництва не може бути пізнішим за поточний рік.';
//     }
//     const age = currentYear - this.year;
//     return `Вік автомобіля: ${age} років`;
//     if (age > 5) {
//       return 'Автомобіль потребує технічного обслуговування.';
//     }
//     return 'Автомобіль не потребує технічного обслуговування зараз.';
//   }
// }

// const currentYear = 2024;

// const newCar = new Car('bmw', 1995);
// console.log(newCar.calculateAge(currentYear));

//Напиши клас Client який створює об'єкт
//з ​​властивостями login, email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const newClient = new Client('Ivan', 'ivan@gmail.com');

// console.log(newClient.login);
// newClient.login = 'Ivan22';
// console.log(newClient.login);

// console.log(newClient.email);
// newClient.email = 'ivan22@gmail.com';
// console.log(newClient.email);

//****************************************** */

// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

//************************************* */
// Створіть клас BankAccount, який має конструктор для зберігання
// номеру рахунку та балансу.
// Додайте методи:
// withdraw - метод для зняття готівки. Отримує в якості аргументу
// суму готівки котру потрібно зняти. Готівку можна зняти за умови,
// що баланс більше або дорівнює сумі, котру хоче зняти користувач.
// Виводить повідомлення: `Знято amount грн. Залишок на рахунку: balance грн.`
// або "Недостатньо коштів на рахунку."
// deposit - метод для пововнення балансу. Отримує в якості арг
// суму котру користувач хоче покласти на рахунок.
// Виводить повідомлення: `Поповнено amount грн. Залишок на рахунку: balance грн.`
// checkBalance - метод для перевірки балансу.
// Виводить повідомлення `Залишок на рахунку: balance грн.`
