// widht is greater than height --> landscape
function isLandscape(width, height) {
	return width > height ? "image is Landscape" : "image is Potrait";
}

image1 = isLandscape(200, 100);
console.log(image1);
image2 = isLandscape(100, 200);
console.log(image2);
image3 = isLandscape(100, 100);
console.log(image3);
