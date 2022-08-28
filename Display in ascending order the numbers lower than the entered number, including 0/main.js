console.log(
  'Display in ascending order the numbers lower than the entered number, including 0'
);

let nr = prompt(
  'Display in asceding order, including 0, the numbers lower than: '
);
nr = Number(nr);

let i = nr;
while (i > 0) {
  console.log(i - 1);
  i = i - 1;
}
