console.log('main.js');

let nr = prompt(
  'Display the non-zero positive numbers less than or equal to: '
);
nr = Number(nr);

if (nr == 0) {
  console.log('The minimum number must be 1');
} else {
  let i = 1;
  while (i <= nr) {
    console.log(i);
    i = i + 1;
  }
}
