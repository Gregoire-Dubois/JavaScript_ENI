import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionsDatasService {

  private toutesLesSaisies: string[];
  public emmetteurDesSaisies : EventEmitter<string[]>;

  constructor() {
    this.toutesLesSaisies=[];
    this.emmetteurDesSaisies=new EventEmitter<string[]>();
  }

  private notifier(){
    this.emmetteurDesSaisies.emit(this.toutesLesSaisies.slice());
  }

  public ajouter(saisie : string){
    if (saisie){
      saisie="_" + saisie.toUpperCase() + "_";
      this.toutesLesSaisies.push(saisie);
      this.notifier();
    }
  }

}
