console.log('main.js is loaded');

let nr = prompt('Insert the first number: ');
nr = Number(nr);

let s = 0;
let i = nr;
while (nr < 0 || nr > 0) {
  nr = prompt('Insert another number ');
  nr = Number(nr);
  console.log(i);
  s = s + i;
  i = i + 1;
}
console.log('The sum of the entered numbers is: ' + s);
