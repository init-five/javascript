// objects are dynamic
// we can add and remove new properties and functions

const circle = {
	raduis: 1,
};

circle.color = "yellow";
circle.draw = function () {};

delete circle.color;
delete circle.draw;

console.log(circle);
