// "use strict"; //"строгий режим"
// // a = 15;
// // console.log (a);

// // let number = 5; // let видна в области определения
// // const leftBorderWidth = 1; //неизменяемая константа с исключением


// //числа
// let number = 4;
// let numberNotInt = 4.6;

// console.log(-4/0); // = -Infinity
// console.log(4/0); // = Infinity

// console.log('string' / 3); // = NaN - not a number

// //строки

// const person = 'Vitalya';

// //boolean

// const bool = true; // false

// //NUll 

// //console.log(something); // не сущетвует (NULL)

// //undefined 

// let what;
// console.log(what); //существует но не имет никакого значения

// //объекты

// const object = { // объект 
//     name : "John", //имя : свойство
//     age : 25,
//     isMarred: false
// };

// console.log(object.name); //или object["name"]

// //массив (частный случай объекта)

// //let arr = ["orange.bmp, 6, "applica.jpg', {object}, [array];
// //console.log(arr[0]); //обращение к объекту


//==================================================================================
// "use strict";

// //alert("hello");

// const result = confirm("Are u there?");// вопрос для пользователя

// console.log(result);


// const answer = prompt("Вам есть 18?", "Yes"); //вопрос , вариант ответа
// console.log(typeof(answer)); // выводится всегда строка

// const answers = [];
// answers[0] = prompt("Как ваше имя", "");
// answers[1] = prompt("Как ваша фамилия", "");
// answers[2] = prompt("Сколько вам лет", "");
// answers[3] = prompt("Размер вашей пипирки", "");

// document.write(answers);

// console.log(typeof(answers));

// console.log(typeof(null)); // object - оф признанная ошибка


//=======================Интерполяция==================================
//внутри строки можно вставлять значение переменной
// "use strict";

// const category =  'toys';

// console.log('https://someurl.com/' + category); // ===>

// // ===>

// console.log(`https://someurl.org/${category}/5`) //только с косыми ковычками

// const answer = prompt("как тебя зовут?", "Хуй");
// alert(`Привет, ${answer}`);

//=======================ОПЕРАТОРЫ==================================

console.log(4 + +"5");

console.log(typeof(4 + +"5"));

let incr = 10,
    decr = 9;

// incr++; //постфикс
// decr--;

// ++incr; //префикс
// --decr;

console.log(--incr);
console.log(--decr);

console.log(4*4 == '16'); // ==по значению
console.log(4*5 === 16); // ==по типу данных

//=====================================================================

