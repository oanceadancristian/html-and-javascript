console.log('main.js loaded... ');

let register = prompt('Input the number of grades to remember: ');
register = Number(register);

let grades = [];

let i = 0;
while (i < register) {
  grades[i] = prompt('Input a new grade');
  grades[i] = Number(grades[i]);
  i = i + 1;
}

let max = grades[0];
i = 1;
while (i < register) {
  if (grades[i] > max ) {
    max = grades[i];
  }
  i = i + 1;
}
console.log('The highest grade is: ' + max);
