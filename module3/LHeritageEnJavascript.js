// déclaratin d'une classe mère

let Sport = function (nom, description){
    // Définition des attributs

    this.nom = nom || "pas de nom";
    this.description = description || "";

    //Définition des fonctions

    this.afficher = function (){console.log(`${this.nom} ${this.description}`);}
}

// Déclaration de la classe fille

let SportDeCompetition = function (nom, description, niveau){
    // appel du constructeur dela classe mère

    Sport.call(this, nom, description);

    // définition des attributs propres à la classe

    this.niveau = niveau || "";
}

// création d'un objet à partir de la classe fille

let sportDeCompetition = new SportDeCompetition("plongée apnée", "une activité qui mouille", "niveau 3");
console.log(sportDeCompetition);
sportDeCompetition.afficher();

// héritage de fonction par mutailisation (et non pas par recopie)
// ajout de méthode dans le protytipe de la classe sport

Sport.prototype.jouer = function (){
    console.log("Allez y, jouez")
}

/*
 Attention, le fait de définir le prototype après avoir créé des objets n'a pas d'effets sur les objets deja créés.
 Le prototype doit être créé avant les objets.
 */

// définition du prototype
SportDeCompetition.prototype = Object.create(Sport.prototype);

// création d'un nouveal objet à partir de la classe fille

let sportDeCompetition2 = new SportDeCompetition("rugby", "jeu de ballon ovale", "international");
console.log(sportDeCompetition2)
sportDeCompetition2.jouer();

// substituion de fonction (pour modifier une fonction
SportDeCompetition.prototype.jouer = function (){
    console.log("c'est parti !!!");
}
sportDeCompetition2.jouer();