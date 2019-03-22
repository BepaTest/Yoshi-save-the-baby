const backJeu = document.getElementById("jacket")
backJeu.style.background = "rgb(253, 203, 109)";

/* bouton achat*/

$( document ).ready(function() {
    $('.trigger').click(function() {
       $('.modal-wrapper').toggleClass('open');
      $('.page-wrapper').toggleClass('blur');
       return false;
    });
  });
