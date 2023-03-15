// if
const number = 10;

if (number > 0) console.log('This number is greater than zero');

if (number > 0) {
  console.log('This number is greater than zero');
}

if (number > 0) {
  console.log('This number is greater than zero');
} else {
  console.log('This number is less than or equal zero');
}

if (number > 0) {
  console.log('This number is greater than zero');
} else if (number < 0) {
  console.log('This number is less than zero');
} else {
  console.log('This number is zero');
}

// switch
const number1 = 10;
const number2 = 5;
const operator = '+'; // +, -

switch (operator) {
  case '+':
    console.log(number1 + number2);
    break;
  case '-':
    console.log(number1 - number2);
    break;
  default:
    console.log('Invalid operator');
}

switch (true) {
  case number > 0:
    console.log('This number is greater than zero');
  case number < 0:
    console.log('This number is less than zero');
  default:
    console.log('This number is zero');
}

// while
let flag = 0;

while (flag < 10) {
  console.log(flag);

  flag++;
}

// do while
flag = 20;

do {
  console.log(flag);

  flag++;
} while (flag < 30);

// for
let result = '';

for (let flag = 0; flag < 30; flag++) {
  result += flag + ', ';
}

console.log(result);
