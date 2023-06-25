//La fonction lambda consiste à fournir du conde dans une fonction directement en tant que paramètre

//Déclarer une fonction classique

let donneMoiUnentier = function (){
    return Math.floor(Math.random()*10);
}

console.log(donneMoiUnentier())

// Première syntaxe d'expression lambda

let DonneMoiUnEntierV2 = () => {return Math.floor(Math.random()*10);};
console.log(DonneMoiUnEntierV2());

// Seconde syntaxe d'expression lambda
let donneMoiUnEntierV3 = () => Math.floor(Math.random()*10);
console.log(donneMoiUnEntierV3());

// cas concret
let tableau : Array<number> =[1,2,3,4];
//forEach attend une fonction callBack
tableau.forEach(function (value, index){
    console.log("tableau[%i]=%i", index, value);
});

// cas concret plus concis
tableau.forEach((value, index, tab)=>console.log("tableau[%i]=%i", index, value))
