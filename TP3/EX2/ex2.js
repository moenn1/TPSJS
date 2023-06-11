


class Cycliste{
    #matricule;
    #nom;
    #score;

    constructor(matricule, nom, score){
        this.#matricule = matricule;
        this.#nom = nom;
        this.#score = score;
    }

    getMatricule(){
        return this.#matricule;
    }

    getNom(){
        return this.#nom;
    }

    getScore(){
        return this.#score;
    }

    setMatricule(matricule){
        this.#matricule = matricule;
    }

    setNom(nom){
        this.#nom = nom;
    }

    setScore(score){
        if(score<0)
            this.#score = 0;
        else
            this.#score = score;
    }

    resetScore(){
        this.#score = 0;
    }

    toString(){
        return this.#nom + " ("+ this.#matricule + "): "+ this.#score; 
    }
}

class Classement{
    #listCycliste = [];
    #n;

    constructor(listCycliste){
        this.#listCycliste = listCycliste;
    }

    addCycliste(cycliste){
        this.#listCycliste.push(cycliste);
    }

    trierListe(){
        this.#listCycliste.sort((c1, c2) => {
            return c2.getScore()-c1.getScore();
        });
        return this.#listCycliste;
    }

    disqualifierCycliste(matricule){
        var newArr = this.#listCycliste.filter(obj => obj.getMatricule() != matricule);
        this.#listCycliste = newArr;
    }

    affichage(){
        var liste = this.trierListe();
        for(var i=0;i<liste.length;i++){
          console.log(liste[i].toString());
        }
      }
}


/*
1. initialisation avec les cyclistes :
- DUPONT J., n° 126 et 10 points;
- MATMAH F., n°83 et 26 points,
2. affichage du classement,
3. ajout des cyclistes :
- LAURENT J., n° 16 et 150 points;
- LUCULUS O., n° 42 et 64 points;
- XIANG P., n° 7654 et 59 points;
- XIANG P., n°4682 et 16 points,
4. affichage du classement,
5. disqualification du cycliste n°16,
6. affichage du classement
*/

function main(){
    console.log("-------------- Epreuve 1 --------------");
    let c1 = new Cycliste("n° 126", "DUPONT J.", 10);
    let c2 = new Cycliste("n° 83", "MATMAH F.", 26);
    let classement = new Classement([c1, c2]);
    classement.affichage();
    console.log("-------------- Epreuve 2 --------------");
    classement.addCycliste(new Cycliste("n° 16", "LAURENT J.", 150));
    classement.addCycliste(new Cycliste("n° 42", "LUCULUS O.", 64));
    classement.addCycliste(new Cycliste("n° 7654", "XIANG P.", 59));
    classement.addCycliste(new Cycliste("n° 4682", "LEPONT Q.", 16));
    classement.affichage();
    console.log("-------------- Epreuve 3 --------------");
    classement.disqualifierCycliste("n° 16");
    classement.affichage();

}

main();

