// Задача 1: Функція, що перевіряє парність числа

// function isEven(number) {
//   return number % 2 === 0;
// }

// // Приклад використання:
// console.log(isEven(4)); // true
// console.log(isEven(7)); // false

// Задача 2: Повернення першого елемента масиву

// function getFirstElement(arr) {
//   return arr[0];
// }

// // Приклад використання:
// console.log(getFirstElement([1, 2, 3])); // 1
// console.log(getFirstElement([])); // undefined

// Задача 3: Підрахунок кількості голосних у рядку

// function countVowels(str) {
//   let count = 0;
//   const vowels = 'aeiouAEIOU';
//   for (const item of str) {
//     if (vowels.includes(item)) {
//       count++;
//     }
//   }
//   return count;
// }

// // Приклад використання:
// console.log(countVowels('hello')); // 2
// console.log(countVowels('why')); // 0

// Задача 4: Зворотній порядок рядка

// function reverseString(str) {
//   const arr = str.split('').reverse().join('');
//   return arr;
// }

// // Приклад використання:
// console.log(reverseString('hello')); // "olleh"
// console.log(reverseString('JavaScript')); // "tpircSavaJ"

// Задача 5: Заміна пробілів на тире

// function replaceSpaces(str) {
//   const arr = str.split(' ').join('-');
//   return arr;
// }

// // Приклад використання:
// console.log(replaceSpaces('hello world')); // "hello-world"
// console.log(replaceSpaces('JavaScript is fun')); // "JavaScript-is-fun"

// Задача 6: Перевірка на паліндром. replace(/[^a-z0-9]/g, ''): Видаляє всі символи, окрім літер та цифр

// function isPalindrome(str) {
//     // Перетворюємо рядок у нижній регістр і видаляємо всі небажані символи
//     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     // Перевертаємо рядок і порівнюємо його з оригіналом
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }

// // Приклад використання:
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("Racecar")); // true
// console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // true

// Задача 7: Сума чисел в масиві

// function sumArray(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// // Або

// function sumArray(arr) {
//   return arr.reduce((sum, current) => sum + current, 0);
// }

// // Пояснення:
// // Метод reduce():

// // Метод reduce() проходить по всіх елементах масиву і акумулює результат у змінну (в нашому випадку це сума).
// // sum — це акумулятор, який зберігає поточну суму.
// // current — це поточний елемент масиву, який додається до sum.
// // 0 — це початкове значення акумулятора (сума починається з нуля).
// // Покрокова робота reduce() на прикладі [1, 2, 3, 4]:

// // Початкове значення sum = 0.
// // 1-й елемент: sum = 0 + 1 = 1
// // 2-й елемент: sum = 1 + 2 = 3
// // 3-й елемент: sum = 3 + 3 = 6
// // 4-й елемент: sum = 6 + 4 = 10
// // Результат: 10
// // Результат для порожнього масиву:

// // Якщо масив порожній ([]), reduce() поверне початкове значення, яке дорівнює 0.

// // Приклад використання:
// console.log(sumArray([1, 2, 3, 4])); // 10
// console.log(sumArray([10, -2, 5])); // 13
// console.log(sumArray([])); // 0
