/**
 * Created by reiz on 2017/7/10.
 */
$(function () {
      var int = 0;
    $(".pull-right").click(function() {
       
        int++;
        if (int % 2 == 0) {
            $(".navbar-toggle").css("background-position", "-139px -249px");
        } else {
            $(".navbar-toggle").css("background-position", "-163px -249px");
        }
    }
      
        // if ($(".btn-default").css("width") != '100%') {

        //     $(".navbar-toggle").css("background-position", "-139px -249px");

        // }
        // else {
        //     $(".navbar-toggle").css("background-position", "-163px -249px");
        // }
  
);
    // var itemOffsetTop = $("#myTargetElement").offset().top;
    // var itemOuterHeight = $("#myTargetElement").outerHeight();
    // var winHeight = $(window).height();
    // $(window).scroll(function () {
    //     var winScrollTop = $(window).scrollTop();
    //     if(!(winScrollTop > itemOffsetTop+itemOuterHeight) && !(winScrollTop < itemOffsetTop-winHeight)) {

    //         var decimal_places = 0;
    //         var decimal_factor = decimal_places === 0 ? 1: decimal_places * 10;
    // $("#myTargetElement").animateNumber({number:24513});
    //         $('#myTargetElement').animateNumber(
    //             {
    //                 number: 24333,
    //                 // color: 'green',
    //                 numberStep: function(now, tween) {
    //                     var floored_number = Math.floor(now) / decimal_factor,
    //                         target = $(tween.elem);
    //                     //加载小数点
    //                     // if (decimal_places > 0) {
    //                     //     floored_number = floored_number.toFixed(decimal_places);
    //                     // }
    //                     target.text(floored_number);
    //                 }

    //             },
    //             25000
    //          )
    // }
    // else {
    //     $("#myTargetElement").stop();
    // }
    // return false;
    // })



    //延时显示左方固定二维码
    var wx = $(".side-text")[0]; //所要显示的图片
    var img = $(".side-img")[0]; //图片显示位置
    var x;
    wx.onmouseover = img.onmouseover = function () {
        wx.style.display = "block";
        clearTimeout(x);
    }
    img.onmouseout = wx.onmouseout = function () {
        x = setTimeout(function () {
            wx.style.display = "none";
        }, 1000);
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
        $(".item>img").css({ "height": nowPX, "width": clientWidth });
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

if (document.documentElement.clientWidth > 768) {
    $(".header-list").moveline({ color: '#5f4bcc', position: 'inner' });
}


//回到顶部
$(window).scroll(function () {
    var s = $(window).scrollTop();
    if (s > 100) {
        $("#totop").show();
    } else {
        $("#totop").hide();
    }
});
$("#totop").click(function () {    //点击回到顶部
    $("html,body").animate({ scrollTop: 0 }, 500);
});

function showScore($ele, num, secand, pause) { //second  按照秒数，动画运行多少秒
    if (!secand) { secand = 2; }
    if (!pause) { pause = 20; }
    var len = String(num).length;
    var temnum, times = 0, stepTimes, max;
    var numArr = String(num).split("");
    function getRandom(n) {
        var num = Math.floor(Math.random() * (Math.pow(10, n) - 1 - Math.pow(10, n - 1)) + Math.pow(10, n - 1));
        if (String(num).length !== n)
        { num = getRandom(n); }
        return num;
    }
    function setValue(num, pause, secand) {//second 运行多少秒后停止
        var len = String(num).length, j = 0;

        if (!stepTimes) {
            max = Math.ceil(secand * 1000 / len);
            stepTimes = Math.ceil(max / pause);
        }
        temnum = "";
        setTimeout(function () {
            for (var i = 1; i <= len; i++) {
                if (times >= stepTimes * i) {
                    j++;
                    temnum += numArr[i - 1] + "";
                } else {
                    break;
                }
            };

            if (j < len) {
                $ele.html(temnum + "" + getRandom(len - j));
            } else {
                $ele.html(temnum);
            }


            if (times >= max || j >= len) { return; };

            setValue(num, pause, secand);
            times++;

        }, pause);


    }

    setValue(num, pause, secand);

}

showScore($("#myTargetElement"), 22344, 10, 20);