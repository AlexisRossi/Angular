import { Component, OnInit} from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { Router } from "@angular/router";

@Component({
  selector: 'heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroesComponent implements OnInit {
  title = 'tour of heroes';
  selectedHero : Hero; 
  heroes : Hero[];  

  constructor(private _heroService : HeroService, private _router : Router){}

  ngOnInit(): void {
    this.getHeroes();
  }  
  
  onSelect(hero : Hero) : void{
    this.selectedHero = hero;
  }
  getHeroes(){
     this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    goToDetail(){
      this._router.navigate(['/detail', this.selectedHero.ID]);
    }
}

