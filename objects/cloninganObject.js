const circle = {
	radius: 1,
	draw() {
		console.log("draw");
	},
};

// const another = {};

// for (let key in circle) {
// 	another[key] = circle[key];
// }

// circle copies all of its data into {}
// circle is source object and {} is target object
//const another = Object.assign({}, circle);

const another = { ...circle };
console.log(another);
