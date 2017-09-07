$(function () {
    //加载动画
    $(document).ajaxStart(function () {
        $('.loader').css('display', 'block');
    });
    $(document).ajaxComplete(function () {
        $('.loader').css('display', 'none');
    });
    //加载数据请求
    update = function (num) {
        var html = "";
        var int = 0;
        var number = (num == 0) ? $('.left-foot>select').val() - 1 : num;
        //Ajax使用Promise方法(默认返回一个Promise对象，所以可以不必显式调用Promise方法)
        //实现数据接受和处理分离的功能

        var getdatapromise = $.ajax({
            url: "php/reportmanage.php",
            type: "get",
            cache: false,
            dataType: 'json'
        });
        getdatapromise.then(function (data) {
            $.each(data, function (index, item) {
                int++;
                html += '<tr>' +
                    '<td class="table-tr"><span><strong><a>' + item['title'] + '</a></strong></span></td>' +
                    '<td><span>' + item['time'] + '</span></td>' +
                    '<td><span>' + item['status'] + '</span></td>' +
                    '<td><span>' + item['read'] + '</span></td>' +
                    '<td><span>' + item['newtickling'] + '</span></td>' +
                    '<td><span>' + item['alltickling'] + '</span><span class="myid">' + item['id'] + '</span></td>' +
                    '<td><span><a href=php/myupdate.php?id=' + item['id'] + '>' + '管理' + '</a> &nbsp;' + '<a class="delete">' + '删除' + '</a></span></td>' +
                    '</tr>';
                    // 
                if (index == number) {
                    return false;
                };
            });
            $('tbody').append(html);
            $('.left-foot>span').text(int);
        }, function () {
            $('tbody').append('请求数据失败,请重试!');
        });
        var deletepromise = getdatapromise.then(function (data) {
              $('.delete').on('click', function () {
                int--;
                $('.left-foot>span').text(int);
                $('.btn-success>em:last').text(parseInt($('.btn-success>em:last').text()) + 1);
                var delnum = $(this).parents("td").prev().children(".myid").html();
                $(this).parents("tr").remove();
                return  $.ajax({
                    type: "post",
                    url: "php/reportdelete.php",
                    data: {
                        'deleteid': delnum
                    },
                    dataType: "text",
                });
            })
        });
        var managepromise = getdatapromise.then(function (data){
            // $(this).parents("td").prev().children(".myid").html();
            $('delete').prev().on('click',function(){
               
            })
        })
        // deletepromise.then(function (data) {
        //         console.log(data + '123');
        //     },
        //     function (data) {
        //         alert(data);
        //     })
    };

    $('.left-foot>select').change(function () {
        var num = $('.left-foot>select').val() - 1;
        $('tbody').empty();
        update(num);
    });

    update(9);
    $('delete').prev().click(function(){
        alert($(this).parents("td").prev().children(".myid").html());
    })
});
//防止重复提交
// var pendingRequests = {};
// $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
//     var key = options.url;
//     console.log(key);
//     if (!pendingRequests[key]) {
//         pendingRequests[key] = jqXHR;
//     } else {
//         //jqXHR.abort(); //放弃后触发的提交
//         pendingRequests[key].abort(); // 放弃先触发的提交
//     }
//     var complete = options.complete;
//     options.complete = function (jqXHR, textStatus) {
//         pendingRequests[key] = null;
//         if (jQuery.isFunction(complete)) {
//             complete.apply(this, arguments);
//         }
//     };
// });


// ajax 线性
// var promise1 = $.ajax(url1);
// var promise2 = promise1.then(function (data) {
//     return $.ajax(url2, {
//         "data": data
//     });
// });
// var promise3 = promise2.then(function (data) {
//     return $.ajax(url3, {
//         "data": data
//     });
// });
// promise3.done(function (data) {
//     // data retrieved from url3  
// });