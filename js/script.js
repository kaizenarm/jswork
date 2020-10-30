'use strict';

let num = 20;

function showFirstMessage(text){
    console.log(text);
    num = 20;
}

showFirstMessage('Hello World!');
console.log(num);

function calc(a, b){
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));