console.log('main.js is loaded');

let userString = prompt('Input the string:');
let userSearch = prompt('Input the character to search:');

let found = false;

let i = 0;
while (i < userString.length) {
  if (userString[i] == userSearch) {
    found = true;
  }
  i++;
}

if (found == true) {
  console.log('The character was found');
}
else {
  console.log('The character was not found');
}
