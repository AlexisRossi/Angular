import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import {HEROES} from './mock-heroes'
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'    

@Injectable()
export class HeroService{
    private heroesUrl = 'api/heroes';

    constructor (private _http : Http) {}
    getHeroes():Promise<Hero[]>{
        return this._http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json().data as Hero[])
        .catch(this.HandleError);
    }

    private HandleError(error : any): Promise<any>{
        console.error("an error ocurred",error);
        return Promise.reject(error.message || error);
    }
    
    getHeroesSlowly(): Promise<Hero[]> {    
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 2000);
        });
      }
      getHeroe(id:number){
          return this.getHeroes().then(heroes => heroes.find(hero => hero.ID === id));
      }

}