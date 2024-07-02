let sum = 5 + 10;
let product = 3 * 7;

// Comparison Operators
let isEqual = 10 === 10; // true
let isGreater = 20 > 10; // true

// Logical Operators
let andOperator = (true && false); // false
let orOperator = (true || false); // true



// If Statements
let num = 10;
if (num > 0) {
    console.log('Number is positive');
} else if (num === 0) {
    console.log('Number is zero');
} else {
    console.log('Number is negative');
}

// Loops
// For Loop
for (let i = 0; i < 5; i++) {
    console.log('Count: ' + i);
}

// While Loop
let x = 0;
while (x < 5) {
    console.log('Count: ' + x);
    x++;
}

//arrays


// Array declaration
let fruits = ['Apple', 'Banana', 'Orange'];

// Accessing elements
console.log(fruits[0]); // Output: Apple

// Adding elements
fruits.push('Grapes'); // Adds 'Grapes' to the end of the array

// Iterating through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



//Object


// Object declaration
let person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello!');
    }
};

// Accessing object properties
console.log(person.name); // Output: John

// Calling object method
person.greet(); // Output: Hello!


