import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {


  hero = {
    name:"",
    power:0,
    image:""
  }

  heros: any[] =[];

  ajout(){
    this.heros.push( this.hero );
    this.hero = {
      name:"",
      power:0,
      image:""
    }
    console.log(this.heros);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
