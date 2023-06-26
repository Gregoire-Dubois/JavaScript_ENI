import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenue sur : demo2-liaison-donnees';
  valeurInput = 'Une valeur venant du composant'; // il faut de simples quotes et non des doubles quotes
  protected readonly onclick = onclick;
  zoneSaisie: any  = 'Saisissez votre nom';

  onclickBoutton() {
    console.log("clic sur le bouton");
  }
}
