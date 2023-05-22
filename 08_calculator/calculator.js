const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(num) {
  let n = 1;
  for (let i = num; i > 0; i--) {
    n *= i;
  }
  return n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
