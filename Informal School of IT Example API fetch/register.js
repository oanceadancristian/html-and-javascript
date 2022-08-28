const url = new URL('http://quiz.siit.ro/api/register');

let headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

let body = {
  email: 'sunt',
  name: 'corporis',
  password: 'reprehenderit',
  password_confirm: 'repellat',
  device_name: 'pariatur',
};

fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify(body),
}).then((response) => response.json());
