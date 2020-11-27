'use strict';

// function* generator() {
//     yield 's';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generator();

// console.log(str.next().value);

function* count(n) {
    for (let i = 0; i < n; i++){
        yield i;
    }
}

const num = count(7);

// console.log(num.next().value);

for (let n of num){
    console.log(n.next().value);
}

