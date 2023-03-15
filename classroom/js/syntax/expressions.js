// expression (commands: variable, literal, operator) => (value)
1 + 1;

const x = 10;

console.log(x - 10);

// console.log(x ---- 10);

// operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Grouping operator (Precedence, Associativity)
// const fahrenheit = 50;
// const celsius = fahrenheit - 32 / 1.8;
// console.log(celsius); //=> 32.2

const fahrenheit = 50;
const celsius = (fahrenheit - 32) / 1.8;
console.log(celsius); //=> 10

// Unary operator

console.log(-10);

console.log(typeof x);

// "Binary" operator (operands)
console.log(10 - 5);

// Ternary operator (_ ? _ : _)
const number = 10;

const isOdd = number % 2 === 1 ? 'odd' : 'even';

console.log(isOdd);

// Assignment operators
let y = 10;

// y = y + 1
y += 1;

// Equality operator: equality vs strick equality
console.log(1 == 1); // true
console.log(1 == '1'); // true
console.log(1 === 1); // true
console.log(1 === '1'); // false

// Binary bitwise
// 10 - 0b1010
//  1 - 0b0001 &
//  0 - 0b0000
console.log(10 & 1);
// 10 - 0b1011
//  1 - 0b0001 &
//  1 - 0b0001
console.log(11 & 1);
console.log(12 & 1);
console.log(13 & 1);

// binary logical
let count;
const result = count ?? 10;
console.log(result);
