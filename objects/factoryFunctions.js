// factor functions produce objects
// factor function
// notation is camel case: oneTwoThree
function createCircle(radius) {
	return {
		radius: radius,
		draw() {
			console.log("draw");
		},
	};
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
