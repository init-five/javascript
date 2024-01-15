function CreateAddress(street, city, zipCode) {
	this.newAddress = {
		street: street,
		city: city,
		zipCode: zipCode,
	};
}

let address1 = new CreateAddress("a", "b", 1);
let address2 = new CreateAddress("a", "b", 1);

function areEqual(address1, address2) {
	return (
		address1.street === address2.street &&
		address1.city === address2.city &&
		address1.zipCode === address2.zipCode
	);
}

console.log(areEqual(address1, address2));

function areSame(address1, address2) {
	return address1 === address2;
}

console.log(areSame(address1, address2));
