// Displays the users list
// const url = new URL(
//   "http://quiz.siit.ro/api/users"
// );

// let headers = {
//   "Authorization": "Bearer {YOUR_AUTH_KEY}",
//   "Content-Type": "application/json",
//   "Accept": "application/json",
// };

// fetch(url, {
//   method: "GET",
//   headers,
// }).then(response => response.json());

// Display a user profile
// const url = new URL(
//   "http://quiz.siit.ro/api/users/14"
// );

// let headers = {
//   "Authorization": "Bearer {YOUR_AUTH_KEY}",
//   "Content-Type": "application/json",
//   "Accept": "application/json",
// };

// fetch(url, {
//   method: "GET",
//   headers,
// }).then(response => response.json());

// Display the profile of the authenticated user
// const url = new URL('http://quiz.siit.ro/api/profile');

// let headers = {
//   Authorization: 'Bearer {YOUR_AUTH_KEY}',
//   'Content-Type': 'application/json',
//   Accept: 'application/json',
// };

// fetch(url, {
//   method: 'GET',
//   headers,
// }).then((response) => response.json());

// Listing the questions and available answers
// const url = new URL(
//   "http://quiz.siit.ro/api/questions"
// );

// let params = {
//   "limit": "18",
//   "random": "",
// };
// Object.keys(params)
//   .forEach(key => url.searchParams.append(key, params[key]));

// let headers = {
//   "Content-Type": "application/json",
//   "Accept": "application/json",
// };

// fetch(url, {
//   method: "GET",
//   headers,
// }).then(response => response.json());

// Store question and its answers
// const url = new URL(
//   "http://quiz.siit.ro/api/questions"
// );

// let headers = {
//   "Authorization": "Bearer {YOUR_AUTH_KEY}",
//   "Content-Type": "application/json",
//   "Accept": "application/json",
// };

// let body = {
//   "question": "beatae",
//   "answers": [
//       {
//           "text": "odit",
//           "right": "assumenda"
//       }
//   ]
// }

// fetch(url, {
//   method: "POST",
//   headers,
//   body: JSON.stringify(body),
// }).then(response => response.json());

// Delete a question and its answers
// const url = new URL(
//   "http://quiz.siit.ro/api/questions/18"
// );

// let headers = {
//   "Authorization": "Bearer {YOUR_AUTH_KEY}",
//   "Content-Type": "application/json",
//   "Accept": "application/json",
// };

// fetch(url, {
//   method: "DELETE",
//   headers,
// }).then(response => response.json());

// List of questions belonging to the authenticated user
// const url = new URL(
//   "http://quiz.siit.ro/api/questions/own"
// );

// let headers = {
//   "Authorization": "Bearer {YOUR_AUTH_KEY}",
//   "Content-Type": "application/json",
//   "Accept": "application/json",
// };

// fetch(url, {
//   method: "GET",
//   headers,
// }).then(response => response.json());
