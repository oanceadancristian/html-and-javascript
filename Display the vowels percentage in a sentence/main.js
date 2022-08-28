console.log('main.js is loaded');

let userString = prompt('Type the string:');

let vocal = 0;

let i = 0;
while (i < userString.length) {
  if (
    userString[i] === 'A' ||
    userString[i] === 'a' ||
    userString[i] === 'E' ||
    userString[i] === 'e' ||
    userString[i] === 'I' ||
    userString[i] === 'i' ||
    userString[i] === 'O' ||
    userString[i] === 'o' ||
    userString[i] === 'U' ||
    userString[i] === 'u'
  ) {
    vocal++;
  }
  i++;
}
console.log('Vowels: ' + vocal);

let space = 0;

i = 0;
while (i < userString.length) {
  if (userString[i] === ' ') {
    space++;
  }
  i++;
}
console.log('Spaces: ' + space);

let letter = userString.length - space;
console.log('Letters: ' + letter);

let vocalPercentage = (vocal / letter) * 100;
console.log('The vowels percentage is ' + vocalPercentage + '%');
