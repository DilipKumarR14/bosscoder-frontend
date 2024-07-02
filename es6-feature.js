
// <!-- Arrow function -->

// Regular function expression
function add(a, b) {
  return a + b;
}

// Arrow function equivalent
const add = (a, b) => a + b;

// <!-- Template literals -->
name = 'Alice';
const greeting = `Hello, ${name}!
Welcome to our website.`;

console.log(greeting);

//Destructuring

// Array destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2

// Object destructuring
const person = { name: 'Alice', age: 30 };
const { name, age } = person;

console.log(name); // Output: 'Alice'
console.log(age); // Output: 30


// Spread/Rest Operators:

// Spread operator (arrays)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Rest parameter (function arguments)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
