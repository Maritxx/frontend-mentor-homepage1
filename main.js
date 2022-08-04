//The $ sign makes clear it's using jQuery.
//Syntax goes $(selector).action();
//Selector finds/selects an HTML element.

let slidePicture = 1;
let slideText = 1;
showPicture(slidePicture);
showText(slideText);



$(function() {
	$("#buttonPrevious").click(function() {
		changePicture(-1);
		changeText(-1);
	});
});


$(function() {
	$("#buttonNext").click(function() {
		changePicture(1);
		changeText(1);
		console.log("button is clicked");
	});
});




function changePicture(p) {
	showPicture(slidePicture += p);
	console.log("change picture is running");
};


function changeText(t) {
	showText(slideText += t);
};




function showPicture(p) {
	let indexp;
	let pictureSlides = $("#pictureSlide");

	if (p > pictureSlides.length) {
		slidePicture = 1
	};

	if (p < 1 ) {
		slidePicture = pictureSlides.length
	};

	for (indexp = 0; indexp < pictureSlides.length; indexp++) {
		pictureSlides[indexp].style.display = "none";
		console.log("this should be hidden");
	};

	pictureSlides[slidePicture - 1].style.display = "block";
};


function showText(t) {
	let indext;
	let textSlides = $("#textSlide");

	if (t > textSlides.length) {
		slideText = 1
	};

	if (t < 1) {
		slideText = textSlides.length
	};

	for (indext = 0; indext < textSlides.length; indext++) {
		textSlides[indext].style.display = "none";
	};

	textSlides[slideText - 1].style.display = "block";
};