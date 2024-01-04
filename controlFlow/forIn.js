// iterate over an array or properties of object

const person = {
	name: "Jack",
	age: 28,
};

for (let key in person) {
	// display key
	console.log(key);
	// display value
	console.log(person[key]);
}

const colors = ["red", "green", "blue"];
for (let index in colors) {
	console.log(index, colors[index]);
}
