(function ($) {
	"use strict";

	// Page Loaded...
	$(document).ready(function () {

		/*==========  Tooltip  ==========*/
		$('.tool-tip').tooltip();
		
		/*==========  Progress Bars  ==========*/
		$('.progress-bar').on('inview', function (event, isInView) {
			if (isInView) {
				$(this).css('width',  function() {
					return ($(this).attr('aria-valuenow')+'%');
				});
			}
		});
		$('.dial').on('inview', function (event, isInView) {
			if (isInView) {
				let $this = $(this);
				let myVal = $this.attr("value");
				let color = $this.attr("data-color");
				$this.knob({
					readOnly: true,
					width: 200,
					rotation: 'anticlockwise',
					thickness: .05,
					inputColor: '#232323',
					fgColor: color,
					bgColor: '#e8e8e8',
					'draw' : function () { 
						$(this.i).val(this.cv + '%')
					}
				});
				$({
					value: 0
				}).animate({
					value: myVal
				}, {
					duration: 1000,
					easing: 'swing',
					step: function() {
						$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			}
		});

		/*==========  Accordion  ==========*/
		$('.panel-heading a').on('click', function() {
			$('.panel-heading').removeClass('active');
			$(this).parents('.panel-heading').addClass('active');
		});

		/*==========  Responsive Navigation  ==========*/
		$('.main-nav').children().clone().appendTo('.responsive-nav');
		$('.responsive-menu-open').on('click', function(event) {
			event.preventDefault();
			$('body').addClass('no-scroll');
			$('.responsive-menu').addClass('open');
		});
		$('.responsive-menu-close').on('click', function(event) {
			event.preventDefault();
			$('body').removeClass('no-scroll');
			$('.responsive-menu').removeClass('open');
		});

		/*==========  Popup  ==========*/
		$('.share').on('click', function(event) {
			event.preventDefault();
			$('.popup').fadeToggle(250);
		});
		$('.slide-out-share').on('click', function(event) {
			event.preventDefault();
			$('.slide-out-popup').fadeToggle(250);
		});

		/*==========  Slide Out  ==========*/
		$('.header-action-button').on('click', function(event) {
			event.preventDefault();
			$('.slide-out-overlay').fadeIn(250);
			$('.slide-out').addClass('open');
		});
		$('.slide-out-close').on('click', function(event) {
			event.preventDefault();
			$('.slide-out-overlay').fadeOut(250);
			$('.slide-out').removeClass('open');
		});
		$('.slide-out-overlay').on('click', function(event) {
			event.preventDefault();
			$('.slide-out-overlay').fadeOut(250);
			$('.slide-out').removeClass('open');
		});

	});
})(jQuery);
