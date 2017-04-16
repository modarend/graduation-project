<?php
header('Content-Type: application/json');

    $name = $_REQUEST["name"];
	$sex = $_REQUEST['sex'];
	$emailUrl = $_REQUEST['emailUrl'];
    $messageText = $_REQUEST["messageText"];
	
	
    // var_dump($_REQUEST);
    $conn = mysqli_connect('127.0.0.1','root','','bookWeb',3306);
    $sql = "SET NAMES UTF8";
    $result = mysqli_query($conn, $sql);
//     var_dump($result);
    $sql = "INSERT INTO messageClass VALUES(null, '$name', '$sex', '$emailUrl', '$messageText', false, '');";
    $result = mysqli_query($conn, $sql);
	mysqli_close($conn);
//	var_dump($result);
	if($result){
	    $arr=["status"=>"success","msg"=>"添加成功"];
	}else{
		$arr=["status"=>"fails","msg"=>"添加失败"];
	}
    echo json_encode($arr);
