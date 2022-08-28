console.log('main.js is loaded');

let a = prompt('Input the first number: ');
a = Number(a);

let b = prompt('Input the second number: ');
b = Number(b);

let c = prompt('Input the third number: ');
c = Number(c);

let delta = b * b - 4 * a * c;

if (delta > 0) {
  alert('x1 = ' + (-b + Math.sqrt(delta)) / (2 * a));
  alert('x2 = ' + (-b - Math.sqrt(delta)) / (2 * a));
} else {
  if (delta == 0 && a != 0 && b != 0 && c != 0) {
    alert('x1 = x2 = ' + -b / (2 * a));
  } else {
    if (delta < 0) {
      alert('The equation has no real solutions');
    }
  }
}

if (a == 0 && b == 0 && c == 0) {
  alert('Solution: Any real number');
}
