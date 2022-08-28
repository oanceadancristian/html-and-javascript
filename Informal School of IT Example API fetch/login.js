const url = new URL('http://quiz.siit.ro/api/login');

let headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

let body = {
  email: 'oanceadancristian@gmail.com',
  password: 'scoalainformala',
};

fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify(body),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
