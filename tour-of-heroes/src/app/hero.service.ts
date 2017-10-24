import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import {HEROES} from './mock-heroes'
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'    

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes';
    private headers = new Headers({'Content-type': 'application/json'});
    constructor (private _http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this._http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json() as Hero[])
        .catch(this.HandleError);
    }

    private HandleError(error: any): Promise<any> {
        console.error('an error ocurred', error);
        return Promise.reject(error.message || error);
    }
    // getHeroesSlowly(): Promise<Hero[]> {
    //     return new Promise(resolve => {
    //       // Simulate server latency with 2 second delay
    //       setTimeout(() => resolve(this.getHeroes()), 2000);
    //     });
    //   }
      getHeroe(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this._http.get(url)
        .toPromise()
        .then(response => response.json() as Hero)
        .catch(this.HandleError);
      }

      update(hero: Hero): Promise<Hero> {
          const url = `${this.heroesUrl}/${hero.id}`;
          return this._http.put(url, JSON.stringify(hero), { headers: this.headers})
          .toPromise()
          .then(() => hero)
          .catch(this.HandleError);

      }
      create(name: string): Promise<Hero> {
        return this._http
        .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Hero)
        .catch(this.HandleError);
      }
      delete(id: number): Promise<void> {
          const url = `${this.heroesUrl}/${id}`;
          return this._http.delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.HandleError);
      }
}
