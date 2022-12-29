import { Component } from '@angular/core';

Component({
  selector: 'app-trustee',
  templateUrl: './trustee.component.html',
  styleUrls: ['./trustee.component.css']
})

import { NgForm } from '@angular/forms';
import { ITrustee } from '../trusteeInteface';

export class Country{
  id!:string;
  name!:string;

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }

}

@Component({
  selector: 'app-trustee',
  templateUrl: './trustee.component.html',
  styleUrls: ['./trustee.component.css']
})
export class TrusteeComponent {


  countries: Country[]=[
    new Country("1","India"),
    new Country("2","Japan"),
    new Country("3","Russia")
  ];

   trust:ITrustee={id:0,name:'',gender:'',countryOfResidence:'', passport: '' , issuanceDate:new Date,noOfDependents:0};

   subData(form:NgForm){
    if(form.invalid){
      console.log("Invalid");
      return;
    }else{
      console.log("Success");
    }
   }
   reset(){
    this.trust.id=0;
    this.trust.name='';
    this.trust.passport='';
    this.trust.noOfDependents=0;
   }

}