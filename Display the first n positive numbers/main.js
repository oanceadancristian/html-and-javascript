console.log('main.js is loaded');

let userNumber = prompt('Display these first positive numbers: ');
userNumber = Number(userNumber);

let i = 0;
while (i <= userNumber) {
  console.log(i);
  i = i + 1;
}
