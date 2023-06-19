/*
Trier les lettres d’une phrase par ordre alphabétique. 
La phrase utilisée dans la solution est la suivante :
"une chaine avec des lettres dans un certain ordre pour donner du sens"
*/


const PHRASE = "une chaine avec des lettres dans un certain ordre pour donner du sens";
var liste = [];

for(var i = 0; i<PHRASE.length; i++){
    liste.push(PHRASE[i]);
    
}
console.log(liste.sort().toString())





