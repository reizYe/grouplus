<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>发布活动</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/bootstrap-datetimepicker.min.css">
    <link rel="stylesheet" href="../css/Console-index.css">
    <link rel="stylesheet" href="../css/C-report.css">
    <script src="../js/jquery-1.11.3.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/bootstrap-datetimepicker.min.js"></script>
    <script src="../js/bootstrap-datetimepicker.zh-CN.js"></script>
    <script src="../js/report.js"></script>
</head>

<body>
    <!--侧边栏-->
    <aside id="console-list">
        <div><span class="icon"></span></div>
        <ul>
            <li class="selected"><a href="#"><span></span>工作台</a></li>
            <li class="line"></li>
            <li><a href="#"><span></span>活动管理</a></li>
            <li><a href="#"><span></span>报名表管理</a></li>
            <li><a href="#"><span></span>问卷管理</a></li>
            <li><a href="#"><span></span>打赏管理</a></li>
            <li class="line"></li>
            <li><a href="#"><span></span>会员招募</a></li>
            <li><a href="#"><span></span>会员管理</a></li>
            <li><a href="#"><span></span>群组管理</a></li>
            <li class="line"></li>
            <li><a href="#"><span></span>收入管理</a></li>
            <li><a href="#"><span></span>账号设置</a></li>
            <li><a href="#"><span></span>操作日志</a></li>
        </ul>
    </aside>

    <!--顶部菜单-->
    <nav class="nav">
        <h1>后台管理系统</h1>
        <ul>
            <li><a href="#">立即注册</a></li>
            <li><a href="#"><span class="icon"></span><i class="icon"></i>DEMO测试帐号</a></li>
            <li><a href="#">未认证</a></li> |
            <li><a href="#">退出</a></li>
            <li><a href="#"><em class="icon"></em>通知中心</a></li>
        </ul>
    </nav>

    <!--内容开始-->
    <section>
        <div id="act">
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
 </div>
</section>
</body>

</html>