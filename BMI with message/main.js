console.log('main.js is loaded')

let weight = prompt('Insert your weight in KG');
weight = Number(weight);

let height = prompt('Insert your height in metres');
height = Number(height);

let bmi = weight / (height * height);

if(bmi < 18.5){
  alert('Underweight');
}
else{
  if(bmi >= 18.5 && bmi <= 24.9){
  alert('Normal weight');
  }
  else{
    if(bmi > 24.9 && bmi <= 29.9){
    alert('Overweight');
    }
    else {
      alert('Obesity');
    }
  }
}
