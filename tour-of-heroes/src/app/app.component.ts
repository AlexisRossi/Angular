import { Component } from '@angular/core';

export class Hero{
  ID : number;
  name : string;
}


@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>ID: </label>{{hero.ID}}</div>
  <div>
  <label>name: </label>
  <input [(ngModel)]= "hero.name" placeholder="name">
  </div>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour of heroes';
  hero : Hero = {
      ID: 1,
      name: 'Thor' 
  };
}
