

var click = document.getElementById("clicked");
function showList(){
    var uli = document.querySelector("ul");
    if(uli.style.display == "block"){
        uli.style.display = "none";
        return;
    }
    uli.style.display = "block";
}
click.addEventListener("click", showList);