const movie = {
	title: "POTC",
	releaseYear: 2007,
	rating: 8.1,
	hero: "Johnny Depp",
};
function showProperties(obj) {
	for (let key in obj) {
		let display = obj[key];
		if (typeof display === "string") {
			console.log(key, obj[key]);
		}
		//console.log(key, obj[key]);
	}
}

showProperties(movie);
