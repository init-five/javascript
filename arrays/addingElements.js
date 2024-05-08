const numbers = [3, 4];
// adding at the end
numbers.push(5, 6);
// adding numbers at the beginning
numbers.unshift(1, 2);
// adding numbers in the middle
numbers.splice(2, 0, "a", "b");

console.log(numbers);
