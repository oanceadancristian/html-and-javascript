console.log('main.js loaded');

// let userNumbers = prompt('Calculate the sum of the following first positive numbers: ');
// userNumbers = Number(userNumbers);
//
// let sum = (userNumbers * (userNumbers + 1)) / 2
// alert(sum);

let userNumbers = prompt('Calculate the sum of the following first positive numbers:');
userNumbers = Number(userNumbers);

if (userNumbers == 0) {
  alert('The sum is 0');
}
else {
  let s = 0;
  let i = 0;
  while (i <= userNumbers) {
    s = s + i;
    i = i + 1;
  }
  alert('The sum is ' + s);
}
