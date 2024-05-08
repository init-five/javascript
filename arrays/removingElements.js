const numbers = [1, 2, 3, 4];

//removing from end
const last = numbers.pop();
console.log(last);
//removing from beginning
const first = numbers.shift();
console.log(first);
//removing from middle
const middle = numbers.splice(1, 1);
console.log(middle);

console.log(numbers);
