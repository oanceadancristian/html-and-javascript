console.log('main.js is loaded');

let nr1 = prompt('Input the first number: ');
nr1 = Number(nr1);

let nr2 = prompt('Inout the second number: ');
nr2 = Number(nr2);

let min, max;

if (nr1 < nr2) {
  min = nr1;
  max = nr2;
}
else {
  min = nr2
  max = nr1;
}

let i = min;
while (i <= max) {
  console.log(i);
  i = i + 1;
}
