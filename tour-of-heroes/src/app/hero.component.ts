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
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private _heroService: HeroService, private _router: Router) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes() {
     this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
  goToDetail() {
      this._router.navigate(['/detail', this.selectedHero.id]);
    }
  add(name: string): void {
    name = name.trim();
    if (!name) {return; }
    this._heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }
  delete(hero: Hero): void {
    this._heroService
    .delete(hero.id)
    .then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {this.selectedHero = null; }
    });
  }
}

