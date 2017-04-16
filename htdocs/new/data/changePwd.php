<?php
//修改密码
	header('Content-Type: application/json');

    $userID = $_REQUEST["userID"];
    $pwd = $_REQUEST["pwd"];
	$newPwd =$_REQUEST['newPwd'];
    // var_dump($_REQUEST);
    $conn = mysqli_connect('127.0.0.1','root','','bookWeb',3306);
    $sql = "SET NAMES UTF8";
    $result = mysqli_query($conn, $sql);
    // var_dump($result);
    $sql = "SELECT * FROM orderClass WHERE userID=$userID AND pwd=$pwd;";
    $result = mysqli_query($conn, $sql);
	
	
	if($result){
	    if(($ar=mysqli_fetch_assoc($result))!==null){
	    	$sql = "UPDATE orderClass set pwd = '$newPwd' WHERE userID=$userID AND pwd='$pwd';";
    		$result = mysqli_query($conn, $sql);
//			var_dump($sql);
//			var_dump($result);
			$arr=['status'=>"success"];
	    }else{
	        $arr=["status" => "fails", "msg" => "修改失败"];
	    }
	}else{
		$arr=["status"=>"fails","msg"=>"修改失败"];
	}
	mysqli_close($conn);
    echo json_encode($arr);
