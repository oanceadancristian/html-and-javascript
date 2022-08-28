console.log('main.js is loaded');

let stringNumber = prompt('Input the number of strings:');
stringNumber = Number(stringNumber);

let bigString = [];

let string = [];

let i = 0;
while (i < stringNumber) {
  string[i] = prompt('Input string number ' + (i + 1) + ' of ' + stringNumber );
  console.log(string[i]);
  bigString = bigString + string[i] + ' ';
  i++;
}
console.log(bigString);

let count = 0;

i = 0 ;
while (i < bigString.length - 1) {
  if (bigString[i] === 'A' || bigString[i] === 'a') {
    count++;
  }
  i++;
}
console.log(count);
