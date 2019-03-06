$(document).ready(function(){
    $(".play").click(function(){
      $(".play").hide(1000);
    });
    $("#show").hover(function(){
      $(".border2").show(1000).css('display', 'flex');
    });
     $("#show").click(function(){
      $(".nes-container").show(1000).css('display', 'flex');
    });
  });