
//删除书架上的图书
function removebook(){
	$('#logined').on('click','tr>td>a',function(){
		console.log(this.nodeName);
		if(this.nodeName=='A'){
			console.log($(this).parent('td').parent('tr'));
			$(this).parent('td').parent('tr').remove();
			bookSum();
		}
	});
}
//当前的书架上 所有 的图书
function bookSum(){
	var arr=$($('tbody')[0]).find('tr')
	$('tfoot td:last-child').html(arr.length);
}
//书籍添加到书架上
function addBook(){
	$('.major').on('click','li>button',function(){
		if($(this).hasClass('disabled').length>1) 
			return false;
		var bookId=$(this).attr('id');
		var title =$(this).parent('li').find('h3').html();
//		console.log($(this).parent('li').find('h3').attr('name'));
		var aaa=$(this).parent('li').find('h3').attr('name');
		var num=$(this).parent('li').find('span>em').html();
		var address=$(this).parent('li').find('.address').html();
		var html="<tr><td>"+title+"</td><td>"+num+"</td><td>"+aaa+"</td><td>"+address+"</td><td><button name="+bookId+">借阅</button><a href='javascript:;'>&times;</a></td></tr>"
		$('#logined').css('display','block').find('tbody').append(html);
		bookSum();
	});
	bookSum();
	removebook();
}
function goodThing(){
	$.ajax({
		type: 'post',
		url: 'data/getGood.php',
		data: null,
		success: function(data,msg,xhr){
//				console.log(data);
			if(data.status == "success"){
				var arr=[
					{'name':'友善用脑', 'url':'http://127.0.0.1:8020/new/images/book/index1.jpg'},
					{'name':'李嘉诚的正面和侧面', 'url':'http://127.0.0.1:8020/new/images/book/index2.jpg'},
					{'name':'中华民国', 'url':'http://127.0.0.1:8020/new/images/book/index4.jpg'},
					{'name':'信仰的力量', 'url':'http://127.0.0.1:8020/new/images/book/index3.jpg'}
				]
				if(data.book.length>0){
					for(var i=0;i<data.book.length;i++){
						var index={'name':data.book[i].bookName,'url':data.book[i].picUrl};
						arr.push(index);
					}
//					console.log(arr);
					var html="";
					for(var j=0;j<4;j++){
						var a=arr.pop();
//						console.log(a);
						html+="<div class='content' style='left:"+330*j+"px;'><img src="+a.url+"/><p>"+a.name+"</p></div>";
					}
					$('#sroll_bg').append(html);
				}
			}else{
				console.log('查询失败');
				$('ul.major').html('');
				$('div.noSearch').css('display','block');
			}
		},
		error: function(){
			confirm('不好意思，网络出了小差，请稍后重新使用');
		},
		complete: function(){
			return false;
		}	
	});
}
function search(){
	$('#search .button').click(function(){
		if($('#search input[type="text"]').val()==''){
			return false;
		}
		$.ajax({
			type: 'post',
			url: 'data/search.php',
			data: {
				"bookName":$('#search input[type="text"]').val()
			},
			success: function(data,msg,xhr){
//				console.log(data);
				if(data.status == "success"){
					if(data.book.length>0){
						var html="";
						for(var i=0;i<data.book.length;i++){
							if(data.book[i].bookNum > 0){
								html+="<li><img src='"+data.book[i].picUrl+"' alt='' /><div><h3 name="+data.book[i].bookTime+">"+data.book[i].bookName+"</h3><p>书籍简介：<span>"+data.book[i].bookDes+"</span></p><span>库存 ：<em>"+data.book[i].bookNum+"</em>本&nbsp;&nbsp;(可借阅)</span><div>位置：<span class='address'>"+data.book[i].bookAddress+"</span></div></div><button id='"+data.book[i].bookID+"'>借阅</button></li>";
							}else{
								html+="<li><img src='"+data.book[i].picUrl+"' alt='' /><div><h3 name="+data.book[i].bookTime+">"+data.book[i].bookName+"</h3><p>书籍简介：<span>"+data.book[i].bookDes+"</span></p><span>库存 ：<em>"+data.book[i].bookNum+"</em>本&nbsp;&nbsp;(库存不足，无法借阅)</span><div>位置：<span class='address'>"+data.book[i].bookAddress+"</span></div></div><button class='disabled'>库存不足</button></li>";
							}
						}
						$('ul.major').html(html);
						$('div.noSearch').css('display','none');
					}
				}else{
					console.log('查询失败');
					$('ul.major').html('');
					$('div.noSearch').css('display','block');
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
	$('body table').on('click','button',function(){
		$(this).attr('name');
		$.ajax({
			type: 'post',
			url: 'data/addBook.php',
			data: {
				"bookID":$(this).attr('name'),
				"userID":window.localStorage.userID
			},
			success: function(data,msg,xhr){
//				console.log(data);
				if(data.status == "success"){
					confirm('租借成功，请及时去取书');
				}else{
					confirm('很抱歉，稍后重试');
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
	if(window.localStorage){
		if(window.localStorage.userInfo){
			var aaa = JSON.parse(window.localStorage.userInfo);
			if(aaa && aaa != ""){
				var userName = aaa['name'];
				$('#search span.lf em').html(userName);
				addBook();
			}
		}else{
			//这是表单 验证的代码
			confirmation();
		}
	}else{
		console.log('不支持本地存储');
	}
	search();
	goodThing()
});
//下面还需要的功能，
//1、搜索功能
//2、请求推荐 图书的内容
//3、确认租书的功能