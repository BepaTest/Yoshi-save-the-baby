$(document).ready(function(){
  $("#show1").click(function(){
    $(".play").hide(1000);
  });
  $("#show").hover(function(){
    $(".border2").show(400).css('display', 'flex');
  });
   $("#show1").click(function(){
    $(".switch").show(10).css('display', 'flex');
  });
  $("#show1").click(function(){
    $(".border2").show(10).css('display', 'flex');
  });
  $("#show1").click(function(){
    $(".containerimg").show(10).css('display', 'flex');
  });
  
});
