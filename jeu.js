const backJeu = document.getElementById("jacket")
backJeu.style.background = "rgb(253, 203, 109)";


function openWin(url){
    newwin=window.open(url,'','width=400,height=400,top=200,left=200');
    if(newwin){
    window.onfocus=function(){newwin.window.close()}
    }
    }

function merci(){
    var elem = document.getElementById('merci')
    return window.alert('Yoshi vous remercie et vous enverra vos oeufs au plus vite !!!')
}
