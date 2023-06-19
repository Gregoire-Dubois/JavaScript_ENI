/*

À l'aide de la méthode Math.random, écrire un programme qui s'arrête lorsque tous les
nombres de la plage [0;100[ sont tirés au sort.

Indiquer le nombre de tirages nécessaires.

- définir intérateur
- generer nombre
- parcourir tableau
- si nouveau nombre pas dans tableau faire insert
- si nouveau nombre dans tableau faire nouveau nombre
- dans tous les itérateur ++

*/

var nombresValidés = 0;
const MAX = 100; 
var tentatives = 0;
var listeNombres=[];

// boucler tant que le nombre de chiffres dans le array est inférieur à 100
while(nombresValidés < 100){
    //générer un nombre aléatoire
    var leNombreAleatoire = createRandomNumber();
    
    if(listeNombres.length === 0){
        listeNombres.push(leNombreAleatoire);      
    }else{
        var nombreExist = 0; 

        for(var i = 0; i < listeNombres.length; i++){
            if(leNombreAleatoire == listeNombres[i]){
                nombreExist++;
                
                
            }
        }
        if(nombreExist === 0){
            listeNombres.push(leNombreAleatoire)
            nombresValidés++;
        }
    }
    tentatives++;
    
}
console.log(listeNombres);
console.log(tentatives);

// définition de la foncton de génération de nombre aléatoires
function createRandomNumber(){
    var nombreAlea = Math.round(Math.random() * (100 - 0) + 0);
    return nombreAlea;
}

