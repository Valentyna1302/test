//* stopPropagation() зупиняє лише спливання події, але дозволяє всім обробникам на елементі #descendant виконуватися.
//* stopImmediatePropagation() зупиняє і спливання, і виконання інших обробників на #descendant.const parent = document.querySelector('#parent');

// const child = document.querySelector('#child');
// const descendant = document.querySelector('#descendant');

// parent.addEventListener('click', () => {
//   alert(
//     'Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
//   );
// });

// child.addEventListener('click', () => {
//   alert(
//     'Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
//   );
// });

// descendant.addEventListener('click', event => {
//   event.stopPropagation();
//   alert('Descendant click handler');
// });

// // Другий обробник події на елементі #descendant
// descendant.addEventListener('click', () => {
//   alert('Descendant click handler - Second');
// });

// // Третій обробник події на елементі #descendant
// descendant.addEventListener('click', () => {
//   alert('Descendant click handler - Third');
// });

//* Делегування подій

// const box = document.querySelector('div.box');

// box.addEventListener('click', function (event) {
//   console.log(event.target);
// });

//* Є задача створити палітру кольорів. Палітра дає можливість вибрати колір по кліку і відображає обраний колір.

// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');

// colorPalette.addEventListener('click', selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement('button');
//     item.type = 'button';
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add('item');
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomHexColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }

//* lodash _
console.log(_);
