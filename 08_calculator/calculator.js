const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
  result = 0;
  filtered = num.filter(x => result += x);
  return result;
};

const multiply = function(num) {
  result = 1;
  filtered = num.filter(x => result *= x);
  return result;
};

const power = function(num1, num2) {
  return num1 ** num2	
};

const factorial = function(num) {
  let result = 1; 
  for(let d = num; d > 0; d--) {
    result *= d;
  }
  return result;
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
