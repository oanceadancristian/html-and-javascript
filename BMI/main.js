let weight = prompt('Input your weight in KG: ');
weight = Number(weight);

let height = prompt('Input your height in metres: ');
height = Number(height);

let bmi = weight / (height * height);

alert('Your BMI is: ' + bmi);
