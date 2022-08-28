console.log('main.js is loaded');

let nr = prompt('Input the number of elements to remember: ');
nr = Number(nr);

let arr = [];

let s = 0;
let i = 0;
while (i < nr) {
  arr[i] = prompt('Input a new number: ');
  arr[i] = Number(arr[i]);
  console.log(arr[i]);
  s = s + arr[i];
  i = i + 1;
}
console.log(s);

let arithmeticAverage = s / nr;
console.log(arithmeticAverage);

let j = 0;
while (j < arithmeticAverage) {
  console.log(j);
  j = j + 1;
}
