$(document).ready(function() {
	$('#vertical').lightSlider({
      gallery:true,
      item:1,
      vertical:true,
      verticalHeight:295,
      vThumbWidth:50,
      thumbItem:8,
      thumbMargin:4,
      slideMargin:0
    });  
});

$(function() {

	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 60
				}, 400);
				return false;
			}
		}
	});

	$('#carousel').carousel({
		interval: 4000
	});  

});

