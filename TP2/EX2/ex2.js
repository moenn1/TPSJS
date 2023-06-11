
tab = ["hassan"]
function ajouterPersonne(){
    a = prompt("Saisir le nom: ");
    tab.push(a);
    console.log(tab);
};

function tirerPersonne(){
    b = tab[Math.round(Math.random()*(tab.length-1))];
    console.log(b);
    return b;
};