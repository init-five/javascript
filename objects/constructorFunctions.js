// constructor function also creates objects
// Pascal Notation: OneTwoThree
// this is the reference to the obejct that is executing this code
function Circle(radius) {
	this.radius = radius;
	this.draw = function () {
		console.log("draw");
	};
}
// new creates an empty object
// this sends data in the empty object
// return happens atuomatically
const circle = new Circle(1);
console.log(circle);
