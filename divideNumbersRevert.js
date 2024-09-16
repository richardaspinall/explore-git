// divideNumbers.js
function divideNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  if ((b = 0)) {
    throw new Error('Cannot divide by zero');
  }
  return "I'm breaking the code!";
}

module.exports = divideNumbers;
