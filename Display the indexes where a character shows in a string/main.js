console.log('main.js is loaded');

let userString = prompt('Type the string:');

let i = 0;
while (i < userString.length) {
  if (userString[i] === 'A' || userString[i] === 'a') {
    console.log(i);
  }
  i++;
}
