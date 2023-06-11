

function calculerSurface(){
    var longueur = document.getElementById("longueur").value;
    var largeur = document.getElementById("largeur").value;
    alert("Surface: " + longueur*largeur);
}

function calculerPerimetre(){
    var longueur = document.getElementById("longueur").value;
    var largeur = document.getElementById("largeur").value;
    alert("Perimetre: " + (2*longueur + 2*largeur))
}