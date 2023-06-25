/*
Le module va servir a découper le programme en fichiers / classe
 */

// Création d'un module

module BusinessObject
{
    export class Sport
    {
        constructor(public nom : string, public description : string) {}

        public afficher(): void{
            console.log(this.nom + " " + this.description);
        }
    }
}

let sportModule : BusinessObject.Sport = new BusinessObject.Sport("Football", "Sport de ballon");
sportModule.afficher();

import BO = BusinessObject;
let sportAlias = BO.Sport;

