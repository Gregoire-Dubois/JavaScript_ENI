import {Acheteur} from'./Acheteur';

export interface Vendable{
    meilleureEnchere : number;
    encherir(nouvelleEnchere:number , acheteur: Acheteur): void;

}