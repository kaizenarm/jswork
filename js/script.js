"use strict";

//1
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2
console.log(typeof(5 + ''));
console.log(typeof(null + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const forntSize = 26 + 'px';

// To Number
//1
console.log(typeof(Number('4')));

//2
console.log(typeof(+'4'));

//3
console.log(typeof(parseInt("15px", 10)));

let answer = +prompt("Hello", "");

//To boolean

//0, '', null, undefined, NaN; -- Это false

//1
let switcher = null;

if (switcher){
    console.log('Walking...');
}

switcher = 1;

if (switcher){
    console.log('Walking...');
}

//2
console.log(typeof(Boolean('4')));

//3
console.log(typeof(!!"44444")); //True
