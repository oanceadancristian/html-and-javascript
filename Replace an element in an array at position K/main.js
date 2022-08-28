console.log('main.js is loaded');

let nr = prompt('Input the number of elements to remember: ')
nr = Number(nr);

let arr = [];

let i = 0;
while (i < nr) {
  arr[i] = prompt('Input the ' + (i + 1) + ' element' + ' of ' + nr + ': ');
  arr[i] = Number(arr[i]);
  console.log(arr[i]);
  i++;
}

let x = prompt('Input the element you want to add in the array: ');
x = Number(x);

let k = prompt('Which position should the previous element replace?');
k = Number(k);

if (k < 0 || k > nr - 1) {
  alert('Out of the array!');
}
else {
  arr[k] = x;
  console.log('');
  console.log('This new round shows the new array with the replaced element added at the specified position');
  i = 0;
  while (i < nr) {
    console.log(arr[i]);
    i++;
  }
}
