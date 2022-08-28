console.log('main.js is loaded');

let n = prompt('Compute F(n) - Fibonacci sequence ')
n = Number(n);

let e0 = 0;
let e1 = 1;

let i = 2;
while (i <= n) {
  ei = e0 + e1;
  e0 = e1;
  e1 = ei;
  i = i + 1;
}

if (n == 0) {
  console.log('F(0) = 0');
}
else {
  if (n == 1) {
    console.log('F(1) = 1');
  }
  else {
    console.log('F' + '(' + n + ')' + ' = '  + ei);
  }
}
