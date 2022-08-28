console.log('main.js is loaded');

let end1 = prompt('Insert the first number: ');
end1 = Number(end1);

let end2 = prompt('Insert the second number: ');
end2 = Number(end2);

if (end1 <= end2) {
  let sum1 = 0;
  let i = end1;
  while (i <= end2) {
    sum1 = sum1 + i;
    i = i + 1;
  }
  alert('The sum is: ' + sum1);
}

if (end1 >= end2) {
  let sum2 = 0;
  let j = end1;
  while (j >= end2) {
    sum2 = sum2 + j;
    j = j - 1;
  }
  alert('The sum is: ' + sum2);
}
