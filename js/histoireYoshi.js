

const oeuf = document.getElementById("image0");

function changeImage() {
    console.log(oeuf.src.indexOf("images/oeufRose.png")>=0)
    if (oeuf.src.indexOf("images/oeufRose.png")>=0)
        oeuf.src = "./images/babyyoshi2.png";
    else if (oeuf.src.indexOf("images/babyyoshi2.png")>=0)
        oeuf.src = "./images/vide.png";
    else 
        oeuf.src = "./images/oeufRose.png";
}

