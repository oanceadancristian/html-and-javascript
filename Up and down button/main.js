console.log('main.js is loaded');

let clickDisplay = document.querySelector('#click-display');

clickCounter = 0;

function clickUp(){
  if (clickCounter == 10) {
    alert("You can't go up!");
  }
  if (clickCounter < 10) {
    clickCounter++;
  }
  clickDisplay.innerText = clickCounter;
}

function clickDown(){
  if (clickCounter == 0) {
    alert("You can't go down!");
  }
  if (clickCounter > 0) {
    clickCounter--;
  }
  clickDisplay.innerText = clickCounter;
}
