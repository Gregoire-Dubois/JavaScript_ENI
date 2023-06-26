// déclaration d'une classe en TS
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sport = /** @class */ (function () {
    function Sport(nom, description) {
        this.description = description;
        this.nom = nom;
        this.prive = "valeur cachée";
    }
    Sport.prototype.afficher = function () {
        console.log(this.nom + " " + this.description);
    };
    return Sport;
}());
//Créer un objet de type sport
var sport = new Sport("plongée", "sport avec de l'eau");
sport.afficher();
// Héritage
var SportDeCompetition = /** @class */ (function (_super) {
    __extends(SportDeCompetition, _super);
    function SportDeCompetition(nom, description, niveau) {
        var _this = _super.call(this, nom, description) || this;
        _this.niveau = niveau;
        return _this;
    }
    SportDeCompetition.prototype.afficher = function () {
        _super.prototype.afficher.call(this);
        console.log("niveau est : " + this.niveau);
    };
    return SportDeCompetition;
}(Sport));
// création d'un objet du type sport de compétition
var sportDecompetition = new SportDeCompetition("Tennis", "sport de raquettes", "international");
sportDecompetition.afficher();
var SportJables = /** @class */ (function (_super) {
    __extends(SportJables, _super);
    function SportJables() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SportJables.prototype.jouer = function (joueur1, joueur2) {
        var vainquer = joueur1;
        if (Math.floor(Math.random() * Math.floor(2)) == 0) {
            vainquer = joueur2;
        }
        return vainquer;
    };
    return SportJables;
}(Sport));
var sportJouable = new SportJables("running", "les genoux dans le vif");
console.log("le vainqueur est : " + sportJouable.jouer("Batman", "Superman"));
var jouerAuBadminton = function (joueur1, joueur2) {
    console.log(joueur1 + " et " + joueur2 + " jouent au badminton");
    return joueur1;
};
console.log("le vainqueur est : " + jouerAuBadminton("Grégoire", "Quentin"));
