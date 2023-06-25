// Déclaration de variable en TS

let unBooleen : boolean = true;
let age = 37;
let profession : string = "développeur";

// La syntaxe JS est possible mais on ne respeceta pas les préconisations de TS

let uneVariable = 10;

// en cas de types changeant il est préférable d'utiliser le type any

let uneAutreVariable : any = 10;
uneAutreVariable = "dix";

// les énumérés

enum Etablissement{Maternelle, Primaire, College, Lycee, Faculte};
let etablissement : Etablissement = Etablissement.College;

//aficher les  variables
console.log(unBooleen);
console.log(age);
console.log(profession);
console.log(uneVariable);
console.log(uneAutreVariable);
console.log(etablissement);