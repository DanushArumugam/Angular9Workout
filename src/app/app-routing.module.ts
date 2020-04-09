import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import { Child1Component } from './child1/child1.component';

const routes:Routes=[
  {path:'heroes' , component:HeroesComponent},
  {path:'dashboard' , component:DashboardComponent},
  //When the app starts,app navigate to the dashboard automatically
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'detail/:id',component:HeroDetailComponent},
  {path:'child1',component:Child1Component}
];

@NgModule({

  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  //Why this two are not needed
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
})
export class AppRoutingModule { }
