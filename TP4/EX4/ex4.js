

function ajouter(){
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;
    let prof = document.getElementById("prof").value;
    if(!nom || !prenom || !age || !prof){
        document.getElementById("error").style.display = "inline";
    }else{
        let tr = document.createElement("tr");
        let tdnom = document.createElement("td");
        let tdprenom = document.createElement("td");
        let tdage = document.createElement("td");
        let tdprof = document.createElement("td");
        tdnom.innerText = nom;
        tdprenom.innerText = prenom;
        tdage.innerText = age;
        tdprof.innerText = prof;
        tr.appendChild(tdnom);
        tr.appendChild(tdprenom);
        tr.appendChild(tdage);
        tr.appendChild(tdprof);
        document.getElementById("table").append(tr);
    }
}