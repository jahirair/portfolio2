(function ($) {
	'use strict';

	$('.isotope-filtering').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({
			filter: filterValue
		});
	});
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item',
			horizontalOrder: true
		}
	});


	//magnific popup
	$('.portfolio-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},

	});
	// one page nav
	$('#nav').onePageNav(); //ul id must be nav to activate it
	

	//scroll to top
	// cache scroll to top button
	var b = $('#back-top');
	// Hide scroll top button
	b.hide();
	// FadeIn or FadeOut scroll to top button on scroll
	$(window).on('scroll', function () {
		// if you scroll more then 300px then fadein goto top button
		if ($(this).scrollTop() > 300) {
			b.fadeIn();
			// otherwise fadeout button
		} else {
			b.fadeOut();
		}
	});
	// Animated smooth go to top
	b.on('click', function () {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	//progressbar
	$('.progress-bar').waypoint(function () {
		$('.progress-bar').css({
			animation: "animate-positive 2s",
			opacity: "1"
		});
	}, {
		offset: '75%'
	});


})(jQuery)



$(document).ready(function () {
	//sticky nav 
	$(window).on('scroll', function () {

		if ($(this).scrollTop() > $('#home').height() / 1.1) {
			$('nav').addClass("sticky");
		} else {
			$('nav').removeClass("sticky");
		}
	});

	wow = new WOW({
		animateClass: 'animated',
		offset: 100,
		callback: function (box) {
			console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
		}
	});
	wow.init();

	//load more

	size_li = $("#myList div.load").size();
	//alert($('#myList div.load').size());
	x = 4;
	//alert("#myList div:lt('+x+')");
	$('#myList div.load:lt(' + x + ')').show();
	$('#loadMore').click(function () {
		x = (x + 4 <= size_li) ? x + 4 : size_li;
		$('#myList div.load:lt(' + x + ')').show();
		//alert(x);
		if (x == size_li) {
			//$('#loadMore').hide();
			$('#loadMore').text("No More Posts");
		}
	});


});