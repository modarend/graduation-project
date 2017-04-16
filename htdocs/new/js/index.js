//友情链接的内容提示操作
$('#chaining select').change(function(){
	var url=$(this).val();
	console.log(url);
	confirm('您确定要打开:     '+$(this).find(':selected').html()+'官网');
	window.location.href=url;
	$(this).find('option').eq(0).prop('selected',true).siblings('option').prop('selected',false);
})
//图片四周放大效果的功能
function magnify(){
	var width=$('#pic img').width();
	var height=$('#pic img').height();
	var width2=parseFloat(width)+20+'px';
	var height2=parseFloat(height)+20+'px';
	$('#pic img').hover(function(){
		$(this).stop().animate({height:height2,width:width2,left:"-10px",top:"-10px"},500);
	},function(){
		 $(this).stop().animate({height:height,width:width,left:"0px",top:"0px"},500);
	});
}
//文案内容的滚动效果
function scroll(){
	var speed = 80;
	var timer = null;
	function init(){
		var demo = document.getElementById("demo");
		var demo1 = document.getElementById("demo1");
		var demo2 = document.getElementById("demo2");
		demo2.innerHTML = demo1.innerHTML;
		function moveTop(){
			if(demo1.offsetHeight - demo.scrollTop <= 0){
				demo.scrollTop = 0;
			}else{
				demo.scrollTop++;
			}
		}
		timer = setInterval(moveTop, speed);
		demo.onmouseover = function() {
			clearInterval(timer);
		}
		demo.onmouseout = function() {
			timer = setInterval(moveTop, speed);
		}
	}
	init();
}
//图书分类的钢琴键效果
function click(){
	$('#bookShow>ul>li').click(function(){
		if ($(this).next('ul').css('display')==='none'){
			$('#bookShow>ul>ul').slideUp(1000);
			$(this).next('ul').slideDown(1000);
			$(this).find('i').addClass('clicked');
			$('#bookShow>div').find('div').eq(($(this).index())/2).show(1000).siblings('div').hide(1000);
		}else{
			$('#bookShow>ul>ul').slideUp(1000);
			$(this).next('ul').slideUp(1000);
			$(this).find('i').removeClass('clicked');
			
		}
	})
}
function getForm(){
	$('#formButton').click(function(){
		var getForm = $('#getForm').serialize();
		$.ajax({
			type: 'post',
			url: 'data/recommend.php',
			data: getForm,
			success: function(data,msg,xhr){
	//				console.log(data);
				if(data.status == "success"){
					confirm('留言成功');
				}else{
					confirm('留言失败');
				}
			},
			error: function(){
				confirm('不好意思，网络出了小差，请稍后重新使用');
			},
			complete: function(){
				return false;
			}	
		});
	});
}
$(function(){
	//滚动之前 需要加载留言内容
	
	getForm();
	magnify();
	click();
	//留言板表单提交效果
	$.ajax({
		type: 'post',
		url: 'data/getRecommend.php',
		data: null,
		success: function(data,msg,xhr){
//				console.log(data);
			if(data.status == "success" && data.message.length>0){
				var html="";
				for(var i=0;i<data.message.length;i++){
					html+="<li>"+data.message[i].messageText+"</li>"
				}
				$('#express').html(html);
			}
			scroll();
		},
		error: function(){
			confirm('不好意思，网络出了小差，请稍后重新使用');
		},
		complete: function(){
			return false;
		}	
	});
})

