points = 0;
function checkSpeed(speed) {
	const speedLimit = 70;
	const kmPerPoint = 5;
	if (speed < speedLimit + kmPerPoint) {
		return "ok";
	}
	let points = Math.floor((speed - speedLimit) / kmPerPoint);
	if (points >= 12) {
		return "License Suspended";
	} else {
		return "Points", points;
	}
}

console.log(checkSpeed(80));
console.log(checkSpeed(70));
console.log(checkSpeed(100));
console.log(checkSpeed(71));
console.log(checkSpeed(181));
console.log(checkSpeed(77));
console.log(checkSpeed(130));
