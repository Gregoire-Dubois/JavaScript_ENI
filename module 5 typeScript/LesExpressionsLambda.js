//La fonction lambda consiste à fournir du conde dans une fonction directement en tant que paramètre
//Déclarer une fonction classique
var donneMoiUnentier = function () {
    return Math.floor(Math.random() * 10);
};
console.log(donneMoiUnentier());
// Première syntaxe d'expression lambda
var DonneMoiUnEntierV2 = function () { return Math.floor(Math.random() * 10); };
console.log(DonneMoiUnEntierV2());
// Seconde syntaxe d'expression lambda
var donneMoiUnEntierV3 = function () { return Math.floor(Math.random() * 10); };
console.log(donneMoiUnEntierV3());
// cas concret
var tableau = [1, 2, 3, 4];
//forEach attend une fonction callBack
tableau.forEach(function (value, index) {
    console.log("tableau[%i]=%i", index, value);
});
// cas concret plus concis
tableau.forEach(function (value, index, tab) { return console.log("tableau[%i]=%i", index, value); });
