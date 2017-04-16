<?php
header('Content-Type: application/json');

    $userID = $_REQUEST["userID"];

    // var_dump($_REQUEST);
    $conn = mysqli_connect('127.0.0.1','root','','bookWeb',3306);
    $sql = "SET NAMES UTF8";
    $result = mysqli_query($conn, $sql);
    // var_dump($result);
    $sql = "UPDATE orderClass set pwd = '$userID' WHERE userID=$userID;";
    $result = mysqli_query($conn, $sql);
	
	
	if($result){
		$arr=['status'=>"success"];
	}else{
		$arr=["status"=>"fails","msg"=>"修改失败"];
	}
	mysqli_close($conn);
    echo json_encode($arr);
