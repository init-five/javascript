const address = {
	street: "Jump Street",
	city: "London",
	zipCode: 55445,
};

// Factory Function

function createAddress(street, city, zipCode) {
	return {
		street: street,
		city: city,
		zipCode: zipCode,
	};
}

console.log(createAddress("a", "b", "c"));

// contructor function
function CreateAddress(street, city, zipCode) {
	this.newAddress = {
		street: street,
		city: city,
		zipCode: zipCode,
	};
}

console.log(createAddress("jack", "muqeet", 200));
