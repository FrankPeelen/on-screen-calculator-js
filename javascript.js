$(document).ready(function() {
	var num1 = '';
	var operator = '';
	var num2 = '';
	var one = true;

	var add = function (one, two) {
		return one + two;
	};

	var multiply = function (one, two) {
		return one * two;
	};

	var divide = function(one, two) {
		return one / two;
	};

	var substract = function(one, two) {
		return one - two;
	};

	var num = function(func) {
		if (one) {
			num1 = func(num1);
		} else {
			num2 = func(num2);
		};
	};

	var operation = function(op) {
		if (one) {
			one = false;
		} else {
			num1 = calculate();
			num2 = '';
		};
		operator = op;
	};

	var parse = function() {
		num1 = parseInt(num1);
		num2 = parseInt(num2);
	};

	var calculate = function() {
		if (one) {
			return;
		};
		switch (operator) {
			case '+':
				parse();
				return add(num1, num2);
			case '-':
				parse();
				return substract(num1, num2);
			case '/':
				parse();
				return divide(num1, num2);
			case 'x':
				parse();
				return multiply(num1, num2);
		};
	};

	var clear = function() {
		num1 = '';
		operator = '';
		num2 = '';
		one = true;
	};

	$('button').click(function(ev) {
		console.log(ev.target.value);
	});

	$('.num').click(function(ev) {
		value = ev.target.value;
		num(function(num) {
			return num += value;
		});
	});

	$('.operator').click(function(ev) {
		switch (ev.target.value) {
			case 'CLEAR':
				clear();
				break;
			case '+':
				operation('+');
				break;
			case '-':
				operation('-');
				break;
			case '/':
				operation('/');
				break;
			case 'x':
				operation('x');
				break;
			case '=':
				console.log(calculate());
				clear();
				break;
		};
	});
});
