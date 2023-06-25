// déclaration d'une classe en TS

class Sport
{
    public nom : string;
    private prive : string;

    constructor(nom : string, public description : string)
    {
        this.nom = nom;
        this.prive = "valeur cachée";
    }

    public afficher(): void
    {
        console.log(this.nom + " "+ this.description);
    }
}

//Créer un objet de type sport

let sport : Sport = new Sport("plongée", "sport avec de l'eau");
sport.afficher();

// Héritage

class  SportDeCompetition extends Sport
{
    constructor(nom : string, description : string, public niveau:string) {
        super(nom, description);
    }

    public afficher() {
        super.afficher();
        console.log("niveau est : " + this.niveau);
    }
}

// création d'un objet du type sport de compétition
let sportDecompetition : SportDeCompetition = new SportDeCompetition("Tennis", "sport de raquettes", "international");
sportDecompetition.afficher();

// les interfaces implémentables par des classes et interface de méthodes

// interfaces classiques
interface Jouable
{
    // propriété optionnelle avec un ?

    score? : string ;
    jouer(joueur1:string, joueur2:string):string

}

class SportJables extends Sport implements Jouable
{
    jouer(joueur1: string, joueur2: string): string {
        let vainquer = joueur1;
        if (Math.floor(Math.random()*Math.floor(2))==0){
            vainquer=joueur2;
        }
        return vainquer;
    }
}

let sportJouable = new SportJables("running", "les genoux dans le vif");
console.log("le vainqueur est : "+ sportJouable.jouer("Batman", "Superman"))

// l'interface de méthode
interface jouer {
    (joueur1:string, joueur2:string) : string
}
let jouerAuBadminton : jouer = function(joueur1:string, joueur2:string) : string{
    console.log(joueur1 + " et " + joueur2 + " jouent au badminton");
    return joueur1
}
console.log("le vainqueur est : " + jouerAuBadminton("Grégoire", "Quentin"))