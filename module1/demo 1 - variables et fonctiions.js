// ceci est un commentaire

/*
commentaire sur 
plusieurs lignes 

En JS il n'y a pas de main comme en java.

*/

// programme principal

var unNombre = 12; 

var sonDouble =  doubler(unNombre);


console.log("le double de %i est %i" , unNombre , sonDouble);


function doubler(unParametre)
{
return unParametre *2;

}

// Exemple 2

// programme principale 

var uneValeur = 2; // type défini dynamiquement

uneValeur = "3"; // dans ce cas il y a un changement de type en Str

console.log("uneValeur==3 => " + (uneValeur == 3)); 
console.log("uneValeur===3 => "+ (uneValeur === 3)); 

// exemple 3 

// programme principal

var uneVariableGlobale = "Bonjour"

/*
La ligne suivante va provoquer une réérence error
console.log("uneVariableNonDeclaree vaut '%s' dans le programme principal", uneVariableNonDeclaree);
*/

/*
L'erreur va se maniferster à l'exécution et non à l'écriture.
*/

traitement();

// fonction utilisée dans le programme principal
function traitement()
{
    var uneVariableLocale="coucou";
    console.log("uneVaribleGlobale vaut '%s'", uneVariableGlobale);
    console.log("uneVariableLocale vaut '%s'", uneVariableLocale);
    
    uneVariableLocaleSansVar = "au revoir";
    console.log("uneVariableLocaleSansVar vaut '%s'", uneVariableLocaleSansVar, "au niveau du programme principal");
    /*
    une variable peut etre déclarée sans mot clé va mais le PB est que la varibale devient globale
    il faut s'assureur que les variable dans les fonctions sont déclarées avec VAR sion elles deviennent blobales.
    */
}


// exemple 4 
// programme principal
var uneVariblableNonDefinie; 
console.log(uneVariblableNonDefinie)
console.log(uneVariblableNonDefinie == undefined)
