"use strict";

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));

// \D - не числа
// \W - не буквы
// \S - не 

// \d - мы ищем цифры
// \w - мы ищем все слова и буквы 
// \s - мы ищем все пробелы

// i - вне зависимости от регистров
// g - пытаемся найти несколько значений, то есть все
// m - многострочный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));

