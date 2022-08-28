console.log('main.js is loaded');

let nr1 = prompt('Input the first number: ');
nr1 = Number(nr1);

let nr2 = prompt('Input the second number: ');
nr2 = Number(nr2);

if (nr1 < nr2 && nr2 - nr1 >= 2) {
  let i = nr1 + 1;
  while (i < nr2) {
    console.log(i);
    i = i + 1;
  }
} else {
  if ((nr1 < nr2 && nr2 - nr1 == 1) || nr2 - nr1 == 0) {
    console.log('There is no number to be displayed');
  }
}
