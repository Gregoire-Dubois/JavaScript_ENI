import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pied-de-page',
  templateUrl: './pied-de-page.component.html',
  styleUrls: ['./pied-de-page.component.css']
})
export class PiedDePageComponent implements  OnInit{

  @Input()
  nomApplication : any;

  constructor() {  }

  ngOnInit() {
  }

}
