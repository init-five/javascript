//const array = ["", undefined, null, false, 0, NaN, 1, "string", true, 2.9];
const array = [0, 1, 2, ""];

let truthCounter = 0;
function countTruthy(array) {
	for (let i = 0; i <= array.length - 1; i++) {
		if (array[i]) {
			truthCounter += 1;
		}
	}
	console.log(truthCounter);
}

countTruthy(array);
