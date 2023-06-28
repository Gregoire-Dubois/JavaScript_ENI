import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GestionPersonnesService} from "../services/gestion-personnes.service";
import {Personne} from "../models/personne";

@Component({
  selector: 'app-saisie-persone',
  templateUrl: './saisie-persone.component.html',
  styleUrls: ['./saisie-persone.component.css']
})
export class SaisiePersoneComponent implements OnInit{
  angularForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private gestionPersonnes: GestionPersonnesService) {
    this.angularForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', [Validators.required, Validators.minLength(5)]]
    });

    this.creerFormulaire();
  }



  private creerFormulaire(){
    this.angularForm = this.formBuilder.group(
      {
        nom: ['', Validators.required],
        prenom: ['', [Validators.required, Validators.minLength(5)]]
      }
    );
  }

  champInvalide(champ:string){
    return this.angularForm.controls[champ].invalid &&
      (this.angularForm.controls[champ].dirty || this.angularForm.controls[champ].touched);
  }
  nomInvalide() {
    return this.champInvalide('nom');

  }

  prenomInvalide() {
    return this.champInvalide('prenom');

  }

  problemeValidation() {
    return this.angularForm.pristine || this.angularForm.invalid;

  }

  onEnregister() {
    if (!this.problemeValidation()){
      this.gestionPersonnes.ajouter(new Personne(this.angularForm.controls['nom'].value,
        this.angularForm.controls['prenom'].value));

      this.angularForm.reset();
    }

  }

  ngOnInit(): void {
  }
}
