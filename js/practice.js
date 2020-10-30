'use strict';

let numberOfFilms;

function start(){
     numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');

     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');
     }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms(){
    for ( let i = 0; i < 2; i++ ){
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('На сколько оцените его?','');
        if ( a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50 ){
            personalMovieDB.movies[a] = b;
            console.log('Done');
        }else{
            i--;
            console.log('Error');
        }
        
    }
}

//rememberMyFilms();

function detectPersonalLevel(){
    if ( personalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов');
    } else if( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
        alert('Вы классический зритель');
    }else if ( personalMovieDB.count >= 30 ){
        alert('Вы киноман');
    }else{
        alert('Произошла ошибка');
    }
}

//detectPersonalLevel();


// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько оцените его?',''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько оцените его?','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

//console.log(personalMovieDB);

writeYourGenres();
showMyDb(personalMovieDB.privat);


function showMyDb(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр №${i}`,'');
    }
}