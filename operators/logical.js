let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

// logical AND &&
console.log(true && true);
console.log(false && true);

// logical OR ||
console.log(true || false);
// logical NOT !
let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);

// Falsy
// undefined, null, 0, false, '', NaN
// anything that is not falsy is truthy
// false || 1 || 2
// we get 1. as soon as we find a truthy, it returns
// this is called short circuiting
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log("current color:", currentColor);
