// without variable declaration keyword (bad variable declaration)
x = 10;

// const x = 10;

// console.log(x);

// const declaration
const number = 10;

// let declaration
let value = 10;

// var declaration
var name = 'John';

// 'const' declarations must be initialized.
// const number;

// reassignment
// const: not reassignment
// TypeError: Assignment to constant variable.
// number = 20;

// const: not immutable
const numbers = [1, 2, 3];

numbers[0] = 10;

console.log(numbers);

// let, var: do reassignment
value = 'Hello';

name = 'Alice';

// scope
// Cannot redeclare block-scoped variable 'number'.
// const number = 10;

// Cannot redeclare block-scoped variable 'value'.
// let value = true;

var name = 'Bob';

function sum(a, b) {
  const number = 20;

  return a + b;
}

// case sensitive
const Number = 10;

// dynamic types
value = true;

value = 'Hello';

// weak type
let number1 = 10;
let number2 = 5;
console.log(number1 - number2);

number1 = 10;
number2 = '5';
console.log(number1 - number2);

// type coercion
// https://exploringjs.com/deep-js/ch_type-coercion.html
number1 = 10;
number2 = '5';
console.log(number1 + number2);

number1 = 10;
number2 = '5';
console.log(number1 + Number(number2));
