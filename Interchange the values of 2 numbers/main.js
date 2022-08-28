console.log('main.js is loaded');

let nr1 = prompt('Input the first number: ');
nr1 = Number(nr1);

let nr2 = prompt('Input the second number: ');
nr2 = Number(nr2);

let aux;

aux = nr1;
nr1 = nr2;
nr2 = aux;

alert(nr1);
alert(nr2);
