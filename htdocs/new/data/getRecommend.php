<?php
header('Content-Type: application/json');

    // var_dump($_REQUEST);
    $conn = mysqli_connect('127.0.0.1','root','','bookWeb',3306);
    $sql = "SET NAMES UTF8";
    $result = mysqli_query($conn, $sql);
    // var_dump($result);
    $sql = "SELECT * FROM messageClass WHERE messageStatus=true;";
    $result = mysqli_query($conn, $sql);
	mysqli_close($conn);
	
	if($result){
	    if(($ar=mysqli_fetch_assoc($result))!==null){
			$message=[$ar];
			while(($ar=mysqli_fetch_assoc($result))!==null){
				array_push($message, $ar);
			}
			$arr=['status'=>"success",'message'=>$message];
	    }else{
	        $arr=["status" => "success", "message" => ""];
	    }
	}else{
		$arr=["status"=>"fails","msg"=>"查询失败"];
	}
    echo json_encode($arr);