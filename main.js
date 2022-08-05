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
	});
});




function changePicture(p) {
	showPicture(slidePicture += p);
};


function changeText(t) {
	showText(slideText += t);
};




function showPicture(p) {
	let indexp;
	let pictureSlides = $(".pictureSlide");

	if (p > pictureSlides.length) {
		slidePicture = 1
	};

	if (p < 1 ) {
		slidePicture = pictureSlides.length
	};

	for (indexp = 0; indexp < pictureSlides.length; indexp++) {
		pictureSlides[indexp].style.display = "none";
	};

	pictureSlides[slidePicture - 1].style.display = "block";
};


function showText(t) {
	let indext;
	let textSlides = $(".textSlide");

	if (t > textSlides.length) {
		slideText = 1
	};

	if (t < 1) {
		slideText = textSlides.length
	};

	for (indext = 0; indext < textSlides.length; indext++) {
		textSlides[indext].style.display = "none";
	}

	textSlides[slideText - 1].style.display = "block";
};









var wWidth = $(window).width();
var wHeight = $(window).height();


function heroHeight() {
	var aboutHeight = $("section.about-section").height();

	$("section.hero-section").outerHeight(wHeight - aboutHeight);
}




$(window).on("load resize orientationchange", function() {
	wWidth = $(window).width();
	wHeight = $(window).height();

	if (wWidth >= 1196 && wHeight >= 806) {
		heroHeight();
	} else {
		$("section.hero-section").css("height", "auto");
	}
});








function dropdownMenu() {
	$(".mobile-menu__dropdown").toggleClass("expand");
}


function navToggle() {
	$("#nav-icon").toggleClass("open");
}


function overlayToggle() {
	$("#overlay").toggleClass("active");
}


$("div#nav-icon").click(function() {
	dropdownMenu();
	navToggle();
	overlayToggle();
});


