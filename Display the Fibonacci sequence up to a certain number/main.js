const fib = document.querySelector('#fibonacci');
const btn = document.querySelector('button');
const ol = document.querySelector('ol');
const p = document.querySelector('p');

btn.addEventListener('click', showNumbers);

function showNumbers() {
  let userValue = Number(fib.value);
  let n1 = 0;
  let n2 = 1;
  let nextNum;

  for (let i = 0; i <= userValue; i++) {
    if (n1 <= userValue) {
      let li = document.createElement('li');
      li.innerText = n1;
      ol.appendChild(li);
    }

    nextNum = n1 + n2;

    n1 = n2;
    n2 = nextNum;
  }
}
