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
       var promise = $.ajax({
            url: "php/reportmanage.php",
            type:"post",
            cache:false,
            dataType:'json'});
            // beforeSend:function(){
            //     $(".delete").attr('onclick', 'javascript:void();');
            // },
            promise.done(function (data) {
                //Ajax使用Promise方法(默认返回一个Promise对象，所以可以不必显式调用Promise方法)
                //  limit 10
                $.each(data, function (index, item) {
                    int++;
                    html += '<tr>' +
                        '<td class="table-tr"><span><strong><a>' + item['title'] + '</a></strong></span></td>' +
                        '<td><span>' + item['time'] + '</span></td>' +
                        '<td><span>' + item['status'] + '</span></td>' +
                        '<td><span>' + item['read'] + '</span></td>' +
                        '<td><span>' + item['newtickling'] + '</span></td>' +
                        '<td><span>' + item['alltickling'] + '</span><span class="myid">' + item['Id'] + '</span></td>' +
                        '<td><span><a>' + '管理' + '</a> &nbsp;' + '<a class="delete">' + '删除' + '</a></span></td>' +
                        '</tr>';
                    if (index == number) {
                        return false;
                    };
                });
                $('tbody').append(html);
                $('.left-foot>span').text(int);
            });
            promise.fail(function(){
                 $('tbody').append('请求数据失败,请重试!');
            });
            promise.always(function(){
                $('.delete').on('click', function () {
                    alert(this);
                })
            });
    
    }
    
    $('.left-foot>select').change(function () {
        var num = $('.left-foot>select').val() - 1;
        $('tbody').empty();
        update(num);
    });

    update(9);
});
    
    
$(function(){
    
});
