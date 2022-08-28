const dog = document.createElement('img');
document.body.appendChild(dog);

fetch('https://dog.ceo/api/breeds/image/random')
  .then((res) => res.json())
  .then((data) => {
    dog.src = data.message;
    console.log(data.status);
  });
