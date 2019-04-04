window.onload = function() {
	if ($(window).scrollTop() == 0 && window.location.hash.length == 0) {
		$('html, body').animate({
			scrollTop: ($('#home').offset().top - 54)
		}, 1000, "easeInOutExpo");
	}
	if (window.location.hash.length > 1) {
		$('html, body').animate({
			scrollTop: ($(window.location.hash).offset().top - 54)
		}, 1000, "easeInOutExpo");
	}
};
