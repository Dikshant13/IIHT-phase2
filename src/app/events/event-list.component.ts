import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/shared/event.service';
import { IEvent } from './event';
import { State } from '@ngrx/store';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],

  animations:[
    trigger('enlarge',[
      state('start',style({
        width:'250px', height:'250px',
      })),

      state('end',style({
        height:'350px',width:'350px',
      })),
      transition('void=>start',animate('1s linear')),
      transition('end=>void',animate('2s ease-in'))
    ])
  ]



})
export class EventListComponent implements OnInit,OnDestroy{


// added
  isHovering:boolean=false;


  //
  sub!:Subscription;

  events:IEvent[]=[];

  constructor(private eventService:EventService){}
  ngOnInit(): void {
    this.sub=this.eventService.getEvents().subscribe(
      (response)=>{
        
        this.events=response;
        
      },(err)=>{console.log(err);}
    )

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }




  applyAnimation($event:any){
    this.isHovering=!this.isHovering;
  }

}
