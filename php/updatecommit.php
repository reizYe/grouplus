<?php
//引入数据库连接文件
require_once('dbconfig.php');
$uid =$_POST['uid'];
$title =$_POST['title'];
$mystatus =$_POST['mystatus'];
$readstatus =$_POST['readstatus'];
$newtickling =$_POST['newtickling'];
$alltickling =$_POST['alltickling'];
// echo $uid.$title;
// $regdate = date('Y-m-d H:i:s',time());
// echo $username.$truename.$userphone.$userscore.$regdate;
//数据的安全验证
$query = "UPDATE reportmanage set title ='".$title."',mystatus ='".$mystatus."'
,readstatus ='".$readstatus."',newtickling ='".$newtickling."',alltickling ='".$alltickling."' where id=$uid";
// echo $query;
mysqli_query($conn,$query);

// //获取刚刚插入的ID
// $insertid = mysqli_insert_id($conn);
$affect = mysqli_affected_rows($conn);
// echo $insertid.$affect;
if(!$affect){
    echo '更新失败';
}else{
    echo '更新成功,请稍候....';
    echo '<script>setTimeout("location.href=\'../reportmanage.html\'",2000);</script>';
}
?>