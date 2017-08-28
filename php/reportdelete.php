<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$deleteid = $_POST['deleteid'];
$conn = new mysqli("localhost:3306", "root", "root", "grouplus");
$result = $conn->query("delete from reportmanage where Id ='".$deleteid."'");
$marks = mysqli_affected_rows($conn);
$outp ="" ;

if($marks>0){
    $outp = 'delete data success !';
}
else{
    $outp = 'delete fail,please help to check it!';
}
$conn->close();
echo($outp);

?>