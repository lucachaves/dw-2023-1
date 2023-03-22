/**
 * operator: '+', '-', '*', '/'
 */
function calc(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    default:
      return 'Invalid operator';
  }
}

export { calc };
