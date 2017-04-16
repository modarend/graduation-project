<?php
//这是借阅管理的搜索功能
header('Content-Type: application/json');

    $bookName = $_REQUEST["bookName"];
    // var_dump($_REQUEST);
    $conn = mysqli_connect('127.0.0.1','root','','bookWeb',3306);
    $sql = "SET NAMES UTF8";
    $result = mysqli_query($conn, $sql);
    // var_dump($result);
    $sql = "SELECT * FROM bookClass WHERE bookName='$bookName';";
    $result = mysqli_query($conn, $sql);
	mysqli_close($conn);
	
	if($result){
	    if(($ar=mysqli_fetch_assoc($result))!==null){
			$book=[$ar];
			while(($ar=mysqli_fetch_assoc($result))!==null){
				array_push($book, $ar);
			}
			$arr=['status'=>"success",'book'=>$book];
	    }else{
	        $arr=["status" => "fails", "msg" => "未查询到数据"];
	    }
	}else{
		$arr=["status"=>"fails","msg"=>"查询失败"];
	}
    echo json_encode($arr);
