// 8 bits represents 1 byte
// 1 = 00000001
// 2 = 00000010
// Result = 00000011
// this compares each bit
console.log(1 | 2); //Bitwise OR
console.log(1 & 2); //bitwise AND

// Read, Write, Execute permissions
// 00000100
// 00000010
// 00000001
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission =
	myPermission | readPermission | writePermission | executePermission;
console.log(myPermission);

let message = myPermission & readPermission ? "yes" : "no";
console.log(message);
