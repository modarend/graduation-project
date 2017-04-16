<?php
header('Content-Type: application/json');

    $id = $_REQUEST["id"];
    $messageStatus = $_REQUEST["messageStatus"];
    // var_dump($_REQUEST);
    $conn = mysqli_connect('127.0.0.1','root','','bookWeb',3306);
    $sql = "SET NAMES UTF8";
    $result = mysqli_query($conn, $sql);
    // var_dump($result);
    $sql = "UPDATE messageClass set messageStatus = $messageStatus WHERE id=$id;";
    $result = mysqli_query($conn, $sql);
	mysqli_close($conn);
	
	if($result){
	    $arr=["status"=>"success"];
	}else{
		$arr=["status"=>"fails","msg"=>"查询失败"];
	}
    echo json_encode($arr);

