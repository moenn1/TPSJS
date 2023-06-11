

class Horloge{
    heure;
    minute;
    seconde;

    constructor(heure, minute, seconde){
        this.heure = heure;
        this.minute = minute;
        this.seconde = seconde;
    }

    afficheHorloge(){
        return this.heure + " : " + this.minute + " : " + this.seconde;
    }
    dynamiqueHorloge(){
        var today = new Date();
        var h = new Horloge(today.getHours(), today.getMinutes(), today.getSeconds());
        console.log(h.afficheHorloge());
        document.getElementById("heure").textContent = h.afficheHorloge();
    }
}
let myInterval;
var myHorloge = new Horloge(20, 54,12);

function start(){
    myInterval=setInterval(myHorloge.dynamiqueHorloge, 1000);
}

function stop(){
    clearInterval(myInterval);

}