console.log('main.js is loaded');

let userNumber = prompt('The sum of the even numbers from 1 to: ');
userNumber = Number(userNumber);

if (userNumber == 0) {
  alert('The sum is 0');
} else {
  let s = 0;
  let i = 1;
  while (i <= userNumber) {
    if (i % 2 == 0) {
      s = s + i;
    }
    i = i + 1;
  }
  alert('The sum is: ' + s);
}
