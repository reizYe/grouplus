/**
 * Created by reiz on 2017/7/10.
 */
$(function () {
    $(".pull-right").click(function () {
        if ($(".btn-default").css("width") != '100%') {

            $(".navbar-toggle").css("background-position", "-139px -249px");

        }
        else {
            $(".navbar-toggle").css("background-position", "-163px -249px");
        }
    });


    //延时显示左方固定二维码
    var wx = $(".side-text")[0]; //所要显示的图片
    var img= $(".side-img")[0]; //图片显示位置
    var x ;
    wx.onmouseover = img.onmouseover = function(){
        wx.style.display="block";
        clearTimeout(x);
    }
    img.onmouseout = wx.onmouseout = function(){
        x = setTimeout(function(){
            wx.style.display="none";
        },1000);
    }
    // $(".item>img").width = $(window).width*(596/1920);

    })
$(function () {
    var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    var clientWidth = document.documentElement.clientWidth;
    var timer;
    function setRem() {
        clientWidth = document.documentElement.clientWidth;
        var nowPX = clientWidth / 1920 * 596;
        $(".item>img").css({"height": nowPX,"width":clientWidth});
    //     = nowPX + 'px'
    }
    clientWidth !== 320 && setRem();
    window.addEventListener(supportsOrientationChange, function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            setRem();
        }, 100);
    }, false);
});

    if(document.documentElement.clientWidth>768){
        $(".header-list").moveline({color:'#5f4bcc',position:'inner'});
    }



//回到顶部
$(window).scroll(function(){
    var s = $(window).scrollTop();
    if(s > 100){
        $("#totop").show();
    }else{
        $("#totop").hide();
    }
});
$("#totop").click(function(){    //点击回到顶部
    $("html,body").animate({scrollTop:0},500);
});
