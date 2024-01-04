// break means jump out of the loop
// continue means skip that part and continue executing the loop

let i = 0;
while (i <= 10) {
	if (i === 5) break;
	console.log(i);
	i++;
}

while (i <= 10) {
	if (i % 2 === 0) {
		i++;
		continue;
	}

	console.log(i);
	i++;
}
