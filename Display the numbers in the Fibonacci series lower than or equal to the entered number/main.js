console.log('main.js is loaded');

let n = prompt('Print numbers from Fibonacci sequence lower than: ');
n = Number(n);

let e0 = 0;
let e1 = 1;
let e2 = 1;

if (n == 0) {
  console.log('The number must be greater than 0');
}
else {
  if (n == 1) {
    console.log(e0);
    console.log(e1);
    console.log(e2);
  }
  else {
    if (n > 1) {
      console.log(e0);
      console.log(e1);
      console.log(e2);
    }
  }
}

let i = 2;
while (i <= n) {
  ei = e1 + e2;
  e1 = e2;
  e2 = ei;
  if (ei <= n) {
    console.log(ei);
  }
  i = i + 1;
}
