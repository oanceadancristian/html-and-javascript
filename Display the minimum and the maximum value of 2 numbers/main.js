console.log('main.js is loaded');

let nr1 = prompt('Input the first number: ');
nr1 = Number(nr1);

let nr2 = prompt('Input the second number: ');
nr2 = Number(nr2);

let min, max;

if (nr1 == nr2) {
  alert('The numbers are equal');
} else {
  if (nr1 < nr2) {
    min = nr1;
    max = nr2;
    alert('The minimum value is ' + min + ' and the maximum value is ' + max);
  } else {
    min = nr2;
    max = nr1;
    alert('The minimum value is ' + min + ' and the maximum value is ' + max);
  }
}
