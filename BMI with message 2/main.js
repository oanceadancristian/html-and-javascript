let weight = prompt('Insert your weight in KG');
weight = Number(weight);

let height = prompt('Insert your height in metres');
height = Number(height);

let bmi = weight / (height * height);

if (bmi < 18.5) {
  alert('Underweight');
  if (bmi >= 18.5) {
    alert('Normal weight');
    if (bmi > 24.9) {
      alert('Overweight');
      if (bmi > 30) {
        alert('Obesity');
      }
    }
  }
}
