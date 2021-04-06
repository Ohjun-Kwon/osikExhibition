window.onscroll = function() {scrollFunction();}
function scrollFunction() {
	if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
		document.getElementById("head-bar").style.top = "0px";
	}else{
		document.getElementById("head-bar").style.top = "-60px";
	}
	if (document.documentElement.scrollTop > window.innerHeight/2){
		$("#big-content").css('opacity','1');
		$(".introduce").css('opacity','1');
		
		$("#big-content").attr('class','popright_fadein');
	}
	if (document.documentElement.scrollTop > window.innerHeight*2.5){
		$("#skill-title").attr('class','popright_fadein');
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

function setDisplay(){
    if($('input:radio[id=2019]').is(':checked')){
        $('#page2').hide();
        $('#page3').hide();
		
        $('#page1').show();
    }
    else if($('input:radio[id=2018]').is(':checked')){
        $('#page1').hide();
        $('#page3').hide();
				
        $('#page2').show();
    }
    else if($('input:radio[id=2017]').is(':checked')){
        $('#page2').hide();
        $('#page1').hide();
				
        $('#page3').show();
    }
}

