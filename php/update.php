<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>资料修改</h2>
    <form onsubmit="return renewdo();">
        <!-- action="regdo.php" method="post" name="myform"action="regdo.php" method="post" name="myform" -->
        用户名: <input type="text" name="username" id="username"> <span></span><br> 
        真实姓名: <input type="text" name="truename" id="truename"> <br>
        手机号码: <input type="text" name="userphone" id="userphone"> <br> 
        成绩: <input type="text" name="userscore" id="userscore">        <br>
        <input type="hidden" name="uid" id="uid"> <br>
        <input type="submit" value="修改" name="submit">
    </form>
</body>
</html>