console.log('main.js is loaded');

let n = prompt('Input the numer of elements to remember: ');
n = Number(n);

let arr = [];

let i = 0;
while (i < n) {
  arr[i] = prompt('Type a new value: ');
  arr[i] = Number(arr[i]);
  i = i + 1;
}

let j = 0;
while (j < n) {
  console.log(arr[j]);
  j = j + 1;
}
