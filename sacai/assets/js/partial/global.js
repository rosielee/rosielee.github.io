(function() {

	var site = {

		init: function() {

			site.scrollToTop();
			site.lazyLoad();
			site.openPanels();
			site.backToTop();
			var s = skrollr.init();

		},

		scrollToTop: function() {

			setTimeout(function() {
				window.scrollTo(0, 0);
			}, 300);

		},

		lazyLoad: function() {

		    $('.lazy').lazyload({
		    	threshold : 1500,
		    	effect    : 'fadeIn'
		    });

		},

		openPanels: function() {

			$('#door-open, .cross').on('click', function() {

				setTimeout(function() {
					window.scrollTo(0, 500);
				}, 600);

				setTimeout(function() {
					window.scrollTo(0, 1000);
				}, 900);

			});

		},

		backToTop : function() {

			$('#backtotop').on('click', function() {

				setTimeout(function() {
					window.scrollTo(0, 0);
				}, 300);

			});

		}

	};

	site.init();

})();