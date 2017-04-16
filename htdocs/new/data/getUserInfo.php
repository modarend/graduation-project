<?php
    header('Content-Type: application/json');

    $userID = $_REQUEST["userID"];
    // var_dump($_REQUEST);
    $conn = mysqli_connect('127.0.0.1','root','','bookWeb',3306);
    $sql = "SET NAMES UTF8";
    $result = mysqli_query($conn, $sql);
    // var_dump($result);
    //需要查询的表示orderClass、rentClass,但是这里需要根据isAdmin分两类来请求不同的数据库。
    $sql = "SELECT * FROM orderClass WHERE userID=$userID;";
    $result1 = mysqli_query($conn, $sql);
//	var_dump($result1);
	if($result1){
		//根据管理员和普通 用户来请求不同的数据
		if(($arr1=mysqli_fetch_assoc($result1))!==null){
			$user = ["name"=>"$arr1[userName]", "id"=>"$arr1[userID]", "IDCart"=>"$arr1[IDCart]", "phone"=>"$arr1[userPhone]","isAdmin"=>"$arr1[isAdmin]"];
	    	if("$arr1[isAdmin]" == "0"){
	    		//这里是普通用户，需要个人信息展示、修改 密码、在借记录和借阅管理
	    		$sql = "SELECT * FROM rentClass WHERE userID=$userID;";
				$result2 = mysqli_query($conn, $sql);
				$rent= [];
				if($result2 && ($arr2=mysqli_fetch_assoc($result2))!==null){
					while(($arr2=mysqli_fetch_assoc($result2))!==null){
						$rentIndex = ["time"=>"$arr2[rentTime]", "name"=>"$arr2[bookName]", "status"=>"$arr2[rentStatus]"];
						array_push($rent, $rentIndex);
					}
				}
				$data=["status"=>"success","user"=>$user,"rent"=>$rent];
	    	}else{
	    		//这里是管理员账户，需要得到留言板，推荐版、书籍管理、用户管理（这里时查询某一个用户信息，并展示）、修改密码
	    		$sql = "SELECT * FROM messageClass;";
				$result3 = mysqli_query($conn, $sql);
				if($result3 && ($arr3=mysqli_fetch_assoc($result3))!==null){
					$message=[["id"=>"$arr3[id]", "name"=>"$arr3[name]", "text"=>"$arr3[messageText]", "status"=>"$arr3[messageStatus]"]];
					while(($arr3=mysqli_fetch_assoc($result3))!==null){
						$messageIndex = ["id"=>"$arr3[id]", "name"=>"$arr3[name]", "text"=>"$arr3[messageText]", "status"=>"$arr3[messageStatus]"];
						array_push($message, $messageIndex);
					}
				}
				$sql = "SELECT * FROM bookClass";
				$result4 = mysqli_query($conn, $sql);
				
				if($result4 && ($arr4=mysqli_fetch_assoc($result4))!==null){
					$book=[["id"=>"$arr4[bookID]", "name"=>"$arr4[bookName]", "des"=>"$arr4[bookDes]", "status"=>"$arr4[isRecommend]"]];
					while(($arr4=mysqli_fetch_assoc($result4))!==null){
						$bookIndex = ["id"=>"$arr4[bookID]", "name"=>"$arr4[bookName]", "des"=>"$arr4[bookDes]", "status"=>"$arr4[isRecommend]"];
						array_push($book,$bookIndex);
					}
				}
				$data=["status"=>"success", "user"=>$user,"message"=>$message,"book"=>$book];
	    	} 
	    }else{
	        $data=["status" => "fails", "msg" => "信息查询失败"];
	    }
	}else{
		//查询失败
		$data = ["status" => "fails", "msg" => "信息查询失败"];
	}
	mysqli_close($conn);
	
    echo json_encode($data);
