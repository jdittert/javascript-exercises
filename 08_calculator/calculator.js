const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(arr) {
	let total = 0;
  return arr.reduce((num, total) => num + total,
  total);  
};

const multiply = function(arr) {
  let total = 1;
  return arr.reduce((num, total) => num * total, total);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  } else {
    let ans = num;
    for (i = num; i > 1; i--) {
      ans *= (i - 1);
    };
    return ans;
  };
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
