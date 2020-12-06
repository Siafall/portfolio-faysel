		
		$(window).scroll(function() {
			$(".animate").each(function() {
				var y =  $(this).offset().top;

				var win_y = $(window).scrollTop();
				if(win_y + 1000 > y) 
					$(this).addClass("slide-bottom");
			})
		})
