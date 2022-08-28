console.log('main.js is loaded');

let userString = prompt('Type the string:');

let space = 0;

let i = 0;
while (i < userString.length) {
  if (userString[i] === ' ') {
    space++;
  }
  i++;
}

let words = space + 1
console.log(words);
