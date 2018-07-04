$( document ).ready(function() {
	$(".slides-content").mouseenter(function() {
		$(this).mousemove(function(event) {
			var xer = (event.pageX/20) ;
			var yer = (event.pageY/20);
			$(".movingphoto").animate({bottom : (yer), right : (xer)},0);
		});
	});
	$(".slides-content").mouseleave(function() {
		$(".movingphoto").stop();
		$(".movingphoto").animate({Top : (50), Left : (0)},0);
	});
	loop();
	function loop() {
		var zmax = $(".slide").attr("counter");
		var selecting = $(".slide").attr("current");
		$(".controlling-unit-stopper").hide();
		$(".controlling-unit-stopper"+selecting).show();
		$(".progress").animate({width : "0"},0);
		$(".progress").animate({width : "100%"},10000);
		$(".slide").hide();
		$(".slide").removeClass("zoomer");
		$(".b2").hide();
		$(".b2").css({ marginTop : "100" });
		$(".b1").hide();
		$(".b1").css({ marginTop : "100" });
		function again() {
			$(".b2"+selecting).fadeIn( { duration: 700, queue: true });
			$(".b2"+selecting).animate({ marginTop : "30" }, {queue: true,duration :700});
		}
		$(".b1"+selecting).fadeIn( { duration: 700, queue: false });
		$(".b1"+selecting).animate({ marginTop : "30" }, {queue: true,duration :700},again());
		$(".slide"+selecting).fadeIn("fast");
		$(".slide"+selecting).addClass("zoomer");
		var english = /[\u0600-\u06FF]/;
		if(english.test($(".mtext"+selecting).html())) {
			$(".mtext"+selecting).hide();
			$(".mtext"+selecting).fadeIn(700);
			$(".mtext"+selecting).css("font-family","Cairo");
		} else {
			$(".mtext"+selecting).each(function(){
		  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
		});
		anime.timeline({loop: false})
			.add({
		    targets: '.mtext'+selecting+' .letter',
		    scale: [4,1],
		    opacity: [0,1],
		    easing: "easeOutExpo",
		    duration: 950,
		    delay: function(el, i) {
		      return 70*i;
		    }
			})
			.add({
	    targets: '.mtext'+selecting,
	    opacity: 0,
	    duration: 2000,
	    easing: "easeOutExpo",
	    delay: 999999999999999999999999999999999999999999
			});
		}
		if(english.test($(".stext"+selecting).html())) {
			$(".stext"+selecting).hide();
			$(".stext"+selecting).fadeIn(700);
		} else {
			$(".stext"+selecting).each(function(){
			$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
			});
			anime.timeline({loop: false})
			  .add({
			    targets: '.stext'+selecting+' .letter',
			    scale: [4,1],
			    opacity: [0,1],
			    easing: "easeOutExpo",
			    duration: 950,
			    delay: function(el, i) {
			      return 1500+30*i;
			    }
			  })
				.add({
			    targets: '.stext'+selecting,
			    opacity: 0,
			    duration: 2000,
			    easing: "easeOutExpo",
			    delay: 999999999999999999999999999999999999999999
			  });
		}
		zezz = setTimeout(loop, 10000);
		if(selecting == zmax) {
			selecting=1;
			$(".slide").attr("current", selecting);
		}
		else {
			selecting++
			$(".slide").attr("current", selecting);
		}
	}

	$('.controlling-unit').click(function(){
		clearTimeout(zezz);
		$(".progress").stop();
		var selecting = $(this).attr("spec");
		$(".slide").attr("current", selecting);
		loop();
	});
});
