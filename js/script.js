$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		nav: false,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		margin: 20,
		slideSpeed: 1000,
		animateIn: "fadeIn",
		animateOut: "fadeOut",
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			960: {
				items: 3
			}
		}
	});
});
