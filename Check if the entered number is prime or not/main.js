console.log('main.js');

let nr = prompt('THe following numbers ir prime or not: ');
nr = Number(nr);

let j = 0;
while (j <= nr) {
  if (nr > 0) {
    let d = 0;
    let i = 0;
    while (i <= nr) {
      if (nr % i == 0) {
        d = d + 1;
      }
      i = i + 1;
    }

    if (d == 2) {
      alert('The number ' + nr + ' is prime');
      nr = prompt('Input a new number');
      nr = Number(nr);
    } else {
      alert('The number ' + nr + ' is not prime');
      nr = prompt('Input a new number');
      nr = Number(nr);
    }
  }
  j = j + 1;
}
