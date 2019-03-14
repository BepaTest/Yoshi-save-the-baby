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

 function imgchange2(element) {
    var x = document.getElementById('imgswitch')
    var v = x.getAttribute("src");

    if (v == 'https://i.ytimg.com/vi/srXw1ayn5Fs/maxresdefault.jpg') {
    
  
    x.setAttribute("src","https://www.actugaming.net/wp-content/uploads/2018/09/Yoshi-Switch.jpg")
  }

  if (v == 'https://www.actugaming.net/wp-content/uploads/2018/09/Yoshi-Switch.jpg') {
    x.setAttribute("src","https://ubistatic19-a.akamaihd.net/resource/fr-ca/game/rabbids/portal/yoshi%20cover_301841.jpg")
  }
  if (v == 'https://ubistatic19-a.akamaihd.net/resource/fr-ca/game/rabbids/portal/yoshi%20cover_301841.jpg') {
    x.setAttribute("src","https://i.ytimg.com/vi/srXw1ayn5Fs/maxresdefault.jpg")
  }
    }
