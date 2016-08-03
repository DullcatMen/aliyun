var emBtns = $(".slider-btn .emBtns");
emBtns.click(function() {
	$(this).addClass("active").siblings().removeClass("active");
	// console.log($(this).index());
	var _index = $(this).index() + 1;
	// console.log($(".slider-bg .bgs.bg-"+_index));
	var sliderBg = $(".slider-bg .bgs.bg-"+_index);
	sliderBg.addClass("show").siblings().removeClass("show");

	var _sliderText = $(".slider-box .slider-text.t"+_index);
	_sliderText.addClass("show").siblings().removeClass("show");
});

var li_Hover = $(".top-nav .nav-li.left");
// console.log(li_Hover);
li_Hover.mouseenter(function() {
	// console.log($(this).index());
	var _index = $(this).index();
	var dropdown = $(".dropDown.d"+_index);
	// console.log(dropdown);
	dropdown.addClass("show").siblings().removeClass("show");

	var active_height = dropdown.height();
	console.log(active_height);
	$(".dropdown-box").animate({height : active_height + "px"});

}).mouseleave(function() {
	var _index = $(this).index();
	var dropdown = $(".dropDown.d"+_index);
	dropdown.removeClass("show");

	$(".dropdown-box").css("height","0");
});


