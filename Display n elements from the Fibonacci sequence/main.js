console.log('main.js is loaded');

let n = prompt(
  'How many numbers from the Fibonacci sequence do you want me to display?'
);
n = Number(n);

let e0 = 0;
let e1 = 1;

if (n == 1) {
  console.log(e0);
} else {
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
