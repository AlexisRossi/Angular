import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './hero.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';     



const routes : Routes =[
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
      },
      {
        path:'heroes',
        component: HeroesComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'detail/:ID',
        component: HeroDetailComponent         
      }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{} 

