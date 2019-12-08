;(function($) {
		"use strict";
		
	$('.reviews-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
				arrows: false,
				infinity: true,
				autoplay: false,
				autoplaySpeed: 3000,
				cssEase: 'ease-out',
				speed: 2500,
				appendDots: '.reviews-slider__dots',
		});

		$('.reviews-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
				console.log(currentSlide);
			});

	
	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1200);
		return false;
	});

	function burgerMenu(selector){
		let menu = $(selector);
		let button = menu.find('.burger-menu__btn');
		let links = menu.find('.burger-menu__link');
		let overlay = menu.find('.burger-menu__overlay');

		button.on('click', (e) => {
			e.preventDefault();
			toggleMenu();
		});

		links.on('click', () => toggleMenu());
		overlay.on('click', () => toggleMenu());

		function toggleMenu() {
			menu.toggleClass('burger-menu_active');

			if (menu.hasClass('burger-menu_active')) {
				$('body').css('overflow', 'hidden');
			} else {
				$('body').css('overflow', 'visible');
			}

		}

	}

	burgerMenu('.burger-menu');


	var time = 2, qty = 1;
	$(window).scroll(function(){
		$('#counter').each(function(){
			var
			position = $(this).offset().top,
			topWindow = $(window).scrollTop();

			if (position < topWindow + 800) {
				
				if (qty < 2) {
					$('.counter__qty').addClass('counter__qtyOpacity');
					$('div').each(function(){
						var 
						i = 1,
						num = $(this).data('num'),
						step = 1000 * time / num,
						that = $(this),
						int = setInterval(function(){
							if (i <= num) {
								that.html(i);
							} else {
								qty = qty + 2;
								clearInterval(int);
							}
							i++;
						},step);
					});
				};
			};
		});
	});
		
	
})(jQuery); 


