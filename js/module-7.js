// const imgEl = document.querySelector('.hero-img');
// console.log(imgEl.alt); // отримуємо атрибувт alt
// imgEl.alt = 'A plate with melted chocolate'; // перезаписуємо значення. Так само можна з src
// console.log(imgEl.alt);

// const heroTitle = document.querySelector('.hero-title');
// heroTitle.textContent = 'My title'; // перезаписали заголовок

// console.log(imgEl.src);
// console.log(imgEl.getAttribute('src'));

// imgEl.width = 480; // перезаписали ширину
// imgEl.setAttribute('width', 480); // перезаписали ширину

//? Отримати доступ або змінити значення деяких атрибутів елемента можна безпосередньо, звернувшись до них як до вл-тей ДОМ обʼєкта. Це буде менше затратно за кількістю коду.
//? А ось видалити або перевірити наявність буде зручніше використовуючи відповідний метод.

// imgEl.removeAttribute('width'); // видаляємо атрибут width
// console.log(imgEl.hasAttribute('href')); // перевіряємо чи є атрибут

//* data-атрибути потрібні якраз для розробників

// const actions = document.querySelectorAll('.actions button');
// console.log(actions[2].dataset.action);

// actions[2].dataset.action = 'lalala'; // можемо поміняти значення

// actions[2].dataset.btn = 'red'; // створюємо новий data-атрибут

// delete actions[2].dataset.btn; //  видаляємо data-атрибут

//* classList - add, remove, toggle, replace, contains

// const navLinkEl = document.querySelector('.site-nav-link[href="/contact"]');

// const currentPageUrl = '/contact';
// const navLinkEl = document.querySelector(
//   `.site-nav-link[href="${currentPageUrl}"]` // результат той самий що і вище
// );

// navLinkEl.classList.add('new-class'); // додаємо класс до елемента
// navLinkEl.classList.remove('new-class'); // видаляє
// navLinkEl.classList.toggle('new-class'); // якщо є видалить, якшо нема додасть
// navLinkEl.classList.replace('new-class', 'blue');// замінює класи
// console.log(navLinkEl);

// console.log(navLinkEl.classList.contains('blue')); // повертає тру якщо є такий клас, повертвє фолс якщо немає

//* створення елементів

// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'Edward Cullen';

// document.body.prepend(titleEl);

// const imgEl = document.createElement('img');

// imgEl.src = 'https://upload.wikimedia.org/wikipedia/en/6/69/Edward_Cullen.jpg';
// imgEl.alt = 'Edward Cullen';
// imgEl.width = 240;

// document.body.append(imgEl);

// const heroEL = document.querySelector('.hero-div');
// heroEL.append(titleEl, imgEl);

// з класу body прибралось і imgEL і titleEl (рядок 57 і 65), тому що елементи можуть бути додані на сторінку лише один раз.

//*  Створюємо тв додаємо новий пункт меню

// const navItemEl = document.createElement('li');
// navItemEl.classList.add('sit-nav-item');

// const navLinkEl = document.createElement('a');
// navLinkEl.href = '/profile';
// navLinkEl.classList.add('site-nav-link');
// navLinkEl.textContent = 'Profile';

// navItemEl.append(navLinkEl);

// const navEl = document.querySelector('.site-nav');
// navEl.append(navItemEl);

//* Створюємо та додаємо колекцію

// const options = [
//   { label: 'Red', color: '#FF0000' },
//   { label: 'Green', color: '#00FF00' },
//   { label: 'Blue', color: '#0000FF' },
//   { label: 'Gray', color: '#808080' },
//   { label: 'Pink', color: '#FFC0CB' },
//   { label: 'Indigo', color: '#4B0082' },
// ];

// const colorContainerEl = document.querySelector('.color-picker');

// const elements = options.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.classList.add('color-picker-option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// console.log(elements);

// colorContainerEl.append(...elements); // метод append приймає переліком елементи, тобто якщо їх потрібно передати декілька, то робимо це через кому. А ми сюди передали масив і щоб розгорнути його використовуємо spread оператор.

//* Щоб не повторювати код для інших обєʼктів, пишемо фунцію

// const createMarkup = array =>
//   array.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.classList.add('color-picker-option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     return buttonEl;
//   });

// colorContainerEl.append(...createMarkup(options)); // тепер код буде працювати для будь-якого масву, який ми передамо

//* Властивість innerHTML

// const titleElement = document.querySelector('.hero-title');
// titleElement.textContent = '<a href = "">My title</a>'; // тут на сторінці буде цілий рядок '<a href = "">My title</a>', а ми хочемо щоб тег а добавився в розмітку

// titleElement.innerHTML = '<a href = "">My title</a>'; // розпізнала тег, добавила його в хтмл і в середину нього поклала заголовок.

// titleElement.innerHTML = '';// дуже зручно в цей спосіб видаляти вміст

//* вставка розмітки за допосогою insertAdjacentHTML, не видаляє весь вміст, а добавляє до вже існуючого

// titleElement.insertAdjacentHTML('beforeend', '<a href = "">My title</a>'); //

//* задачка

// const transactionHistory = [
//   {
//     id: '758d5283-358e-4fbb-b222-a17fd04e8916',
//     amount: '179.07',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Bogan - DuBuque',
//     name: 'Auto Loan Account 7313',
//     type: 'deposit',
//     account: '19808943',
//   },
//   {
//     id: 'f0463ec4-7104-4adb-a41c-b1c7549055f8',
//     amount: '930.87',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Legros, Weimann and Treutel',
//     name: 'Auto Loan Account 0721',
//     type: 'invoice',
//     account: '38277848',
//   },
//   {
//     id: '6c0e5a78-ad9f-46af-8299-44b77f5099d5',
//     amount: '704.53',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Beatty, Wisozk and Koch',
//     name: 'Savings Account 1894',
//     type: 'withdrawal',
//     account: '76727204',
//   },
//   {
//     id: '16bd2a9d-7b0e-418f-a75c-7076e8ab6175',
//     amount: '656.81',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Hane - Bode',
//     name: 'Personal Loan Account 2316',
//     type: 'withdrawal',
//     account: '27462350',
//   },
//   {
//     id: 'd328680d-4aa5-40ee-912b-9b5149b602e6',
//     amount: '280.21',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Schulist - Waelchi',
//     name: 'Savings Account 9032',
//     type: 'payment',
//     account: '99923313',
//   },
//   {
//     id: 'e51fb348-8523-4e39-915f-39687ca4eebf',
//     amount: '303.06',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Swaniawski - Hayes',
//     name: 'Checking Account 0573',
//     type: 'invoice',
//     account: '75028346',
//   },
//   {
//     id: 'cd727197-5ffb-45a7-9bf5-9d08092a1cce',
//     amount: '462.59',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Berge - Reinger',
//     name: 'Personal Loan Account 8173',
//     type: 'invoice',
//     account: '93437240',
//   },
//   {
//     id: '247e150a-71ba-4df7-9836-5bb400e012bb',
//     amount: '242.49',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Stroman Inc',
//     name: 'Savings Account 1383',
//     type: 'withdrawal',
//     account: '18476423',
//   },
//   {
//     id: '6224c740-ff23-429d-854a-c7b310f7653b',
//     amount: '770.94',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Johns - Pagac',
//     name: 'Auto Loan Account 1392',
//     type: 'invoice',
//     account: '07680863',
//   },
//   {
//     id: '79ccb1dd-6544-47cc-9a40-ea453985a748',
//     amount: '788.40',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Ullrich, Shields and Koelpin',
//     name: 'Personal Loan Account 8318',
//     type: 'invoice',
//     account: '07081761',
//   },
// ];

// const tableEl = document.querySelector('.js-transaction-table');

// const createMarkup = arr =>
//   arr
//     .map(
//       item => `
// <tr>
// <td>${item.id}</td>
// <td>${item.amount}</td>
// <td>${item.date}</td>
// <td>${item.business}</td>
// <td>${item.type}</td>
// <td>${item.name}</td>
// <td>${item.account}</td>
// </tr>
// `
//     )
//     .join('');

// tableEl.insertAdjacentHTML('beforeend', createMarkup(transactionHistory));
