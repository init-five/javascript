function showNumbers(limit) {
	for (let i = 1; i <= limit; i++) {
		if (i % 2 === 0) {
			console.log("even");
		} else {
			console.log("odd");
		}
	}
}
console.log(showNumbers(10));
