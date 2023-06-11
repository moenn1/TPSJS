
let li1 = document.createElement("li");
li1.innerHTML = "push";

let li2 = document.createElement("li");
li2.innerHTML = "Autre";


let ol = document.querySelector("ol");
ol.insertBefore(li1, ol.children[4]);
ol.appendChild(li2);
