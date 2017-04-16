<?php
header('Content-Type: application/json');

    $userID = $_REQUEST["userID"];
	$bookID = $_REQUEST['bookID'];
    // var_dump($_REQUEST);
    $conn = mysqli_connect('127.0.0.1','root','','bookWeb',3306);
    $sql = "SET NAMES UTF8";
    $result = mysqli_query($conn, $sql);
//     var_dump($result);
	$sql = "SELECT * FROM orderClass WHERE userID=$userID";
    $result1 = mysqli_query($conn, $sql);
	$sql = "SELECT * FROM bookClass WHERE bookID=$bookID";
    $result2 = mysqli_query($conn, $sql);
	if(($ar1=mysqli_fetch_assoc($result1))!==null && ($ar2=mysqli_fetch_assoc($result2))!==null){
	    $sql = "INSERT INTO rentClass VALUES($ar1[userID], '$ar1[userName]', $ar2[bookID], '$ar2[bookName]', '2017-04-08', true, '2017-04-14','');";
	    $result = mysqli_query($conn, $sql);
	}
	mysqli_close($conn);
//	var_dump($sql);
	if($result){
	    $arr=["status"=>"success","msg"=>"添加成功"];
	}else{
		$arr=["status"=>"fails","msg"=>"添加失败"];
	}
    echo json_encode($arr);
