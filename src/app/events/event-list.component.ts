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

  // animations:[
  //   trigger('enlarge',[
  //     state('start',style({
  //       width:'250px', height:'250px',
  //     })),

  //     state('end',style({
  //       height:'350px',width:'350px',
  //     })),
  //     transition('void=>start',animate('1s linear')),
  //     transition('end=>void',animate('2s ease-in'))
  //   ])
  // ]
  animations:[
    trigger('enlarge',[
      state('start',style({
        width:'300px' , height:'300px', backgroundColor:'cyan'
       })),
       state('end',style({
        height:'400px',width:'400px', backgroundColor: 'green'
      })),
      transition('start=>end',[
        animate('1s 2s')
      ]),
      transition('end=>start',[
        animate('1s 2s')
      ])

    ])
  ]



})
export class EventListComponent implements OnInit,OnDestroy{


// added
  isHovering:boolean=false;
  


  //
  sub!:Subscription;

  events:IEvent[]=[];
  isClick: any;

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