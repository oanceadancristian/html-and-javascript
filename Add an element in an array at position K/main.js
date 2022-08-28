console.log('main.js is loaded');

let nr = prompt('Input the number of elements to remember: ');
nr = Number(nr);

let arr = [];

let i = 0;
while (i < nr) {
  arr[i] = prompt('Input the ' + (i + 1) + ' element' + ' of ' + nr + ': ');
  arr[i] = Number(arr[i]);
  console.log(arr[i]);
  i++;
}

let x = prompt('Input the new element you want to add in the array: ');
x = Number(x);

let k = prompt('On which position do you want to add the new element?');
k = Number(k);

if (k < 0 || k > nr - 1) {
  alert('Out of the array!');
}
else {
  m = nr + 1;
  let brr = [];
  i = 0;
  while (i < m) {
    if (i < k) {
      brr[i] = arr[i];
    }
    if (i == k) {
      brr[k] = x;
    }
    if (i > k) {
      brr[i] = arr[i - 1];
    }
    i++;
  }
  console.log('');
  console.log('This new round shows the new array with the new element added at the specified position');

  i = 0;
  while (i < m) {
    console.log(brr[i]);
    i++;
  }
}
