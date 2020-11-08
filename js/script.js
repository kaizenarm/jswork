"use strict";

const btns = document.querySelectorAll('button'),
      //btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function(){
//     alert('Click');
// };

// btn.addEventListener('click', ()=> {
//     alert('Click');//
// });

// btn.addEventListener('click', ()=> {
//     alert('Second click');//
// });

// btn.addEventListener('click', (e)=> {
//     // console.log(e.target);
//     e.target.remove();
//     // console.log('Hover');//
// });
let i = 0;
const deleteElement = (e) => {
    //.target.remove();
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if(i == 1){
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); // Только один раз вызывается функция
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); // Отменили стандартное поведение браузера

    console.log(event.target);

});