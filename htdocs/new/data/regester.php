<?php
    header('Content-Type: application/json');

    $userID = $_REQUEST["userID"];
	$userName = $_REQUEST['userName'];
	$IDCart = $_REQUEST['IDCart'];
    $pwd = $_REQUEST["pwd"];
	$userPhone = $_REQUEST['userPhone'];
	
    // var_dump($_REQUEST);
    $conn = mysqli_connect('127.0.0.1','root','','bookWeb',3306);
    $sql = "SET NAMES UTF8";
    $result = mysqli_query($conn, $sql);
//     var_dump($result);
    $sql = "INSERT INTO orderClass VALUES($userID, '$userName', '$IDCart', '$pwd', $userPhone, false, '');";
    $result = mysqli_query($conn, $sql);
	mysqli_close($conn);
//	var_dump($sql);
	if($result){
	    $arr=["status"=>"success","msg"=>"添加成功"];
	}else{
		$arr=["status"=>"fails","msg"=>"添加失败"];
	}
    echo json_encode($arr);
