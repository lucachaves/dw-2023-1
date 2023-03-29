// create array with values
let values = [1, 2, 3];

// adding/changing values
let numbers = [];

numbers[0] = 0;

numbers[0] = 1;

// multiple types
const person = ['John', 20, true, ['john@email.com']];

console.log(person);

console.table(person);

// destructuring arrays
// const name = 'John';
// const age = 20;

// const student = [name, age]
const student = ['John', 20, true, ['john@email.com']];
// const name = student[0];
// const age = student[1];
const [name, age, , [email]] = student;

// spread operator
console.log(Math.min(1, 15, 10));

console.log(Math.min([1, 15, 10]));

console.log(Math.min(...[1, 15, 10]));

console.log(Math.max(...[1, 15, 10], ...[20, 30]));

// clone array
const newStudent = [...student, ['083999998888']];

console.table(newStudent);

// iteration
for (let index = 0; index < newStudent.length; index++) {
  console.log(newStudent[index]);
}

for (const value of newStudent) {
  console.log(value);
}

for (const index in newStudent) {
  console.log(index);
}
// Object Array

// Property: length
console.log([1, 2, 3].length);

// Mutator: push(), unshift(), pop(), shift(), reverse(), sort(), splice()
values = [1, 2, 3];

values.push(4);

values.unshift(0);

console.log(values);

values.reverse();

console.log(values);

values.push(12);

values.sort();

console.log(values);

values.sort((a, b) => a - b);

console.log(values);

const newValues = values.splice(2, 2);

console.log(values);

console.log(newValues);

// Accessor: includes(), join(), slice()
values = [1, 2, 3];

console.log(values.includes(1));

console.log(values.join('-'));

console.log(values.slice(0, 2));

// Iteration: map(), filter(), reduce(), every(), some()
// [1, 2, 3]
// f(x) = 2x
// [2, 4, 6]
console.log([1, 2, 3].map((x) => 2 * x));
console.log([1, 2, 3].filter((x) => x & 1));
