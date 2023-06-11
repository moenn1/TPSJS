

const mousePosText = document.getElementById('mouse-pos');

window.addEventListener('mousemove', (event) => {
  mousePosText.textContent = '(' + event.clientX + ', ' + event.clientY + ')';
});


var nameSelect = document.getElementById('name');
var genderSelect = document.getElementById('gender');
var nameSpan = document.getElementById('nameSpan');
var genderSpan = document.getElementById('genderSpan');
window.addEventListener("change", (e)=>{
    nameSpan.textContent = nameSelect.value;
    genderSpan.textContent = genderSelect.value;
});