console.log('main.js is loaded');

let distance = prompt('Distance in KM');
distance = Number(distance);

let speed = prompt('Speed in KM/H');
speed = Number(speed);

let time = prompt('Time in minutes');
time = Number(time);

time = time / 60;

if (time == distance / speed) {
  alert('You reached the destination on time');
}
else{
  if (time < distance / speed) {
    alert('You need more time to reach the destination.');
  }
  else {
    if (time > distance / speed) {
      alert ('You have already arrived at the destination');
    }
  }
}
