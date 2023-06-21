// lecture et écriture d'une variable primitive

// fonctionne pareil pour les sessions


let prenom = "Grégoire";
localStorage.setItem("joueur", prenom);
// lecture
let prenomLu = localStorage.getItem("joueur");
console.log(prenomLu);


// lecture et écriture d'un tableau de primitives
let prenomsJoueurs = ["Hugo", "Olivier", "Grégoire", "..."];
localStorage.setItem("joueurs", prenomsJoueurs);
// lecture des info
let prenomsJoueursLu = localStorage.getItem("prénomsJoueurs");
console.log(prenomsJoueurs);

// lecture et écriture d'un objet
let gardien = {prenom : "Hugo", nom : "Lioris"};
// sauvegarder l'objet
//localStorage.setItem("gardien", gardien); --> ne fonctionne pas il faut une représentation textuelle !!!
localStorage.setItem("gardien", JSON.stringify(gardien));
// lire l'objet
let gardienLu = localStorage.getItem("gardien");
console.log(gardienLu); // récupération en chaine de caractères
// lire sous forme d'objet en JSON
let objetGardienLu = JSON.parse(localStorage.getItem("gardien"));
console.log(objetGardienLu);


// lecture écriture d'un objet issue d'une classe
let Joueur = function (nom, prenom, poste){
    this.nom = nom;
    this.prenom = prenom;
    this.poste = poste;
}
Joueur.prototype.getDescription = function (){
    return this.prenom + " " + this.nom + " [" + this.poste +"]";
}

let pavard = new Joueur("PAVARD", "Benjamin","Défenseur");
console.log(pavard);
console.log(pavard.getDescription());
// sauvegarder l'objet PAVARD
localStorage.setItem("pavard", JSON.stringify(pavard));

// lire caractéritiques du joueur pavard
let pavarLu = JSON.parse(localStorage.getItem("pavard"));
console.log(pavarLu);
//console.log(pavarLu.getDescription()); // Ne fonctionne pas car pas du type joueur
// réassocier le type joueur
Object.setPrototypeOf(pavarLu, Joueur.prototype);
console.log(pavarLu);
console.log(pavarLu.getDescription());