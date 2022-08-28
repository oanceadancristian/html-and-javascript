console.log('main.js is loaded');

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

let userNumber = prompt('Guess a number from 1 to 10.');
userNumber = Number(userNumber);

let i = 0;
while (i < 2) {
  if (userNumber !== randomNumber) {
       userNumber = prompt('Try again!');
       userNumber = Number(userNumber);
   }
   i = i + 1;
 }

if (userNumber == randomNumber) {
alert('You guessed the correct number!');
}

if (userNumber !== randomNumber) {
alert('Game over!');
}
