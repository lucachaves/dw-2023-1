x = 10;

// const
const number = 10;

// 'const' declarations must be initialized.
// const number;

// TypeError: Assignment to constant variable.
// number = 20;

// Not reassignment
const numbers = [1, 2, 3];

numbers[0] = 10;

console.log(numbers);

// scope
// Cannot redeclare block-scoped variable 'number'.
// const number = 10;

function sum(a, b) {
  const number = 20;

  return a + b;
}

// let
let value = 10;

// var
var name = 'John';

// case sensitive
