

jQuery(document).ready(function($) {
  $(".centered").each(function() {
      $(this).css({
          "margin-left": "-" + ($(this).width() / 2)+"px",
          "margin-top": "-" + ($(this).height() / 2)+"px"
      });
  });
});
 

  function imgchange2(element) {
    var x = document.getElementById('imgswitch')
    var v = x.getAttribute("src");

    if (v == 'https://i.ytimg.com/vi/srXw1ayn5Fs/maxresdefault.jpg') {
    
  
    x.setAttribute("src","https://www.actugaming.net/wp-content/uploads/2018/09/Yoshi-Switch.jpg")
  }

  if (v == 'https://www.actugaming.net/wp-content/uploads/2018/09/Yoshi-Switch.jpg') {
    x.setAttribute("src","https://images.wallpaperscraft.com/image/super_mario_galaxy_2_mario_dinosaur_yoshi_stars_2237_1280x720.jpg")
  }
  if (v == 'https://images.wallpaperscraft.com/image/super_mario_galaxy_2_mario_dinosaur_yoshi_stars_2237_1280x720.jpg') {
    x.setAttribute("src","https://i.ytimg.com/vi/srXw1ayn5Fs/maxresdefault.jpg")
  }
    }
    onkeypress = function(e){
      if(e.charCode == 97 || e.charCode == 98 || e.charCode == 65 || e.charCode == 66){
          imgchange2()
      }
  }
 

    
 function yoshanim(element) {
    let me = document.getElementById('box')
    
    
    var current = window.getComputedStyle(me, null).visibility;
    if (current === 'hidden') {
      
      me.style.visibility="visible"
    }
  
    if (current === 'visible') {
      me.style.visibility="hidden"
    }
  }

  
