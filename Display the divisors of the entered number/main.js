console.log('maijn.js is loaded');

let nr = prompt('Display the divisors of the following number: ');
nr = Number(nr);

let i = 1;
while (i <= nr) {
  if (nr % i == 0) {
    console.log(i);
  }
  i = i + 1;
}
