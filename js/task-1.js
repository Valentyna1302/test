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

// Задача 8: Знайти найбільше число в масиві

// function findMax(arr) {
//   return Math.max(...arr);
// }

// // Оператор розпакування (...):

// // Оператор розпакування (spread operator) ...arr розпаковує масив в окремі аргументи. Наприклад, для масиву [1, 2, 3] він перетворює його на 1, 2, 3.
// // Таким чином, Math.max(...arr) стає викликом Math.max(1, 2, 3).

// // Приклад використання:
// console.log(findMax([1, 2, 3, 4])); // 4
// console.log(findMax([-10, -2, -5])); // -2
// console.log(findMax([5, 12, 7, 21, 3])); // 21

// Задача 9: Об'єднання масивів

// function mergeArrays(arr1, arr2) {
//   const combined = arr1.concat(arr2);
//   return combined;
// }

// function mergeArrays2(arr1, arr2) {
//   const combined2 = arr1.concat(arr2);
//   return combined2;
// }

// // Приклад використання:
// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
// console.log(mergeArrays2(['a', 'b'], ['c', 'd'])); // ["a", "b", "c", "d"]

// Задача 10: Заміна символів у рядку
// Напиши функцію replaceChar, яка приймає рядок, символ для заміни та новий символ. Функція повинна повернути новий рядок, де всі вказані символи замінено на нові.

// function replaceChar(str, oldChar, newChar) {
//   return str.split(oldChar).join(newChar);
// }

// // Приклад використання:
// console.log(replaceChar('hello world', 'o', '0')); // "hell0 w0rld"
// console.log(replaceChar('javascript', 'a', '@')); // "j@v@script"

// Задача 11: Пошук середнього арифметичного
// Напиши функцію average, яка приймає масив чисел і повертає їх середнє арифметичне.

// function average(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total / arr.length;
// }

// // Приклад використання:
// console.log(average([1, 2, 3, 4, 5])); // 3
// console.log(average([10, 20, 30])); // 20

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   let values = [];
//   for (let product of products) {
//     return values.push(product);
//   }
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('category'));

// function isEnoughCapacity(products, containerSize) {
//   const productsArr = Object.values(products);
//   let totalProducts = 0;
//   for (const product of productsArr) {
//     totalProducts += product;
//   }
//   return totalProducts <= containerSize;
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// const profile = {
//   username: 'Jacob',
//   playTime: 300,
//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername('Marco');
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// const transaction = {
//   deposit: 'deposit',
//   withdraw: 'withdraw',
// };

// const account = {
//   balance: 0,
//   allTransactions: [],
//   createTransactions(amount, type) {
//     const obj = {
//       id: amount,
//       amount,
//       type,
//     };
//     return obj;
//   },
//   deposit(amount) {
//     this.balance += amount;
//     const newTransaction = this.createTransactions(amount, transaction.deposit);
//     this.allTransactions.push(newTransaction);
//   },
//   withdraw(amount) {
//     if (this.balance < amount) {
//       console.log('Insufficient funds in the account');
//       return;
//     }
//     this.balance -= amount;
//     const withdrawTransaction = this.createTransactions(
//       amount,
//       transaction.withdraw
//     );
//     this.allTransactions.push(withdrawTransaction);
//   },
//   getBalance() {
//     return this.balance;
//   },
//   getTransactionDetalis(id) {
//     for (const item of this.allTransactions) {
//       if (item.id === id) {
//         return item;
//       }
//     }
//     return 'Not found';
//   },
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const item of this.allTransactions) {
//       if (item.type === type) {
//         total += item.amount;
//       }
//     }
//     return total;
//   },
// };
// account.deposit(500);
// account.deposit(100);
// account.withdraw(1000);
// account.withdraw(200);
// console.log(account.getBalance());
// console.log(account.getTransactionDetalis(500));
// console.log(account.getTransactionTotal(transaction.withdraw));
// console.log(account);
