function addSomeone() {
	let name = document.getElementById("newName").value;
	let age = parseInt(document.getElementById("newAge").value);
	if(age !== "" && name !== "") {
		// Je crée la ligne [name, age], puis je l'ajoute à mon tableau data.
		data.push([name,age]);
	}
}

function pop1() {
	let s_names = "";
	for(let i = 0 ; i < data.length ; i++) {
		// data[i] est la ligne numéro i du tableau data, qui est elle-même un tableau.
		// Par exemple, data[2] est ["Aurélia",29]. Donc si je veux récupérer le nom, je dois dire :
		// "l'élément numéro 0 de la ligne numéro 2" ; soit : data[2][0].
		s_names += "<li>" + data[i][0] + "</li>";
	}
	document.getElementById("names_list").innerHTML = s_names;

	let s_ages = "";
	for(let i = 0 ; i < data.length ; i++) {
		s_ages += "<li>" + data[i][1] + "</li>";
	}
	document.getElementById("ages_list").innerHTML = s_ages;
}

// Comme la partie qui concerne les noms sera toujours la même, je peux alléger un peu le code en la mettant dans une fonction à part, que je pourrai utiliser dans mes 4 fonctions "pop".
function populate_names() {
	let s_names = "";
	for(let i = 0 ; i < data.length ; i++) {
		s_names += "<li>" + data[i][0] + "</li>";
	}
	document.getElementById("names_list").innerHTML = s_names;
}

function pop2() {
	populate_names();

	let s_ages = "";
	for(let i = 0 ; i < data.length ; i++) {
		// Je suis en train de regarder la ligne numéro i, et je me demande combien de fois l'âge de cette ligne apparaît dans toutes les données.
		// Je vais regarder toutes les lignes pour compter.
		let compteur = 0;
		for(let j = 0 ; j < data.length ; j++) {
			// Est-ce que l'âge de la ligne j est le même que celui de la ligne i ?
			if(data[j][1] === data[i][1]) {
				compteur++;
			}
		}
		
		// Le compteur contient la bonne valeur, j'ai donc toutes les infos nécessaires pour créer mon <li>.
		s_ages += "<li>" + data[i][1] + " (x" + compteur + ")</li>";
	}
	document.getElementById("ages_list").innerHTML = s_ages;
}

function pop3() {
	populate_names();
	
	// Je vais créer un tableau qui va contenir le nombre d'occurences de chaque âge entre 0 et 99.
	// Je vais construire et interpréter ce tableau comme ceci :
	// La case numéro i de mon tableau contient le nombre de personnes qui ont i ans.
	// Par exemple, [0, 0, 0, 0, 2, 0, 0, 0, 0, 7, 0, 0, 1, 0, ..., 0] veut dire que :
	// 0 personne a 0 an (case numéro 0 du tableau)
	// 0 personne a 1 an (case numéro 1 du tableau)
	// 2 personnes ont 4 ans (case numéro 4 du tableau)
	// 7 personnes ont 9 ans (case numéro 9 du tableau)
	let occurences = [];
	for(let i = 0 ; i < 100 ; i++) {
		occurences.push(0);
		// Je fais 100 fois l'action de rajouter un 0 dans mon tableau (qui était vide au départ).
	}
	
	for(let i = 0 ; i < data.length ; i++) {
		let ageDeLaLigneI = data[i][1]; // (On pourrait l'utiliser directement dans la suite du code.)
		occurences[ageDeLaLigneI]++; // Je compte une personne de plus qui a cet âge.
	}
	
	// Maintenant, je n'ai plus qu'à regarder tous les âges possibles de 0 à 99 et à créer un <li> si besoin.
	s_ages = "";
	for(let age = 0 ; age < 100 ; age++) {
		if(occurences[age] > 0) {
			s_ages +=  "<li>" + age + " (x" + occurences[age] + ")</li>";
		}
	}
	document.getElementById("ages_list").innerHTML = s_ages;
}

function pop4() {
	populate_names();
	
	// Je vais partir du même principe que dans la fonction précédente (tableau des occurences des âges), et regarder les âges par groupe de 10. D'abord les 10 premiers (donc de 0 à 9), puis les 10 suivants (de 10 à 19), etc.
	// Si, dans une tranche d'âge, il y a au moins une personne, je vais créer un <li>.
	
	let occurences = [];
	for(let i = 0 ; i < 100 ; i++) {
		occurences.push(0);
		// Je fais 100 fois l'action de rajouter un 0 dans mon tableau (qui était vide au départ).
	}
	
	for(let i = 0 ; i < data.length ; i++) {
		let ageDeLaLigneI = data[i][1];
		occurences[ageDeLaLigneI]++;
	}
	// Pareil jusque là
	
	s_ages = "";
	
	// Je compte par dizaine
	for(let dizaine = 0 ; dizaine < 10 ; dizaine++) {
		// Par exemple, quand on est au tour de boucle dizaine=2, je m'intéresse à tous les âges entre 20 et 29.
		
		// Je vais créer la chaîne de caractères qui correspond aux âges de cette dizaine.
		s_ages_ten = "";
		
		// Pour avoir tous les âges de la dizaine, il faut que je rajoute les unités.
		for(let unite = 0 ; unite < 10 ; unite++) {
			// Ici, j'ai un nombre de dizaines et un nombre d'unités, donc autrement dit, j'ai un âge.
			let age = dizaine*10 + unite; // Par exemple, dizaine=2 et unite=5 me donne 25.
			// Si des personnes ont cet âge, je l'indique dans ma chaîne de caractères.
			if(occurences[age] > 0) {
				s_ages_ten += " " + age + " (x" + occurences[age] + ")";
			}
		}
		
		// J'ai fini de regarder ma dizaine.
		// Est-ce que j'ai trouvé quelqu'un dedans ?
		if(s_ages_ten !== "") {
			// Si oui, j'ajoute la ligne que je viens de calculer (en lui ajoutant les balises <li>, et le texte de la dizaine, comme 20-29 par exemple.
			s_ages += "<li>" + (dizaine*10) + "-" + (dizaine*10+9) + " :" + s_ages_ten + "</li>";
		}
		document.getElementById("ages_list").innerHTML = s_ages;
	}
}
