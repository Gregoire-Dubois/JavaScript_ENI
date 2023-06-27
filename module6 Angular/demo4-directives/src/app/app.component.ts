import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo4-directives';
  informations: string[] = [
    'La France était était en quart de finale de la coupe du monde de hockey sur gazon', // commenter les lignes 11 et 12 pour voir un message alternatif apparaitre
    'Le PSG est qualifié pour les hutième de finale de la champions ligue',
    'Noel est le 25 décembre'
  ];

  classesAAppliquer = {
    'rouge' :this.informations.length<= 2,
    'vert' :this.informations.length>2
  };
}
