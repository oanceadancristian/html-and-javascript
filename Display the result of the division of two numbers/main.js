console.log('main.js is loaded');

let nr1 = prompt('Input the first number: ');
nr1 = Number(nr1);

let nr2 = prompt('Input the second number: ');
nr2 = Number(nr2);

if (nr2 == 0) {
  alert('Impossible operation as the second number is 0');
} else {
  alert(nr1 / nr2);
}
