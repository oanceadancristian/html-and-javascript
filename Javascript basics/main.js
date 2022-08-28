console.log('1. Display in the console:');
console.log(
  '1. The numbers from 1 to 20 on a single line as text separated by ";" like this: 1;2;3;4;5;6...'
);
console.log('');

function displayNumbers() {
  let text = '';
  for (let i = 1; i <= 20; i++) {
    text += i + ';';
  }
  console.log(text);
}

displayNumbers();
console.log('');

console.log("2. The odd numbers from 1 to 20 (each on it's own line)");
console.log('');

function displayOddNumbers() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}

displayOddNumbers();
console.log('');

console.log('2. Create a function that:');
console.log(
  "1. Computes the maximum of all the numbers in an array and returns it (don't use Math.max or any built in function, use control structures) (function maxOfArr(arr) { } )"
);
console.log('');

function maxOfArr(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxOfArr([1, 2, 3, 4, 5]));
console.log('');

console.log(
  '2. Computes how many times a certain item appears in an array and returns the number (function countItem(arr, item) { } )'
);
console.log('');

function countItem(arr, item) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      count++;
    }
  }
  return count;
}

console.log(countItem([1, 2, 3, 4, 5, 5, 5], 5));
console.log('');

console.log('Challenges:');
console.log(
  '1. Using nested for statements (unul intr-altul) generate the following pattern in the console (hint: each line can be a line of text separated by space like in the first point of the homework)'
);
console.log('');

function displayPattern() {
  for (let m = 0; m < 2; m++) {
    let line1 = '';
    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
          line1 += k + ' ';
        }
      }
      console.log(line1);
    }

    let line2 = '';
    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < 2; j++) {
        for (let k = 1; k > -1; k--) {
          line2 += k + ' ';
        }
      }
      console.log(line2);
    }
  }
}

displayPattern();
console.log('');

console.log(
  "2. Create a function that takes one number as the input and displays in the console all numbers starting from 1 going all the way up to the input one by one. Instead of numbers that are divisible by 3 display 'fizz'. Instead of numbers divisible by 5 display 'buzz', instead of numbers divisible by both 3 and 5 display 'fizzbuzz'. function fizzbuzz(num) { }"
);
console.log('');

function fizzbuzz(num) {
  if (num === 0) {
    console.log(0);
  } else if (num >= 1) {
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0) {
        console.log('fizz');
      } else if (i % 5 === 0) {
        console.log('buzz');
      } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
      } else {
        console.log(i);
      }
    }
  }
}

fizzbuzz(10);
console.log('');
