// Déclaration de variable en TS
var unBooleen = true;
var age = 37;
var profession = "développeur";
// La syntaxe JS est possible mais on ne respeceta pas les préconisations de TS
var uneVariable = 10;
// en cas de types changeant il est préférable d'utiliser le type any
var uneAutreVariable = 10;
uneAutreVariable = "dix";
// les énumérés
var Etablissement;
(function (Etablissement) {
    Etablissement[Etablissement["Maternelle"] = 0] = "Maternelle";
    Etablissement[Etablissement["Primaire"] = 1] = "Primaire";
    Etablissement[Etablissement["College"] = 2] = "College";
    Etablissement[Etablissement["Lycee"] = 3] = "Lycee";
    Etablissement[Etablissement["Faculte"] = 4] = "Faculte";
})(Etablissement || (Etablissement = {}));
;
var etablissement = Etablissement.College;
//aficher les  variables
console.log(unBooleen);
console.log(age);
console.log(profession);
console.log(uneVariable);
console.log(uneAutreVariable);
console.log(etablissement);
