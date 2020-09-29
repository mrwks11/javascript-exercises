function add (num1, num2) {
	return Math.abs(num1) + Math.abs(num2);
}

function subtract (num1, num2) {
	return Math.abs(num1) - Math.abs(num2);
}

function sum (nums) {
	let total = 0;
	for (let i = 0; i < nums.length; i++) {
		total += nums[i];
	}
	return total;
}

function multiply (nums) {
	let total = 1;
	for (let i = 0; i < nums.length; i++) {
		total *= nums[i];
	}
	return total;
}

function power(num1, num2) {
	return num1 ** num2;
}

function factorial(num) {
	let total = 1;
	if (num > 1) {
		for (let i = num; i > 0; i--) {
			total *= i;
		}
		return total;
	} else {
		return total;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}