

var body = document.body;
var div = document.createElement('div');
div.id = "divEx4";
var form = document.createElement('form');
form.enctype = "multipart/form-data";
form.method = "post";
form.action = "upload.php";
var fieldset = document.createElement('fieldset');
var legend = document.createElement('legend');
legend.innerText = "Uploader une image";
var div2 = document.createElement('div');
div2.style.textAlign = "center";
var label = document.createElement('label');
label.htmlFor = "inputUpload";
label.innerText = "Image à uploader :";
var input = document.createElement('input');
input.type = "file";
input.name = "inputUpload";
input.id = "inputUpload";
var br = document.createElement('br');
var input2 = document.createElement('input');
input2.type = "submit";
input2.value = "Envoyer";
div2.appendChild(label);
div2.appendChild(input);
div2.appendChild(br);
div2.appendChild(input2);
fieldset.appendChild(legend);
fieldset.appendChild(div2);
form.appendChild(fieldset);
div.appendChild(form);
body.appendChild(div);

