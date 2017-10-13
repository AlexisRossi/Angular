import { Component } from '@angular/core';

export class Hero{
  ID : number;
  name : string;
}
const HEROES : Hero[]=[
  {ID: 11, name: 'Hulk'},
  {ID: 12, name: 'Thor'},
  {ID: 13, name: 'Spiderman'},
  {ID: 14, name: 'Iron Man'},
  {ID: 15, name: 'Vision'},
  {ID: 16, name: 'Black Widow'},
  {ID: 17, name: 'HawkEye'},
  {ID: 18, name: 'Black Phanter'},
  {ID: 19, name: 'Ant-Man'},
  {ID: 20, name: 'Captain America'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour of heroes';
  selectedHero : Hero;
  heroes = HEROES;

  onSelect(hero : Hero){
    this.selectedHero = hero;
  }




}
