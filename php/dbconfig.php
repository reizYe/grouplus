<?php
header('content-type:text/html;charset=utf8');
error_reporting(E_ALL || ~E_NOTICE);
//链接收据库
$dbhost = 'localhost';
$dbuser = 'root';
$dbpwd = 'root';
$database = 'grouplus';
$conn = mysqli_connect($dbhost,$dbuser,$dbpwd,$database);
//连接数据库
mysqli_query($conn,'set names utf8');
// if(!$conn){
//     echo 'defeat';
// }else{
//     echo "success";
// }

?>