const marks = [80, 80, 50, 90];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
	let total = 0;
	for (let mark of marks) {
		total += mark;
	}
	let average = total / marks.length;
	if (average >= 1 && average <= 59) {
		console.log(`Your average is ${average} and your grade is F`);
	} else if (average >= 60 && average <= 69) {
		console.log(`Your average is ${average} and your grade is D`);
	} else if (average >= 70 && average <= 79) {
		console.log(`Your average is ${average} and your grade is C`);
	} else if (average >= 80 && average <= 89) {
		console.log(`Your average is ${average} and your grade is B`);
	} else if (average >= 90 && average <= 100) {
		console.log(`Your average is ${average} and your grade is A`);
	}
}
