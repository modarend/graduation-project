//此处承载的是每一个input的信息验证的代码
function confirmation() {
	//姓名的验证
	userName.onfocus = function() {
		this.nextElementSibling.style.display = 'inline-block';
	}
	userName.onblur = function() {
			if(this.validity.valueMissing) {
				this.nextElementSibling.innerHTML = '用户名不能为空';
				this.nextElementSibling.style.backgroundColor = 'red';
			} else if(this.validity.valid) {
				this.nextElementSibling.innerHTML = '用户名输入正确';
				this.nextElementSibling.style.backgroundColor = '#5CB85C';
			}
		}
		//密码的验证
	userpwd.onfocus = function() {
		this.nextElementSibling.style.display = 'inline-block';
	}
	userpwd.onblur = function() {
		if(this.validity.valueMissing) {
			this.nextElementSibling.innerHTML = '密码不能为空';
			this.nextElementSibling.style.backgroundColor = 'red';
		} else if(this.validity.patternMismatch) {
			this.nextElementSibling.innerHTML = '密码输入格式有误';
			this.nextElementSibling.style.backgroundColor = 'red';
		} else if(this.validity.valid) {
			this.nextElementSibling.innerHTML = '密码输入正确';
			this.nextElementSibling.style.backgroundColor = '#5CB85C';
		}
	}
	
	
		//学号的验证
	studentID.onfocus = function() {
		this.nextElementSibling.style.display = 'inline-block';
	}
	studentID.onblur = function() {
		if(this.validity.valueMissing) {
			this.nextElementSibling.innerHTML = '学号不能为空';
			this.nextElementSibling.style.backgroundColor = 'red';
		} else if(this.validity.valid) {
			this.nextElementSibling.innerHTML = '学号输入正确';
			this.nextElementSibling.style.backgroundColor = '#5CB85C';
		}
	}
	
	
		//联系方式
	userTel.onfocus = function() {
		this.nextElementSibling.style.display = 'inline-block';
	}
	userTel.onblur = function() {
			if(this.validity.valueMissing) {
				this.nextElementSibling.innerHTML = '联系方式不能为空';
				this.nextElementSibling.style.backgroundColor = 'red';
			} else if(this.validity.patternMismatch) {
				this.nextElementSibling.innerHTML = '联系方式输入格式有误';
				this.nextElementSibling.style.backgroundColor = 'red';
			} else if(this.validity.valid) {
				this.nextElementSibling.innerHTML = '联系方式输入正确';
				this.nextElementSibling.style.backgroundColor = '#5CB85C';
			}
		}
		//身份证号
	userNum.onfocus = function() {
		this.nextElementSibling.style.display = 'inline-block';
	}
	userNum.onblur = function() {
		if(this.validity.valueMissing) {
			this.nextElementSibling.innerHTML = '身份证号不能为空';
			this.nextElementSibling.style.backgroundColor = 'red';
		} else if(this.validity.patternMismatch) {
			this.nextElementSibling.innerHTML = '身份证号输入格式有误';
			this.nextElementSibling.style.backgroundColor = 'red';
		} else if(this.validity.valid) {
			this.nextElementSibling.innerHTML = '身份证号输入正确';
			this.nextElementSibling.style.backgroundColor = '#5CB85C';
		}
	}
	
	loginUserPwd.onfocus = function() {
		this.nextElementSibling.style.display = 'inline-block';
	}
	loginUserPwd.onblur = function() {
			if(this.validity.valueMissing) {
				this.nextElementSibling.innerHTML = '密码不能为空';
				this.nextElementSibling.style.backgroundColor = 'red';
			} else if(this.validity.patternMismatch) {
				this.nextElementSibling.innerHTML = '密码输入格式有误';
				this.nextElementSibling.style.backgroundColor = 'red';
			} else if(this.validity.valid) {
				this.nextElementSibling.innerHTML = '密码输入正确';
				this.nextElementSibling.style.backgroundColor = '#5CB85C';
			}
		}
	loginStudentID.onfocus = function() {
		this.nextElementSibling.style.display = 'inline-block';
	}
	loginStudentID.onblur = function() {
			if(this.validity.valueMissing) {
				this.nextElementSibling.innerHTML = '学号不能为空';
				this.nextElementSibling.style.backgroundColor = 'red';
			} else if(this.validity.valid) {
				this.nextElementSibling.innerHTML = '学号输入正确';
				this.nextElementSibling.style.backgroundColor = '#5CB85C';
			}
		}
}

function choose(){
	//一键切换到注册按钮功能
	$('#loginRegister').click(function(){
		$('#register').css('display','block').siblings('div').css('display','none');
	});
	//登录按钮的功能
	$('#loginBtn').click(function(){
		var loginForm = $('#loginForm').serialize();
//		console.log(loginForm);
		$.ajax({
			type: 'post',
			url: 'data/login.php',
			data: loginForm,
			success: function(data,msg,xhr){
//				console.log(data);
				if(data.status == "success"){
					$('#video').css('display','none').siblings('div').css('display','block');
//					console.log(data.user['userID']);
					getUserInfo(data.user['userID']);
					//非管理员可以在本地存储书籍，管理员需要每次都登录
					if(data.isAdmin == "0"){
						if(window.localStorage){
				            var storage=window.localStorage;
				            var user={
				                name: data.user["userName"],
				                id: data.user["userID"]
				            };
				            var user=JSON.stringify(user);
				            storage.setItem("userInfo",user);
				            console.log(storage.userInfo);
				        }else{
				        	console.log('浏览器不支持localstorage');
				        	storage.setItem("userInfo",'');	
				        }						
					}
				}else{
					$('#loginForm input').val("");
					if(data.msg == "未查询到数据"){
						confirm("亲，您还未注册，请先去注册！！！");
					}else if(data.msg == "用户名或密码输入错误"){
						confirm('用户名或密码输入错误');
					}else{
						confirm('不好意思，网络出了小差，请稍后重试');
					}
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
	//注册 按钮的功能
	$('#registerBtn').click(function(){
//		console.log('注册成功');
		var loginForm = $('#regester').serialize();
		console.log(loginForm);
		$.ajax({
			type: 'post',
			url: 'data/regester.php',
			data: loginForm,
			success: function(data,msg,xhr){
//				console.log(data);
				if(data.status == "success"){
					if(window.localStorage){
			            var storage=window.localStorage;
			            var user={
			                name: $('#userName').val(),
			                id: $('#studentID').val()
			            };
			            var user=JSON.stringify(user);
			            storage.setItem("userInfo",user);
			            console.log(storage.userInfo);
			        }else{
			        	console.log('浏览器不支持localstorage');
			        	storage.setItem("userInfo",'');	
			        }
			        window.location.reload();
				}else{
					confirm('您的信息有错误，请重新输入');
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
	//修改密码
	$('#userInfo2 button').click(function(){
		if($('#changePwd2').val() == $('#changePwd3').val()){
//			console.log('两次的密码一致');
			$.ajax({
				type: 'post',
				url: 'data/changePwd.php',
				data: {
					"userID": window.localStorage.userID,
					"pwd":$('#changePwd1').val(),
					"newPwd": $('#changePwd2').val()
				},
				success: function(data,msg,xhr){
	//				console.log(data);
					if(data.status == "success"){
						window.localStorage.userInfo = "";
						window.location.reload();
					}else{
						confirm('输入的原密码有误，请 重新输入');
					}
				},
				error: function(){
					confirm('不好意思，网络出了小差，请稍后重新使用');
				},
				complete: function(){
					return false;
				}	
			});
		}else{
			confirm('两次输入密码 不一致');
		}
	});
}
function change(){
	$('section').on('click','ul li',function(){
		var index=$(this).index();
//		console.log('aaaa');
		$("section .scroll").stop().animate({top:-index*500+"px"},1500);
//		$('section>div').eq(index).css('display','block').siblings('div').css('display','none');
		$(this).css('background','#FF0700').siblings('li').css('background','#ddd');
	});
	$('body').on('click','.unLogin',function(){
		window.localStorage.userInfo = "";
		window.location.reload();
	});
	//这里还有一个管理员的筛选功能
	$('#userInfo1').on('click','button',function(){
		console.log('aaa');
		if($('#userInfo1 select').val() =="" || $('#userInfo1 input').val() =="" ){
			return false;
		}
		$.ajax({
			type: 'post',
			url: 'data/getInfor.php',
			data: {
				dataType: $('#userInfo1 select').val(),
				dataValue: $('#userInfo1 input').val()
			},
			success: function(data,msg,xhr){
//				console.log(data);
				if(data.status == "success"){
					var html="";
					for(var i=0;i<data.user.length;i++){
						var status = (data.user[i].isAdmin=="0")?"普通用户":"管理员";
						html+="<tr><td>"+data.user[i].userID+"</td><td>"+data.user[i].userName+"</td><td>"+data.user[i].IDCart+"</td><td>"+data.user[i].pwd+"</td><td>"+data.user[i].userPhone+"</td><td>"+status+"</td><td><a id="+data.user[i].userID+" href='javascript:;'>重置密码</a></td></tr>"	
					}
					$('#userInfo1 .tableText tbody').html(html);
				}else{
					confirm('修改失败，请重新修改');
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
	$('#userInfo1').on('click','a',function(){
		$.ajax({
			type: 'post',
			url: 'data/repwd.php',
			data: {
				userID:$(this).attr('id')
			},
			success: function(data,msg,xhr){
//				console.log(data);
				if(data.status == "success"){
					console.log('修改成功');
				}else{
					confirm('修改失败，请重新修改');
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
	//确定推荐图书
	$('#userInfo3').on('change','select',function(){
//		console.log($(this).val());
		
		$.ajax({
			type: 'post',
			url: 'data/changeBook.php',
			data: {
				"bookID":$(this).attr('id'),
				"isRecommend":$(this).val()=="true"?true:false
			},
			success: function(data,msg,xhr){
//				console.log(data);
				if(data.status == "success"){
					console.log('修改成功');
				}else{
					confirm('修改失败，请重新修改');
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
	$('#userInfo4').on('change','select',function(){
//		console.log($(this).val());
		
		$.ajax({
			type: 'post',
			url: 'data/changeMessage.php',
			data: {
				"id":$(this).attr('id'),
				"messageStatus":$(this).val()=="true"?true:false
			},
			success: function(data,msg,xhr){
//				console.log(data);
				if(data.status == "success"){
					console.log('修改成功');
				}else{
					confirm('修改失败，请重新修改');
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
function getUserInfo(id){
	$.ajax({
		type: 'post',
		url: 'data/getUserInfo.php',
		data: {
			'userID': id
		},
		success: function(data,msg,xhr){
//				console.log(data);
			if(data.status == "success"){
				//这里需要渲染页面
				window.localStorage.setItem("userID",data.user['id']);
				if(data.user.isAdmin == "0"){
					//普通用户渲染
					var li="<li style='background:#FF0700'>个人信息</li><li>修改密码</li><li>租借记录</li><li>在借状态</li>";
					$('#choose1').html(li);
					var html1="<div class='infor'><b>姓名：</b><span>"+data.user.name+"</span></div><div class='infor'><b>身份：</b><span>普通用户</span></div><div class='infor'><b>学号：</b><span>"+data.user.id+"</span></div><div class='infor'><b>联系方式：</b><span>"+data.user.phone+"</span></div><div class='unLogin'>退出登录</div>";
					$('#userInfo1').html(html1);
					var html2="";
					var html3="";
					if(data.rent == ""){
						html2="<div class='infor'>暂无租借记录</div>";
						html3="<div class='infor'>暂无租借记录</div>";
					}else{
						for(var i=0;i<data.rent.length;i++){
							var status = (data.rent[i].status == "0")?"(已还)":"(在借)";
							html2+="<div class='infor'><b>时间：</b><span><em>"+data.rent[i].time+"</em><strong>"+data.rent[i].name+"</strong><i>"+status+"</i></span></div>";
							if(data.rent[i].status=="1"){
								html3+="<div class='infor'><b>时间：</b><span><em>"+data.rent[i].time+"</em><strong>"+data.rent[i].name+"</strong><i>（在借）</i></span></div>";
							}
						}
					}
//						console.log($('#userInfo2'));
					$('#userInfo3').html(html2);
					$('#userInfo4').html(html3);
				}else{
					//管理员渲染
					var li="<li style='background:#FF0700'>用户管理</li><li>修改密码</li><li>图书推荐</li><li>留言管理</li>";
					$('#choose1').html(li);
					var html1="";
					if(data.book==""){
						html1="<div id='noway'><img src='images/introduction/service.png' width='200px' height='200px'/><h2>暂未查询到相关数据，请稍后继续查看 ~~</h2></div>";
						$('#userInfo3').html(html1);
					}else{
						for(var i=0;i<data.book.length;i++){
							if(data.book[i].status == "0"){
								html1+="<tr><td>"+data.book[i].id+"</td><td>"+data.book[i].name+"</td><td>"+data.book[i].des+"</td><td><select id="+data.book[i].id+"><option value='false' selected>否</option><option value='true'>是</option></select></td></tr>";
							}else{
								html1+="<tr><td>"+data.book[i].id+"</td><td>"+data.book[i].name+"</td><td>"+data.book[i].des+"</td><td><select id="+data.book[i].id+"><option value='false'>否</option><option value='true' selected>是</option></select></td></tr>";
							}
						}
						$('#userInfo3 .tableText tbody').html(html1);
					}
					var html2="";
					if(data.message==""){
						html2="<div id='noway'><img src='images/introduction/service.png' width='200px' height='200px'/><h2>暂未查询到相关数据，请稍后继续查看 ~~</h2></div>";
						$('#userInfo4').html(html2);
					}else{
						for(var j=0;j<data.message.length;j++){
							if(data.message[j].status == "0"){
								html2+="<tr><td>"+data.message[j].id+"</td><td>"+data.message[j].text+"</td><td><select id="+data.message[j].id+"><option value='false' selected>否</option><option value='true'>是</option></select></td></tr>";
							}else{
								html2+="<tr><td>"+data.message[j].id+"</td><td>"+data.message[j].text+"</td><td><select id="+data.message[j].id+"><option value='false'>否</option><option value='true' selected>是</option></select></td></tr>";
							}
						}
						$('#userInfo4 .tableText tbody').html(html2);
					}
				}
			}else{
				//页面报错展示
				confirm('不好意思，网络出了小差，请稍后重新使用');
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
$(function() {
	//有限根据本地的存储 数据决定当前的页面展示
	if(window.localStorage){
		if(window.localStorage.userInfo){
			var aaa = JSON.parse(window.localStorage.userInfo);
			if(aaa && aaa != ""){
				var userID = aaa['id'];
				$('#video').css('display','none').siblings('div').css('display','block');
				//此处需要关闭网页的登录窗口 ，建议在HTML加载的时候关闭登录和信息展示窗口，判断localstorage的时候选择展示内容 
				getUserInfo(userID);
			}
		}else{
			//这是表单 验证的代码
			confirmation();
		}
	}else{
		console.log('不支持本地存储');
	}
	//切换事件
	choose();
	//我的信息版块的操作
	change();
	//我的信息板块，需要区别管理员和普通用户，普通用户是需要
});