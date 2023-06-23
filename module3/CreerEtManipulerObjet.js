// Créer un objet

let sport = {nom : "squash", description : "jeu de rauqettes"};

console.log(sport);
console.log(sport.nom)

sport.nom="Squach";
console.log(sport.nom)

// Un objet est une structure dynamique

sport.nombreJoueurs= 2;
console.log(sport.nombreJoueurs);

// un objet peut contenir des fonctions mais c'est pas conseillé
//this fait ref à l'objet manipulé

let sport2 = {nom : "Badminton", description : "ça vole",
    afficher:function ()
    {
     console.log(`${this.nom} ${this.description}`);
    }
};

sport2.afficher();

// créer des tableaux d'objets

let sports = [sport, sport2, {nom: "running", description :"c'est du cardio"}, {nom : "plongée sous marine", description: "c'est relaxe"}];
console.log(sports);
sports.push({nom : "tennis", description: "ça claque"});
console.log(sports);

// un objet peut référencer un tableau

sport.qualificatifs=["rapide", "fatigant", "trop chouet"];

console.log(sport);