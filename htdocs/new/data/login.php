<?php
    header('Content-Type: application/json');

    $userID = $_REQUEST["userID"];
    $pwd = $_REQUEST["pwd"];
    // var_dump($_REQUEST);
    $conn = mysqli_connect('127.0.0.1','root','','bookWeb',3306);
    $sql = "SET NAMES UTF8";
    $result = mysqli_query($conn, $sql);
    // var_dump($result);
    $sql = "SELECT * FROM orderClass WHERE userID=$userID";
    $result = mysqli_query($conn, $sql);
	mysqli_close($conn);
	
	if($result){
	    if(($ar=mysqli_fetch_assoc($result))!==null){
//	    	var_dump($ar);
	    	if("$ar[pwd]" == "$pwd"){
		    	$user = ["userName" => "$ar[userName]", "userID"=> "$ar[userID]"];	
		        $arr=["status"=>"success", "isAdmin" => $ar['isAdmin'], "user" => $user];
			}else{
				$arr=["status" => "fails", "msg" => "用户名或密码输入错误"];
			}
	    }else{
	        $arr=["status" => "fails", "msg" => "未查询到数据"];
	    }
	}else{
		$arr=["status"=>"fails","msg"=>"查询失败"];
	}
    echo json_encode($arr);
