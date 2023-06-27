import {Vendable} from "./Vendable";
import {Affichable} from "./Affichable";
import {Acheteur} from "./Acheteur";

export class Oeuvre  implements Vendable, Affichable{
    annee : number;
    titre : string;
    meilleureEnchere: number;

    afficher() {
    }

    encherir(nouvelleEnchere: number, acheteur: Acheteur): void {
    }
}