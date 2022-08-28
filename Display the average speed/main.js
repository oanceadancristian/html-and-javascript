console.log('main.js is loaded');

let distance = prompt('Input distance in km: ');
distance = Number(distance);

let time = prompt('Input time in hours: ');
time = Number(time);

let speed = distance / time;

if (time == 0) {
  alert('Congratulations! You have discovered teleportation!');
} else {
  if (distance < 0 || time < 0) {
    alert('The travelled distance and the time duration must be positive!');
  } else {
    alert('The average speed was ' + speed + ' kms/h ');
  }
}
