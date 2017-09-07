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
    <form action="updatecommit.php" method="post" name="myform">
        <?php
        header("Content-Type: application/json; charset=UTF-8");
        include_once('../php/dbconfig.php');
        $uid = $_GET['id'];
        // echo $uid;
        $query = "SELECT*FROM reportmanage where Id =$uid";
        $result = mysqli_query($conn,$query);
        // $res = mysqli_fetch_array($result);
        while( $res = mysqli_fetch_array($result)){
        //    $res =json_encode($res);
        //    echo $res['Id'];
        //    echo $res;
        echo '
        <input type="hidden" name="uid" id="uid" value='.$res['Id'].'> <br>
        标题:<input type="text" name="title" id="title" value ='.$res['title'].'><br>
        状态:<input type="text" name="mystatus" id="mystatus" value ='.$res['mystatus'].'><br>
        浏览数:<input type="text" name="readstatus" id="readstatus" value ='.$res['readstatus'].'><br>
        新增反馈数:<input type="text" name="newtickling" id="newtickling" value ='.$res['newtickling'].'><br>
        总反馈数:<input type="text" name="alltickling" id="alltickling" value ='.$res['alltickling'].'><br>';
        }
        ?>
        <input type="submit" value="修改并提交" name="submit">
    </form>
</body>
</html>