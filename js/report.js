  $(function () { //设置时间选择，结束时间必须大于开始时间
      //活动时间
      $(".Day").datetimepicker({ //年月日
          format: "yyyy-mm-dd",
          minView: 'month', //日期时间选择器所能够提供的最精确的时间选择视图
          language: 'zh-CN', //中文，需要引用zh-CN.js包
          autoclose: true, //自动关闭
          todayBtn: false, //选择今天的按钮
          todayHighlight: true, //今天是否高亮
          pickerPosition: "bottom-right", //面板在输入框的位置
          startView: 2 //月视图
      });
      $(".Time").datetimepicker({ //小时
          format: "hh:mm:ss",
          minView: 'day', //日期时间选择器所能够提供的最精确的时间选择视图
          language: 'zh-CN', //中文，需要引用zh-CN.js包
          autoclose: true, //自动关闭
          pickerPosition: "bottom-right", //面板在输入框的位置
          startView: 1 //日视图
      });
      var picker1 = $('#startTime1').datetimepicker();
      var picker2 = $("#endTime1").datetimepicker();
      //动态设置最小值(选择前面一个日期后：后面一个日期不能小于前面一个)
      picker1.on('changeDate', function (e) {
          picker2.datetimepicker('setStartDate', e.date);
      });
      //动态设置最大值(选择后面一个日期后：前面一个日期不能大于前面一个）
      picker2.on('changeDate', function (e) {
          picker1.datetimepicker('setEndDate', e.date);
      });
      //报名时间
      var picker3 = $('#startReg1').datetimepicker();
      var picker4 = $("#endReg1").datetimepicker();
      picker3.on('changeDate', function (e) {
          picker4.datetimepicker('setStartDate', e.date);
      });
      picker4.on('changeDate', function (e) {
          picker3.datetimepicker('setEndDate', e.date);
      });
  })
  $(function () {
      var i = 1;
      $('.btn-default').click(function () {
          i++;
          if (i % 2 == 0) {
              $('.addform').css('display', 'block');
              myclick();
              $('.addform>span').css({
                  "background-color": "",
                  "cursor": "pointer"
              });
          } else {
              $('.addform').css('display', 'none');
          }
      })

      function myclick() {
          $('.addform>span').one('click', function () {
              var text = $(this).text();
              $(this).css({
                  "background-color": "gray",
                  "cursor": "not-allowed"
              });
              $.each($('.fixedinfo>b'), function () {
                  var mytext = '<div><span class="fixedinfo"><input type="checkbox" checked>必填&nbsp;<b>' + text +
                      '</b></span><input type= "text" class="six" > <button class="btn btn-danger">delete</button></div>';
                  $('#userinfo').append(mytext);
                  return false;
              })
          })
      }
      //   myclick(); 
  })
  $(function () {
      $('#userinfo').on('click', '.btn-danger', function (event) {
          // $(this).remove();
          // var value = $(event.target).parent().html();
          // alert(value);
          // alert($(event.target).parent().html());
          $(this).parent().remove();
      });
      $('#inputtitle').keyup(function () {
          // var totallength = 64;
          var inputlength = $(this).val().length;
          $('#totalnum').text(inputlength);
          // value = value.replace(/\n|\r/gi, "");
      })
      $('.btn-success').click(function(){
         var title = $('#inputtitle').val();
         $.ajax({
             type: "post",
             url: "php/insertreport.php",
             data: {'title':title},
             dataType: "text",
             success: function (response) {
                alert(response);
             }
         });
      })
  })