

/*
1. L’utilisateur est invité à entrer un nombre compris entre 0 et 999 via prompt.
2. Ce nombre doit être envoyé à une fonction qui se charge de le convertir en toutes lettres.
3. Cette même fonction doit contenir un système permettant de séparer les centaines, les
dizaines et les unités. Ainsi, la fonction doit être capable de voir que le nombre 365
contient trois centaines, six dizaines et cinq unités.
4. Une fois le nombre découpé en trois chiffres, il ne reste plus qu’à convertir ces derniers
en toutes lettres.
5. Lorsque la fonction a fini de s’exécuter, elle renvoie le nombre en toutes lettres.
NB. Ici on va employer les règles orthographiques en vigueur depuis 1990, nous
écrirons donc les nombres de la manière suivante : cinq-cent-cinquante-cinq.
Et non pas: cinq cent cinquante-cinq.

*/


a = prompt("Saisir un nombre entre 0 et 999: ");

function convertToWords(a){
    let units = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
    let tens = ['dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
    let hundreds = ['cent', 'deux-cent', 'trois-cent', 'quatre-cent', 'cinq-cent', 'six-cent', 'sept-cent', 'huit-cent', 'neuf-cent'];
    let result = [];
    let aStr = a.toString();
    let aLength = aStr.length;
    let i = 0;
    while(i<aLength){
        if(aLength == 3){
            result.push(hundreds[aStr[i]-1]);
            i++;
            aLength--;
        }else if(aLength == 2){
            if(aStr[i] == 1){
                result.push(tens[0]);
                i++;
                aLength--;
            }else if(aStr[i] == 7 || aStr[i] == 9){
                result.push(tens[aStr[i]-2]);
                i++;
                aLength--;
            }else{
                result.push(tens[aStr[i]-2]);
                i++;
                aLength--;
            }
        }else if(aLength == 1){
            if(aStr[i] == 1){
                result.push(units[10]);
                i++;
                aLength--;
            }else if(aStr[i] == 7 || aStr[i] == 9){
                result.push(units[10]);
                i++;
                aLength--;
            }else{
                result.push(units[aStr[i]]);
                i++;
                aLength--;
            }
        }
    }
    return result;
}

alert(convertToWords(a));