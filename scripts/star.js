$(document).ready(function(){
  var stars=200;
  var $stars=$(".stars");
  for(var i=0;i<stars;i++){
    var $star=$("<div/>").addClass("star");
    $stars.append($star);
  }
  $(".star").each(function(){
	var cur=$(this);
	var y = Math.random()*1920;
	var x  = Math.random()*1080;
	cur.css('top',x);
	cur.css('left',y);
    cur.css('animation-delay',Math.random()*9 + 's');
  })
})