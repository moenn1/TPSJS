
var close = document.getElementsByTagName('div');

for(var i=0; i<close.length;i++){
    var closeBtn = document.createElement('a');
			closeBtn.className = 'cl';
			closeBtn.appendChild(document.createTextNode('X'));

			// Ajout d'un gestionnaire d'événements de clic sur le bouton de fermeture
			closeBtn.addEventListener('click', function(e) {
				// Récupération de l'élément de paragraphe parent
				var parent = e.target.parentNode;

				// Suppression de l'élément de paragraphe parent
				parent.parentNode.removeChild(parent);
			});
			close[i].appendChild(closeBtn);
}