"use strict";

const box = document.getElementById('box'),
      buttons = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for( let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item =>{
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.body.append(div);
// wrapper.append(div);
// wrapper.appendChild(div);

wrapper.prepend(div);

// hearts[0].before(div);//новое
// hearts[0].after(div);//новое

// wrapper.insertBefore(div, hearts[1]);//старое

// circles[0].remove();//новое
// wrapper.removeChild(hearts[1]);//старое

hearts[0].replaceWith(circles[0]); //новое
// wrapper.replaceChild(circles[0], hearts[0]); //старое

div.innerHTML = "<h1>Hello world</h1>"; // HTML тексты

// div.textContent = "Hello"; //только текст

// div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');
// div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');
// div.insertAdjacentHTML("beforeend", '<h2>Hello</h2>');
div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');