


function generate_random(x){
    randomNbrs = [];
    let i=0;
    while(i<x){
        n = Math.round(Math.random() * 9);
        if(randomNbrs.includes(n))
            continue;
        else{
            randomNbrs.push(n);
            i++;
        } 
    }
    console.log(randomNbrs);
    return randomNbrs;
}

function compareNbr(tab1, tab2){
    correct1 = 0; //Correct && correct placé
    correct2 = 0; //Correct && incorrect placé
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            if(tab1[i] == tab2[j]){
                if(i==j)
                    correct1++;
                else  
                    correct2++;
            }
        }
    }
    output = [correct1, correct2];
    return output;
}


tab = generate_random(4);

console.log(tab);
let tentatives = 0;
while(1){
    a = prompt("Saisir 4 nombres séparés par des virgules: ");
    tabA = a.split(',');
    for(i in tabA){
        tabA[i] = Number(tabA[i]);
    }
    console.log(tabA);
    result = compareNbr(tab, tabA);
    if(result[0] == 4){
        alert("CORRECT! Vous avez devinez le nombre apres " + tentatives + " tentatives.");
        break;
    }else{
        alert("INCORRECT, GO AGAIN!")
    }
    tentatives++;
}