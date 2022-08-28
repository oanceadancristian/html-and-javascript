console.log('main.js loaded');

let n = prompt('Generate the Fibonacci sequence with the following number of elements: ');
n = Number(n);

let e0 = 0;
let e1 = 1;

if (n == 0) {
  console.log('The number must be minim 1');
}

if (n == 1) {
  console.log(e0);
}
else {
  if (n > 0) {
    console.log(e0);
    console.log(e1);
  }
}

let i = 2;
while (i < n) {
  ei = e0 + e1;
  e0 = e1;
  e1 = ei;
  console.log(ei);
  i = i + 1;
}
