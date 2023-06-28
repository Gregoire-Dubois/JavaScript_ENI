export class Personne {

  constructor(public nom : string, public prenom : string) { }

  toString(){
    return this.nom + " " + this.prenom;
  }
}
