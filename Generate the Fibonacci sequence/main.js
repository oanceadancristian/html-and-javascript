console.log('main.js loaded');

let n = prompt('Generate the Fibonacci sequence: ');
n = Number(n);

let e0 = 0;
let e1 = 1;
let ei;

if (n == 0) {
  console.log(e0);
}
else {
  if (n == 1) {
    console.log(e0);
    console.log(e1);
  }
}
console.log(e0);
console.log(e1);
let i = 2;
while (i <= n) {
  ei = e0 + e1;
  console.log(ei);
  e0 = e1;
  e1 = ei;
  i = i + 1;
}
