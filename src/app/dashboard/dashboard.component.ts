import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes:Hero[]=[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService Selected hero id=${hero.id}`)
  }
  constructor(private heroService:HeroService,private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes():void {
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes.slice(1,5));
  }

}
