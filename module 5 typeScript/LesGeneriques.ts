// Utilisation des tableaux tableaux typés en TS

let tableauType : number[] = [1,2,3];
// tableauType.push("4"); valeur incompatible, ca ne compilera pas il fautq ue des numériques
tableauType.push(4);
console.log(tableauType);


// Utilisation d'un talbeau générique en TS
let tableauGenerique : Array<number> = [9,8,7];
// tableauGenerique.push("6"); valeur incompatble il faut que des nombres
tableauGenerique.push(6);
console.log(tableauGenerique);

// Déclarer une classe générique
class Viande{
    constructor(public type : string) {
    }
}

class Legmume{
    constructor(public type : string) {
    }
}

class Poulet extends Viande{}
class Boeuf extends Viande{}

class Tomate extends Legmume{}
class Salade extends Legmume{}
class Sandwich<V extends Viande,L extends Legmume>{
    constructor(public viande : V, public legume : L) {}

    public afficher() : void{
        console.log("Sandwich " + this.viande.type + "/" + this.legume.type);
    }
}

let sandwichPouletTomate : Sandwich<Poulet, Tomate> =
    new Sandwich<Poulet, Tomate>(
        new Poulet("Poulet de Bresse"),
        new Tomate("Tomates de Plougastel-Daoulas")
);

sandwichPouletTomate.afficher();

