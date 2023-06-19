/*
Mettre en majuscule la première lettre de chaque mot d’une phrase. 
La phrase utilisée dans la solution est la suivante : "une phrase sans majuscule"
*/

var sentence = "bonjour le monde";
var sentence2 = sentence.split(' ');
var motAvecMajuscule = "";
var tableau = []; 
var phraseFinale = "";

for(var i =0; i<sentence2.length; i++){
    motAvecMajuscule = sentence2[i].charAt(0).toUpperCase() + sentence2[i].substring(1);
    tableau.push(motAvecMajuscule);
}

phraseFinale = tableau.join(" ");

console.log(phraseFinale);