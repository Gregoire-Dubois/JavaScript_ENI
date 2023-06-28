import {Component, OnDestroy, OnInit} from '@angular/core';
import {Personne} from "../models/personne";
import {GestionPersonnesService} from "../services/gestion-personnes.service";

@Component({
  selector: 'app-affichage-personnes',
  templateUrl: './affichage-personnes.component.html',
  styleUrls: ['./affichage-personnes.component.css']
})
export class AffichagePersonnesComponent implements OnInit, OnDestroy{

  personnes : Personne[] =[];

  constructor(private gestionPersonne: GestionPersonnesService) {

  }

  ngOnInit(): void {
    this.gestionPersonne.emmeteurPersonnes.subscribe( (value) => this.personnes = value);
  }

  ngOnDestroy(): void {
    this.gestionPersonne.emmeteurPersonnes.unsubscribe();
  }


}
