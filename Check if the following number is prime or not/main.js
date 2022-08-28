console.log('main.js is loaded');

let nr = prompt('Check if the following number is prime or not: ');
nr = Number(nr);

let d = 0;
let i = 1;
while (i <= nr) {
  if (nr % i == 0) {
    d = d + 1;
  }
  i = i + 1;
}

if (d == 2) {
  console.log('The number ' + nr + ' is prime');
} else {
  console.log('The number ' + nr + ' is not prime');
}
