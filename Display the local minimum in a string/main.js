console.log('main.js is loaded');

let nr = prompt('Input the number of elements to remember: ');
nr = Number(nr);

let arr = [];

let minLocale1, minLocale2, minLocale3;

let i = 0;
while (i < nr) {
  arr[i] = prompt('Input a new number: ');
  arr[i] = Number(arr[i]);
  console.log(arr[i]);
  i = i + 1;
}

if (arr[0] < arr[1]) {
  minLocale1 = arr[0];
  console.log(minLocale1);
}

let j = 0;
while (j < nr) {
  if (arr[j - 1] > arr[j] && arr[j] < arr[j + 1]) {
    minLocale2 = arr[j];
    console.log(minLocale2);
  }
  j = j + 1;
}

if (arr[nr - 1] < arr[nr - 2]) {
  minLocale3 = arr[nr - 1];
  console.log(minLocale3);
}
