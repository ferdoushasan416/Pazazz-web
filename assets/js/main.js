(function ($) {
"use strict";

$(document).ready(function(){
	$('.testimonial-active').slick({
	  autoplay:true,
	  slidesToShow: 2,
	  loop:true,
	  dots:true,
	  responsive: [
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});
  });

// WOW active
new WOW().init();


})(jQuery);