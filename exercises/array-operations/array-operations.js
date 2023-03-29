function sum(array) {
  let total = 0;

  for (const value of array) {
    total += value;
  }

  return total;
}

function product(array) {
  let total = 1;

  for (const value of array) {
    total *= value;
  }

  return total;
}

function sumOdds(array) {
  let total = 0;

  for (const value of array) {
    if (value % 2 === 1) {
      total += value;
    }
  }

  return total;
}

export { sum, product, sumOdds };
