$(document).ready(function(){
	if($('.slider-area').length > 0){
		$('.slider-area').slick({
			autoplay: false,
			prevArrow: '.photo-slider .prev',
			nextArrow: '.photo-slider .next',
			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear'
		});
	}
	/*ancor*/
	$('a[href*=#]').bind("click", function(e){
	     var anchor = $(this);
	     $('html, body').stop().animate({
	        scrollTop: $(anchor.attr('href')).offset().top-50
	     }, 1000);
	     e.preventDefault();
	  });
});