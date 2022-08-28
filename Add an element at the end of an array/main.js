console.log('main.js is loaded');

let nr = prompt('Input the number of elements to remember: ');
nr = Number(nr);

let arr = [];

let i = 0;
while (i < nr) {
  arr[i] = prompt('Input the ' + (i + 1) + ' element' + ' of ' + nr + ': ')
  arr[i] = Number(arr[i]);
  console.log(arr[i]);
  i++;
}

let x = prompt('Input the new element you want to add at the end of the array: ');
x = Number(x);

nr = nr + 1;
arr[nr - 1] = x;
console.log('');
console.log('This new round shows the new array with the new element added at the end');

i = 0;
while (i < nr) {
  console.log(arr[i]);
  i++;
}
