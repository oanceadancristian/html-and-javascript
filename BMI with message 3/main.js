function getStringFromUser(message) {
  const string = prompt(message);

  if (string === '' || string === null) {
    throw 'Please enter a valid input!';
  }

  return string;
}

const firstName = getStringFromUser('What is your first name?');
const lastName = getStringFromUser('What is your last name?');

function getGenderFromUser(message) {
  const gender = prompt(message);

  if (gender === '' || gender === null) {
    throw 'Please enter a valid input!';
  }

  return gender;
}
const gender = getGenderFromUser('What is your gender?');

function getNumberFromUser(message) {
  const input = prompt(message);
  const number = Number(input);

  if (input === '' || input === null) {
    throw 'Please enter a number!';
  }

  if (Number.isNaN(number)) {
    throw 'Please enter a valid number!';
  }

  return number;
}

const weight = getNumberFromUser('What is your weight in kg?');
const height = getNumberFromUser('What is your height in metres?');

const bmi = (weight / height ** 2).toFixed(0);

if (bmi < 18.5) {
  let bmiResult = bmi;
  console.log(
    `${firstName} ${lastName} | ${gender} | BMI: ${bmiResult} | Underweight`
  );
} else if (bmi >= 18.5 && bmi < 25) {
  let bmiResult = bmi;
  console.log(
    `${firstName} ${lastName} | ${gender} | BMI: ${bmiResult} | Normal Weight`
  );
} else if (bmi >= 25 && bmi < 30) {
  let bmiResult = bmi;
  console.log(
    `${firstName} ${lastName} | ${gender} | BMI: ${bmiResult} | Overwright`
  );
} else {
  let bmiResult = bmi;
  console.log(
    `${firstName} ${lastName} | ${gender} | BMI: ${bmiResult} | Obese`
  );
}
