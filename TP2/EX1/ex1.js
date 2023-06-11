

sports = ["tennis", "basket", "foot"];

sport = prompt("Votre tableau contient les sports suivants: \n[" + sports+"]\nVeullez saisir le sport à ajouter/supprimer\nEntrez X pour quitter");
while(1){
if(sport == 'X') break;
if(sports.includes(sport)){
    delete sports[sports.indexOf(sport)];
    console.log(sports);
}else
    sports.push(sport);
    console.log(sports);
}

