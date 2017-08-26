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
        $.get("php/reportmanage.php").promise().done(function (data) {
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
                    '<td><span>' + item['alltickling'] + '</span></td>' +
                    '<td><span><a>' + '管理' + '</a> &nbsp;' + '<a class="delete">' + '删除' + '</a></span></td>' +
                    '</tr>';
                if (index == number) {
                    return false;
                };
            });
            //可以改为promise
            $('tbody').append(html);
            $('.left-foot>span').text(int);

        });
    }
    //  $('.left-foot>span').text(int);
    $('.left-foot>select').change(function () {
        var num = $('.left-foot>select').val() - 1;
        $('tbody').empty();
        update(num);

    });
    $(".delete").promise().done($("tbody>tr").on('click', function () {
            console.log(111);
        
    }));
    update(9);
});
$(function(){
    
});
