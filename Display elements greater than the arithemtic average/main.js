console.log('main.js loaded');

let n = prompt('Input elements to remember: ');
n = Number(n);

let arr = [];

let i = 0;
let s = 0;
while (i < n) {
    arr[i] = prompt('Input a new value: ');
    arr[i] = Number(arr[i]);
    console.log(arr[i]);
    s = s + arr[i];
    i = i + 1;
}
console.log(s);

let arithmeticAverage = s / n;
console.log(arithmeticAverage);

i = 0
while (i < n) {
  if (arr[i] > arithmeticAverage) {
    console.log(arr[i]);
  }
  i = i + 1;
}
