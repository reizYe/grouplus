$(function(){
    $.get("php/reportmanage.php",
        function (data) {
          var html = "";
          $.each(data, function (i, item) {
               html+='<tr>'+
                '<td class="table-tr"><span><strong><a>' + item['title'] + '</a></strong></span></td>' +
                '<td><span>' + item['time'] + '</span></td>' +
                '<td><span>' + item['status'] + '</span></td>' +
                '<td><span>' + item['read'] + '</span></td>' +
                '<td><span>' + item['newtickling'] + '</span></td>' +
                '<td><span>' + item['alltickling'] + '</span></td>' +
                '<td><span><a>' + '管理' + '</a> &nbsp;' + '<a>'+'删除' + '</a></span></td>' +
               '</tr>';
          });
          $('tbody').append(html);
        },
        "json"
    );
})