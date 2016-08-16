$(document).ready(function(){
	//remJS
	(function(doc){
		var docEl=doc.documentElement;
				docEl.style.fontSize=docEl.clientWidth/20+'px';

	})(document);


	//startJS

	function start1(e){
		var e=event||window.event;
		e.preventDefault();
		var num1=Math.floor(Math.random()*6+4);//转的圈数
		var a=prompt('请输入角度');
	 		if(a){
	 			var rotate=parseInt(a)+360*num1;
	 			setTimeout(function(){
	 				$('img').eq(0).css({
	 					"-webkit-transition":"-webkit-transform"+" "+num1*1+"s ease-in-out",
						"-webkit-transform":"rotate("+rotate+"deg)"
	 				});

	 			},0)
	 	} 	
	 		
	}
	$('img').eq(0).on('webkitTransitionEnd',function(){
	 			alert("你获得了奖品1");
	 			$('img').eq(0).css({
	 					"-webkit-transition":"-webkit-transform"+" "+0+"s ease-in-out",
						"-webkit-transform":"rotate("+0+"deg)"
	 				});
	 		})
	$('.box').eq(1).on('webkitTransitionEnd',function(){
	 				alert("你获得了奖品2");
	 				$('.box').eq(1).css({
	 					"-webkit-transition":"-webkit-transform"+" "+0+"s ease-in-out",
						"-webkit-transform":"rotate(-"+0+"deg)"
	 				});
	 		}) 		
	function start2(e){
		var e=event||window.event;
		e.preventDefault();
		var num2=Math.floor(Math.random()*6+4);//转的圈数
		var a=prompt('请输入角度');
	 		if(a){
	 			var rotate=parseInt(a)+360*num2;
	 			setTimeout(function(){
	 				$('.box').eq(1).css({
	 					"-webkit-transition":"-webkit-transform"+" "+num2*1+"s ease-in-out",
						"-webkit-transform":"rotate(-"+rotate+"deg)"
	 				});

	 			},0)
	 	}
	 	
	 		
	}

	$('.img').click(start1);
	$('.img1').click(start2);

});