// a function performs a task
// functions can have inputs

// function declaration
// myName is parameter
function greet(myName, lastName) {
	console.log(`Hello ${myName} ${lastName}!`);
}

// function call
// Muqeet is argument
greet("Abdul", "Muqeet");
greet("Angela", "Yu");

// calculating a value by function
function square(number) {
	return number * number;
}

let number = square(2);
console.log(number);
