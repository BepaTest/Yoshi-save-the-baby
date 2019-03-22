window.onload = init;

function init(){
let modal = document.getElementById('id01');

let ptscount = 0
let modal2 = document.getElementById('id011');
console.log(modal2)

window.onclick = function(event) {
  if (event.target == modal || event.target == modal2 || event.key === 27) {
    modal.style.display = "none";
    modal2.style.display = "none";
  }
}
let pts = document.getElementById('pts');



const count = function () {
  ptscount = ptscount + 1 
  setTimeout(count,60000);
pts.innerHTML = ptscount + " pts";

}

$(document).keyup(function(e) {
  if (e.key === "Escape") { // escape key maps to keycode `27`
  modal.style.display = "none";
  modal2.style.display = "none";
 }
});

count()
}

/* this is the password input field */
let password = target.previousElementSibling;
( 'password' == password.getAttribute('type') ) ? password.setAttribute('type', 'text') : password.setAttribute('type', 'password');
target.textContent = ( 'Hide' == target.textContent ) ? 'Show' : 'Hide';
putCursorAtEnd(password);




function getHU() {

 
  let nom  =document.getElementById("username").value;  
  console.log(nom)
  let mdp  =document.getElementById("pass").value;  


if (nom === username && mdp === mdp1) {
    document.location.href='indexconnected.html'
}

else  {

    alert('Informations incorrectes')
}




}



function populateStorage(user) {
  user.username = document.getElementById('username1').value;
  user.password = document.getElementById('password1').value;
  
}







function getHUen() {
 

  let nom  =document.getElementById("username").value;  

  let mdp  =document.getElementById("pass").value;  


if (nom === user.username && user.password === mdp) {
  document.location.href='indexconnecteden .html'
}

else  {

  alert('Incorrect username/password')
}
}
function getHU() {
 

  let nom  =document.getElementById("username").value;  

  let mdp  =document.getElementById("pass").value;  


if (nom === user.username && user.password === mdp) {
  document.location.href='indexconnected.html'
}

else  {

  alert('Incorrect username/password')
}
}


document.addEventListener("DOMContentLoaded", function() {
  // code
 user = new Object();
 let modal = document.getElementById('id01');

let ptscount = 0
let modal2 = document.getElementById('id011');
});
