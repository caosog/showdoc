


$(function(){
  var item_id = $("#item_id").val();

  $('#edit-cat').modal({
    "backdrop":'static'
  });

  //保存
  $("#save-cat").click(function(){
      var password = $("#password").val();
      $.post(
        "?s=/home/item/ajaxDelete",
        {"item_id": item_id , "password": password  },
        function(data){
          if (data.error_code == 0) {
            alert("删除成功！");
            window.location.href="?s=/home/item/index";
          }else{
            alert(data.error_message);

          }
        },
        "json"

        );
      return false;
  });

  $(".exist-cat").click(function(){
    window.location.href="?s=/home/item/show&item_id="+item_id;
  });

});






