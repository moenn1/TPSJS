

function changer_style(){
    var el = document.getElementById("para");
    el.style.background = "green";
    el.style.color = "white";
    el.style.border = "black 5px dotted";
    el.style.padding = "8px";
}


function changer_style2(){
    var el = document.getElementById("para");
    if(el.classList.contains("active")){
        el.classList.remove("active");
    }else{
        el.classList.add("active");
    }
}