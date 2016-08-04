this._eq = 0;
setInterval(function(){
	//这里this指向window
	var index;
	index = this._eq;
	this._eq = index >= 4 ? 0 : ++index;
	// console.log(this._eq);

	var eq_auto = this._eq + 1;
	// console.log(eq_auto);
	var sliderBg = $(".slider-bg .bgs.bg-"+eq_auto);
	sliderBg.addClass("show").siblings().removeClass("show");

	var _sliderText = $(".slider-box .slider-text.t"+eq_auto);
	_sliderText.addClass("show").siblings().removeClass("show");

	$(".slider-btn .emBtns").eq(this._eq).addClass("active").siblings().removeClass("active");

},3000);

var emBtns = $(".slider-btn .emBtns");
var _this = this;
emBtns.click(function() {

	_this._eq = $(this).index();

	$(this).addClass("active").siblings().removeClass("active");
	// console.log($(this).index());
	var _index = $(this).index() + 1;
	// console.log($(".slider-bg .bgs.bg-"+_index));
	var sliderBg = $(".slider-bg .bgs.bg-"+_index);
	sliderBg.addClass("show").siblings().removeClass("show");

	var _sliderText = $(".slider-box .slider-text.t"+_index);
	_sliderText.addClass("show").siblings().removeClass("show");
});

// console.log(this._eq);



var li_Hover = $(".top-nav .nav-li.left");
// console.log(li_Hover);
this._liIndex = 0;
var _thisLi = this;

li_Hover.mouseenter(function() {
	// console.log($(this).index());
	var _index = $(this).index();
	_thisLi._liIndex = _index;

	var dropdown = $(".dropDown.d"+_index);
	// console.log(dropdown);
	dropdown.addClass("show").siblings().removeClass("show");

	var active_height = dropdown.height();
	// console.log(active_height);
	$(".dropdown-box").animate({height : active_height + "px"});

	// console.log(_this._liIndex);

}).mouseleave(function() {
	var dropdown =  $(".dropDown.d"+_thisLi._liIndex);
	dropdown.removeClass("show");
});


$(".dropDown").mouseenter(function() {
	var dropdown =  $(".dropDown.d"+_thisLi._liIndex);
	dropdown.addClass("show");

	$(".top-nav .nav-li.left").eq(_thisLi._liIndex - 1).css("background-color", "#0096bb");
}).mouseleave(function() {
	var dropdown =  $(".dropDown.d"+_thisLi._liIndex);
	dropdown.removeClass("show");
	$(".dropdown-box").css("height","0");

	$(".top-nav .nav-li.left").eq(_thisLi._liIndex - 1).css("background-color", "");
});





