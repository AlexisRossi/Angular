import { Component, OnInit} from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [HeroService]
})

export class AppComponent implements OnInit {
  title = 'tour of heroes';
  selectedHero : Hero;
  heroes : Hero[];  

  constructor(private _heroService : HeroService){}

  ngOnInit(): void {
    this.getHeroes();
  }  
  
  onSelect(hero : Hero) : void{
    this.selectedHero = hero;
  }
  getHeroes(){
     this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}

