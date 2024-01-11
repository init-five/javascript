const address = {
	street: "Jump Street",
	city: "London",
	zipCode: 55445,
};

function showAddress(address) {
	for (let key in address) {
		console.log(key, address[key]);
	}
}

showAddress(address);
