// length or array and typeof array elements is dynamic
let selectedColors = ["red", "blue"];

selectedColors[2] = "green";
selectedColors[3] = 2;

console.log(selectedColors);
console.log(selectedColors[0]);

// typeof array is object
console.log(typeof selectedColors);

// properties
console.log(selectedColors.length);
