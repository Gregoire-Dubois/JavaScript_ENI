import {Component, OnInit} from '@angular/core';
import {GestionsDatasService} from "../services/gestions-datas.service";

@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.css']
})
export class SaisieComponent implements OnInit{

  saisie: string;
  constructor(private gestionDatasServices : GestionsDatasService) {
    this.saisie="";
  }

  ngOnInit(){}

  onValiderSaisie(){
    this.gestionDatasServices.ajouter(this.saisie);

  }
}
