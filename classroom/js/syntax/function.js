// function declaration
function sum(a, b) {
  return a + b;
}

// anonymous/lambda function
const minus = function (a, b) {
  return a - b;
};

// arrow function
const divide = (a, b) => {
  return a / b;
};

const multiply = (a, b) => a * b;

// call function
console.log(sum(1, 1));
console.log(sum(1));
console.log(sum(1, 1, 1));

// case sensitive
function Sum(a, b) {
  return `Soma: ${a + b}`;
}

console.log(Sum(1, 1));
console.log(sum(1, 1));

// function overriding
function addition(a, b) {
  return `Soma: ${a + b}`;
}

function addition(a, b) {
  return a + b;
}

console.log(addition(1, 1));

// default parameter
function subtraction(a, b = 1) {
  return a - b;
}

console.log(subtraction(10, 5));
console.log(subtraction(10));

// rest parameter
function multiplication(...values) {
  let result = 1;

  for (const value of values) {
    result *= value;
  }

  return result;
}

console.log(multiplication(1)); // [1]
console.log(multiplication(1, 2)); // [1, 2]
console.log(multiplication(1, 2, 3, 4)); // [1, 2 , 3 ,4]
