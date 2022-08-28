console.log('main.js is loaded');

let a = prompt('Input the first number: ');
a = Number(a);

let b = prompt('Input the second number: ');
b = Number(b);

if (a == 0 && b == 0) {
  alert('The first degree equation is: ' + a + '*X+ ' + b + ' = 0 ');
  alert('Solution: any real number');
} else {
  if (a == 0) {
    alert('The first degree equation is: ' + a + '*X+ ' + b + ' = 0');
    alert('The equation has no solution');
  } else {
    alert('Solution: X = ' + -b / a);
  }
}
