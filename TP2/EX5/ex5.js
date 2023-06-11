

var nomEtudiant = new Array("Dupont", "Durand", "Petit", "Martin", "Legrand", "Lacroix");

notes = new Array([10, 12, 18, 5, 9, 13],[13, 11, 14, 7, 14, 16],[0, 14, 14, 12, 8, 20], [10, 12, 18, 5, 9, 13],[13, 11, 14, 7, 14, 16],[0, 14, 14, 12, 8, 20]);


function Etudiant(nom, notes){
    this.nom = nom;
    this.notes = notes;
    var somme = 0;
    for(var i=0; i<notes.length; i++){
        somme += notes[i];
    }

    this.moyenne = somme/notes.length;
}

Etudiant.prototype.afficherEtudiant = function(){
    console.log("Les notes de <<" + this.nom + ">> sont: [" + this.notes + "] et sa moyennes: "+ this.moyenne);
}

let mo = new Etudiant("mohamed", [10, 12, 18, 5, 9, 13]);

mo.afficherEtudiant();


function creerEtudiant(tabNom, tabNotes){
    etudiants = [];
    for(var i = 0; i<tabNom.length; i++){
        etudiants.push(new Etudiant(tabNom[i], tabNotes[i]));
    }
    return etudiants;
}


tab = creerEtudiant(nomEtudiant, notes);

console.log(tab);

function calculMinMax(tabObj){
    var indexMin = 0, indexMax = 0, max = -1, min = 21;
    for(var i=0; i<tabObj.length; i++){
        for(var j=0; j<tabObj[i].notes.length; j++){
            if(max<=tabObj[i].notes[j]){
                max = tabObj[i].notes[j];
                indexMax = i;
            }
            if(min>tabObj[i].notes[j]){
                min = tabObj[i].notes[j];
                indexMin = i;
            }
        }
    }

    return "C'est " + tabObj[indexMin].nom + " qui a " + min + " comme note minimal\nC'est " + tabObj[indexMax].nom + " qui a " + max + " comme note maximal\n";
}

console.log(calculMinMax(tab));


function alertData(tab){
    for(var i=0; i<tab.length; i++){
        tab[i].afficherEtudiant();
    }
    console.log(calculMinMax(tab));
}

alertData(tab);