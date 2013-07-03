(function ($, undefined) {
	"use strict";
	
	var windowWidth = $(window).width();
		
	function hideHomeWrapper() {
		
		$('.home-wrapper').animate({
			left: - windowWidth + 'px'
		}, 300, showTwitterAcct() );
		
	}
	
	function showTwitterAcct() {
		 
		 $('.tweet-wrapper').animate({
				left: windowWidth/2 - $('.tweet-wrapper').width()/2 + 'px',
				display: "inline-block"
			}, 300); 

	}
	
	
	function bindEvents() {
		$('.acct a').on('click', function(e){
			e.preventDefault();
			hideHomeWrapper();			
		});
		
		$(window).resize( function () {
			windowWidth = $(window).width();
		});
	}
	
	function loadBody() {
		bindEvents();
	}
	
	$(document).ready(function() {
		loadBody();
	});
	
})(jQuery);