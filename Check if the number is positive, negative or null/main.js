console.log('main.js is loaded');

let nr = prompt('Input a number: ');
nr = Number(nr);

if (nr > 0) {
  alert('The number is positive');
} else {
  if (nr == 0) {
    alert('The number is null');
  } else {
    if (nr < 0) {
      alert('The number is negative');
    }
  }
}
