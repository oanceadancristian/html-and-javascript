console.log('main.js is loaded');

let userNumber = prompt('Display divisible numbers with 3 or 5 from 1 to: ');
userNumber = Number(userNumber);

if (userNumber == 0) {
  console.log('The number must be minimum 1');
} else {
  let i = 1;
  while (i <= userNumber) {
    if (i % 3 == 0 || i % 5 == 0) {
      console.log(
        'The numbers from 1 to ' +
          userNumber +
          ' divisible with 3 or 5 are: ' +
          i
      );
    }
    i = i + 1;
  }
}
