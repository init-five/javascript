function maxofNumbers(n1, n2) {
	if (n1 > n2) {
		console.log(`${n1} is greater than ${n2}`);
	} else if (n2 > n1) {
		console.log(`${n2} is greater than ${n1}`);
	} else {
		console.log(`${n1} is equal to ${n2}`);
	}
}

maxofNumbers(10, 20);
maxofNumbers(35, 15);
maxofNumbers(10, 10);
