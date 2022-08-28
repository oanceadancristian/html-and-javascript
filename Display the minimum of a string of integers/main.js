console.log('main.js is loaded');

let nr = prompt('Input numbers to remember: ');
nr = Number(nr);

let arr = [];

let i = 0;
while (i < nr) {
  arr[i] = prompt('Input a new number: ');
  arr[i] = Number(arr[i]);
  console.log(arr[i]);
  i = i + 1;
}

let min = arr[0];
let j = 0;
while (j < arr.Length) {
  if (arr[j] < min) {
    min = arr[j];
  }
  j = j + 1;
}
console.log(min);
