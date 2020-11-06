'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?','');

     while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?','');
     }
    },
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function(){
        if ( personalMovieDB.count < 10){
            alert('Просмотрено довольно мало фильмов');
        } else if( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
            alert('Вы классический зритель');
        }else if ( personalMovieDB.count >= 30 ){
            alert('Вы киноман');
        }else{
            alert('Произошла ошибка');
        }
    },
    showMyDb: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },
    writeYourGenres: function(){
        //Первый способ
        // for(let i = 1; i <= 3; i++){
        //     let a = prompt(`Ваш любимый жанр №${i}`,'');
        //     if(a != null && a != ''){
        //         personalMovieDB.genres[i - 1] = a;
        //     }else{
        //         console.log(
        //             'Вы ввели некорректные данные или не ввели их вовсе');
        //         i--;
        //     }
        // }

        //Второй способ строку переделываем в массив
        for(let i = 1; i < 2; i++){
            let genres = prompt(`Введите любой жанр через запятую`).toLowerCase();
            if(genres === null || genres === ''){
                console.log(
                    'Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            }else{
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function(a){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
    }
};


// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
// console.log(personalMovieDB.privat);

// personalMovieDB.writeYourGenres();
// console.log(personalMovieDB.genres);


//detectPersonalLevel();


// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько оцените его?',''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько оцените его?','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

//console.log(personalMovieDB);

// writeYourGenres();
// showMyDb(personalMovieDB.privat);