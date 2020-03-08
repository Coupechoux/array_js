function addSomeone() {
	let name = document.getElementById("newName").value;
	let age = document.getElementById("newAge").value;
	if(age !== "" && name !== "") {
		// Ajout des données dans le tableau data
		// Attention au format !
	}
}

function pop1() {
	// Il faut créer les éléments de la liste en fonction de data.
	// Par exemple, s'il y a deux personnes "Abc" et "Def" :
	// "<li>Abc</li><li>Def</li>"
	// document.getElementById("names_list").innerHTML = ...;

	// Même principe pour les âges
	// document.getElementById("ages_list").innerHTML = ...;
}

function pop2() {
	// Nouvelle version, qui indique entre parenthèses le nombre de personnes qui ont cet âge
	// Exemple :
	// "<li>11 (x1)</li><li>58 (x2)</li><li>58 (x2)</li>"
	// document.getElementById("names_list").innerHTML = s;

	// document.getElementById("ages_list").innerHTML = s;
}

function pop3() {
	// La même chose, mais sans répétition. Exemple :
	// "<li>11 (x1)</li><li>58 (x2)</li>"
	// document.getElementById("names_list").innerHTML = s;
	// document.getElementById("ages_list").innerHTML = s;
}

function pop4() {
	// Affichage par tranches d'âges. Exemple :
	// "<li>10-19 : 17 (x1)</li><li>30-39 : 32 (x1) 35 (x4)</li>"
	// document.getElementById("names_list").innerHTML = s;
	// document.getElementById("ages_list").innerHTML = s;
}
