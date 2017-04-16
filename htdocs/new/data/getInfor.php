<?php
//管理员修改用户信息
header('Content-Type: application/json');

    $dataType = $_REQUEST["dataType"];
    $dataValue = $_REQUEST["dataValue"];
    // var_dump($_REQUEST);
    $conn = mysqli_connect('127.0.0.1','root','','bookWeb',3306);
    $sql = "SET NAMES UTF8";
    $result = mysqli_query($conn, $sql);
    // var_dump($result);
    $sql = "SELECT * FROM orderClass WHERE $dataType='$dataValue';";
    $result = mysqli_query($conn, $sql);
	mysqli_close($conn);
	
	if($result && ($ar=mysqli_fetch_assoc($result))!==null){
		$user=[$ar];
//		var_dump($ar);
		while(($ar1=mysqli_fetch_assoc($result))!==null){
			array_push($user, $ar1);
		}
		$arr=["status"=>"success", "user" => $user];
	}else{
		$arr=["status"=>"fails","msg"=>"查询失败"];
	}
    echo json_encode($arr);