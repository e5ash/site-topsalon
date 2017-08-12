$(document).ready(function($) {

	$('.images__wrap').slick({
		dots: true,
		appendArrows: $('.images__arrows'),
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon icon-arrow-right"></i></button>'
	})

	$('.reviews__list').slick({
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon icon-arrow-left-black"></i></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon icon-arrow-right-black"></i></button>',
		responsive: [{
			breakpoint: 1010,
			settings: {
				slidesToShow: 1,
				variableWidth: false,
				centerMode: false
			}
		}]
	})

	$('#tabs').tabs();


	$('.mobile-btn').click(function() {

		$('.nav').fadeToggle();
	});

	$(window).resize(function() {
		$('.nav').removeAttr('style');
	});
});;