
<?php
header("Content-type:text/html;charset=utf-8");
//定义变量
//纯数字,不能包含空格,区分大小写
$string ="aaaaa";
$test =8;
// $test1 = array();
// $test1 = new object();
// 单引号里面的任何东西都是字符串
$newstring = 'hi'.$string.'jons';
echo $newstring;
define('pi',3.14);
define('name','jack');
echo "<br>";
echo name;
//消除 ===,== 和=的困扰
$num1 = 123;
$num2 = 123;
$res = $num1==$num2?'yes':'no';
echo $res.'<br>';
print $num2;
$myarray =array('apple',23);
print_r($myarray);
$myname ='kitty';
echo "我的名字是$myname";
echo '我的名字是$myname';
//转义
echo 'I\'am happy!';
//null=未定义+未负值
//
//
//
//
//gettype()
echo gettype($myname);
?>