console.log('main.js');

let nr = prompt('Input the number of elements to remember: ');
nr = Number(nr);

let arr = [];

let s = 0;
let i = 0;
while (i < nr) {
  arr[i] = prompt('Input a new value: ');
  arr[i] = Number(arr[i]);
  console.log(arr[i]);
  s = s + arr[i];
  i = i + 1;
}
console.log(s);
