$(function () {
    $(document).ajaxStart(function () {
        $('.loader').css('display', 'block');
    });
    $(document).ajaxComplete(function () {
        $('.loader').css('display', 'none');
    });
    update = function (num) {
        $.get("php/reportmanage.php?t="+Math.random(),
            function (data) {
                var html = "";
                var int = 0;
                var number = (num == 0) ? $('.left-foot>select').val() - 1 : num;
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
                $('tbody').append(html);
                $('.left-foot>span').text(int);
                
            }
        ).done();
    }

    update(9);
    $('.left-foot>select').change(function () {
        var num = $('.left-foot>select').val() - 1;
        $('tbody').empty();
        update(num);

    });
 
});
$(document).ready(function(){
      $(".delete").on('click', function () {
          try {
              console.log(111);
          } catch (error) {
              alert(error);
          }
      });
});