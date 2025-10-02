const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
	let total = 0;
  for (i = 0; i < num.length; i++)
  {
    total += num[i];
  }
  return total;
};

const multiply = function(num) {
  let total = 1;
  for (i = 0; i < num.length; i++){
    total *= num[i];
  }
  return total;
};