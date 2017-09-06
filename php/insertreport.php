<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$title = $_POST['title'];
if(rand()%2==0){
$status = '已结束';
}else{
  $status = '未开始';  
}


$read = rand(1,10000);
$returnmess = rand()*10;
$totalreturn = rand()*10+$returnmess;
$conn = new mysqli("localhost:3306", "root", "root", "grouplus");
$result = $conn->query("INSERT into reportmanage(title,mystatus,readstatus,newtickling,alltickling)
values ('".$title."','".$status."','".$read."','".$returnmess."','".$totalreturn."')" );
// $query ="INSERT into reportmanage('title','status','read','newtickling','alltickling')
// values ('".$title."','".$status."','".$read."','".$returnmess."','".$totalreturn."')" ;
// echo $query;
$marks = mysqli_affected_rows($conn);
$outp ="" ;

if($marks>0){
    $outp = 'insert data success !';
}
else{
    $outp = 'insert fail,please help to check it!';
}
$conn->close();
echo($outp);
?>