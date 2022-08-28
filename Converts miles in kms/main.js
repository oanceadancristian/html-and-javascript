console.log('main.js is loaded');

let distance = prompt('Input distance in miles: ');
distance = Number(distance);

let mile = 1.60394;

if (distance >= 0) {
  alert(distance + ' mile = ' + distance * mile + ' km ');
}
else {
  alert('Invalid distance');
}
