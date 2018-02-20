var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10,
    dots : false,
	nav : true, // Show next and prev buttons
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem:true,
		responsiveClass:true,
		responsive:{
			0:{ items:1, nav : false, dots: true},
			768:{ items:3, nav : false, dots: true},
			1000:{ items:3, nav : false, dots: true },
			1025:{ items:3, nav : true, dots: false },
		}
});

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});



$(document).ready(function () {
			$("img.lazy").lazyload({
			    effect : "fadeIn"
			});
		});






$(function() {
	$(document).pjax("a", "#pjax-container", {
		fragment: "#pjax-container"
	})
});
$(document).on("ready pjax:end", function(a) {
	$(document).ready(function() {
		$.getScript("/assets/ytplayer/jquery.mb.ytplayer.min.js");
		$.getScript("/assets/theme/js/script.js");

		var owl = $('.owl-carousel');
		owl.owlCarousel({
		    items:1,
		    lazyLoad:true,
		    loop:true,
		    margin:10,
		    dots : false,
			nav : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
				responsiveClass:true,
				responsive:{
					0:{ items:1, nav : false, dots: true},
					768:{ items:3, nav : false, dots: true},
					1000:{ items:3, nav : false, dots: true },
					1025:{ items:3, nav : true, dots: false },
				}
		});

		owl.on('mousewheel', '.owl-stage', function (e) {
		    if (e.deltaY>0) {
		        owl.trigger('next.owl');
		    } else {
		        owl.trigger('prev.owl');
		    }
		    e.preventDefault();
		});


		$(document).ready(function () {
			$("img.lazy").lazyload({
			    effect : "fadeIn"
			});
		});
	});
});