

function calculerIMC(){
    var poids = document.getElementById("poids").value;
    var taille = document.getElementById("taille").value;
    var imc = (poids/(Math.pow(taille, 2)));
    var interpretation = "";
    if(imc >= 16.5 && imc < 18.5)
        interpretation = "corpulence maigre";
    else if(imc < 25)
        interpretation = "corpulence normale";
    else if(imc < 30)
        interpretation = "Surpoids";
    else if(imc < 35)
        interpretation = "obésité moderée";
    else if(imc < 40)
        interpretation = "obésité severe";
    else
        interpretation = "obésité morbide ou massive"
    alert("Vous faites partie des gens ayant une "+ interpretation + " et votre IMC est: " + imc);
}