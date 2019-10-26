
import { Component, OnInit } from '@angular/core';

@ Component({

selector: 'hero',

templateUrl: './hero.component.html',

styleUrls: [ './hero.component.css' ]

})

export class HeroComponent implements  OnInit {

private heroHeading: string;

private  heroText: string;


constructor() {

  this.heroHeading =  "TravelAgency";

  this.heroText =  "Experience the World with us";


}

ngOnInit() {

}

}