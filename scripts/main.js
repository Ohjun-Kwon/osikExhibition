window.onscroll = function() {scrollFunction();}
function scrollFunction() {
	if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
		document.getElementById("head-bar").style.top = "0px";
	}else{
		document.getElementById("head-bar").style.top = "-60px";
	}
	
}
