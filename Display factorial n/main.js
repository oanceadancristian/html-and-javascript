console.log('main.js is loaded');

let userNumber = prompt('Calculate the multiplication of the following first numbers: ');
userNumber = Number(userNumber);

if (userNumber == 0) {
  alert('Result is: ' + 1);
}
else {
  let p = 1;
  let i = 1;
  while (i <= userNumber) {
    p = p * i;
    i = i + 1;
  }
  alert('The result is: ' + p);
}
