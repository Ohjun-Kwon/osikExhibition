window.onscroll = function() {scrollFunction();}
function scrollFunction() {
	if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
		document.getElementById("head-bar").style.top = "0px";
	}else{
		document.getElementById("head-bar").style.top = "-60px";
	}
	
}
			$(document).ready(function(){
				$('a[href^="#"]').on('click',function (e) {
					e.preventDefault();

					var target = this.hash;
					var $target = $(target);

					$('html, body').stop().animate({
						'scrollTop': $target.offset().top
					}, 900, 'swing', function () {
						window.location.hash = target;
					});
				});
			});