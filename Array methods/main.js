const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

// Filter
const filteredItems = items.filter((item) => item.price <= 100);
console.log(filteredItems);

// Map
const itemNames = items.map((item) => item.name);
console.log(itemNames);

// Find
const foundItem = items.find((item) => item.name === 'Book');
console.log(foundItem);

// For Each
items.forEach((item) => console.log(item.name));

// Some
const hasInexpensiveItems = items.some((item) => item.price <= 100);
console.log(hasInexpensiveItems);

// Every
const hasInexpensiveItems2 = items.every((item) => item.price <= 100);
console.log(hasInexpensiveItems2);

// Reduce
let total = items.reduce((currentTotal, item) => {
  return currentTotal + item.price;
}, 0);
console.log(total);

// Includes
const numbers = [1, 2, 3, 4, 5];

const includesTwo = numbers.includes(2);
console.log(includesTwo);
