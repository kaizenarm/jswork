"use strict";

// touchstart - это событие касание пальчиком
// tochmove - это событие на движение
// touchend - это как только оторвалься от элемента
// touchenter - срабатывает коглда ведем на элемент на элемент
// touchleave - скользит с этого элемента
// touchcancel - выйдет за браузер

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);

    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');
    // });


});

// touches - список всех пальцев учавтсвующих в действии на экране
// targetTouches - все пальцы которые взаймодействуют в блоке
// changedTouches -- список пальцев учавствующих в событии, пальцы совершили действия
