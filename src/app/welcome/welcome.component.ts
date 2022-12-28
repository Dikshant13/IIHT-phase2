import { Component, OnInit } from '@angular/core';
import { LoggingServie } from 'src/app/shared/logging.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  welcomeMessage:string="Hello World";
  // data: number=3;
  title:string="Welcome";
  constructor(private loggingService:LoggingServie){};


 
  thisFun(){
    this.loggingService.log("button is called");
    }

  

}
