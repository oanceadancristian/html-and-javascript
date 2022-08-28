console.log('main.js is loaded');

let kilometer = prompt('Input the value in kilometer');
kilometer = Number(kilometer);

let convert = 1.61;

let mile = kilometer / convert;

alert('Your kilometer to mile conversion result is: ' + mile);
