// création d'une classe par la définition de son constructeur

let Sport = function (nom, description){
    // définir les attributs
    this.nom = nom || "pas de nom";
    this.description = description || "";

    //description des fonctions

    this.afficher = function (){
        console.log(`${this.nom} ${this.description}`);
    }
}

// déclaration et création d'objets de type Sport :
let sport = new Sport("cyclisme", "avec de beaux paysages");
let sport2 = new Sport("foot", "jeu de balon");
let sport3 = new Sport("rugby", )

sport.afficher();
sport2.afficher();
sport3.afficher();