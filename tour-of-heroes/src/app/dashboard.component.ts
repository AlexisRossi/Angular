import { Component, OnInit } from "@angular/core";
import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
    selector : 'my-dashboard',
    templateUrl:'./dashboard.component.html' 
})
export class DashboardComponent implements OnInit{

    heroes:Hero[] = [];
    constructor(private _heroService : HeroService){}

    ngOnInit(): void {
     this._heroService.getHeroes().then(hero => this.heroes = hero.slice(1,4))
    }
}