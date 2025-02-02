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

//* З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

//* Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

//*Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

// const categories = document.querySelectorAll('#categories li.item'); // повертає всі елементи з селектором #categories li.item — це <li> елементи з класом item всередині елемента з ID categories

// console.log(`Number of categories: ${categories.length}`);

// categories.forEach(category => {
//   console.log(`Category: ${category.querySelector('h2').textContent}`); // Для отримання заголовка категорії (<h2>) у поточному елементі category використовується querySelector('h2'). Властивість textContent отримує текст, який міститься в <h2>, і цей текст виводиться в консоль.
//   console.log(`Elements: ${category.querySelectorAll('ul > li').length}`); // Запис 'ul > li' — це CSS-селектор, який вказує на безпосередніх дочірніх елементів <li> всередині <ul>. Розберемо його детальніше: ul — вибирає елемент <ul> (незалежно від його місця у документі). > — це оператор дочірнього селектора, який обмежує пошук тільки безпосередніми дочірніми елементами. li — вибирає елемент <li>. Отже, селектор 'ul > li' знайде тільки ті елементи <li>, які є прямими дочірніми елементами <ul>. Іншими словами, він не захоплює вкладені на глибшому рівні <li>.
// });

//* Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.

//* Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().

//* Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//* Додай мінімальне оформлення галереї флексбоксами через CSS класи.

// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     alt: 'Alpine Spring Meadows',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     alt: 'Nature Landscape',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     alt: 'Lighthouse Coast Sea',
//   },
// ];

// const createGallery = document.querySelector('.gallery');

// const elements = images.map(image => {
//   const imageItem = document.createElement('li');
//   imageItem.classList.add('gallery-item');

//   const imageEl = document.createElement('img');
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;

//   imageItem.append(imageEl);
//   return imageItem;
// });

// createGallery.append(...elements);

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

//* Завдання 3 Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// const textInput = document.querySelector('input#name-input');
// const textOutput = document.querySelector('span#name-output');

// textInput.addEventListener('input', event => {
//   if (event.currentTarget.value.trim() === '') {
//     return (textOutput.textContent = 'Anonymous');
//   }
//   textOutput.textContent = event.currentTarget.value.trim();
// });

//* відправлення форми form.login-form повинна відбуватися за подією submit.
//* Під час відправлення форми сторінка не повинна перезавантажуватися.
//* Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
//* Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
//* При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// const registerForm = document.querySelector('.login-form');
// registerForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const email = form.elements.email.value.trim();
//   const password = form.elements.password.value.trim();
//   if (email === '' || password === '') {
//     return alert('All form fields must be filled in');
//   } else {
//     const dataForm = {
//       email,
//       password,
//     };
//     console.log(dataForm);
//     form.reset();
//   }
// }

//* Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const changeColorBtn = document.querySelector('.change-color');
// const colorName = document.querySelector('.color');

// const handleClick = () => {
//   document.body.style.backgroundColor = getRandomHexColor();
//   colorName.textContent = getRandomHexColor();
// };

// changeColorBtn.addEventListener('click', handleClick);

//******************** Lesson 2 ********************/

//* click

// const btn = document.querySelector('.js-click');
// const box = document.querySelector('.js-box');

// // btn.addEventListener('click', () => {
// //   console.log('click'); // функцію можна написати одразу
// // });

// btn.addEventListener('click', handleClick);
// box.addEventListener('click', handleClick); // так ми добавляємо слухача події на квадрат теж

// let step = 0;

// function handleClick() {
//   // або винести в окрему функцію
//   step += 50;
//   box.style.marginTop = `${step}px`;
//   box.style.marginLeft = `${step}px`;
// }

//* change, input

// const checkbox = document.querySelector('.js-checkbox');

// checkbox.addEventListener('change', () => {
// якщо потрібно відслідкувати подію на чекбоксі, радіокнопкі ми слухаємо подію change
//   console.log('ok');
// });

// const input = document.querySelector('.js-user-name');

// input.addEventListener('change', handleInput); // тут чендж відпрацьовує при втраті фокусу, тобто не одразу як ми очікуємо, для цього існує подія input

// input.addEventListener('input', handleInput);

// //
// function handleInput(event) {
//   console.log(event.target); // отримаємо елеменет з яким ми зараз працюємо <input type="text" class="js-user-name" />, це то саме що input в даному прикладі
//   console.log(event.target.value); // актуальні дані які ми вводимо в наш інпут
//   console.log(input.value); // враховуючи що event.target це то семе що input, ми отримуємо той самий результат
// }

//* focus, blur

// const input = document.querySelector('.js-user-name');
// input.addEventListener('focus', () => { // виводить коли є фокус
//   console.log('focus');
// });
// input.addEventListener('blur', () => { // виводить коли фокус втрачаємо
//   console.log('blur');
// });

//* forms

// const form = document.querySelector('.js-form');
// form.addEventListener('submit', handleSubmit); // подію вішаємо безпосередньо на форму. Відправлення форми відбувається подією submit.

// function handleSubmit(event) {
//   event.preventDefault();
//   const elements = event.target.elements;

//   const info = {
//     email: elements.email.value,
//     password: elements.password.value,
//     comment: elements.comment.value,
//   };
//   console.log(info);
//   event.target.reset(); // очищаємо дані з форми
// }

//* ketpress, keydown, keyup

// document.addEventListener('keypress', handleKeyPress); // не працює зі спец-символами (альт, шифт)
// function handleKeyPress(event) {
//   console.log(event.key);
//   console.log(event.code);
// }

// document.addEventListener('keydown', handleKeyPress); // працює зі спец-символами
// function handleKeyPress(event) {
//   console.log(event.key);
//   console.log(event.code);
// }

//* події миші
//* mouseenter i mouseleave (це ховер)
//* mouseover i mouseout
//* mousemove (chatty event - балакуча подія )

// const box = document.querySelector('.js-box');
// box.addEventListener('mouseenter', onMouseEnter); // відпрацьовує як ховер
// box.addEventListener('mouseleave', onMouseLeave); // відпрацьовує як ховер
// function onMouseEnter() {
//   console.log('onMouseEnter');
// }

// function onMouseLeave() {
//   console.log('onMouseLeave');
// }

// box.addEventListener('mouseover', onMouseOver); // чутливий до вкладених елементів
// box.addEventListener('mouseout', onMouseOut); // так само
// function onMouseOver() {
//   console.log('onMouseOver');
// }

// function onMouseOut() {
//   console.log('onMouseOut');
// }

// box.addEventListener('mousemove', onMouseMove); // відбувається при кожному русі мишки

// function onMouseMove(event) {
//   console.log(event);
// }

//* Задача

/**
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку
 * і картки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і в
 * тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто
 * які збігаються з критеріями пошуку
 */

// const cars = [
//   {
//     id: 1,
//     car: 'Audi',
//     type: 'A6',
//     price: 30000,
//     img: 'https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg',
//   },
//   {
//     id: 2,
//     car: 'Honda',
//     type: 'Civic',
//     price: 12000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
//   },
//   {
//     id: 3,
//     car: 'Audi',
//     type: 'Q7',
//     price: 40000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
//   },
//   {
//     id: 4,
//     car: 'BMW',
//     type: '5 siries',
//     price: 9000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
//   },
//   {
//     id: 5,
//     car: 'Honda',
//     type: 'Accord',
//     price: 20000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
//   },
//   {
//     id: 6,
//     car: 'Volvo',
//     type: 'XC60',
//     price: 7000,
//     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
//   },
// ];

// const form = document.querySelector('.js-form');
// const container = document.querySelector('.js-list');

// form.addEventListener('submit', handleSearch);

// function createMarkup(arr) {
//   return arr
//     .map(
//       item => `
//     <li class="car-card">
//     <img src="${item.img}" alt="${item.type}" class="car-image">
//     <h2 class="car-title">${item.car}</h2>
// <h3 class="car-type">${item.type}</h3>
// <span class="car-price">${item.price}</span>
//     </li>
//     `
//     )
//     .join('');
// }

// container.style.display = 'flex';
// container.style.flexWrap = 'wrap';
// container.style.gap = '25px';

// container.insertAdjacentHTML('beforeend', createMarkup(cars));

// function handleSearch(event) {
//   event.preventDefault();
//   const query = event.target.elements.query;
//   const options = event.target.elements.options;

//   const result = cars.filter(item =>
//     item[options.value].toLowerCase().includes(query.value.toLowerCase())
//   );

//   console.log(result);
// }
