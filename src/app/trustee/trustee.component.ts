import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trustee } from './trustee';


export class country{
  id:string='';
  name:string='';

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



export class TrusteeComponent implements OnInit{
  @ViewChild('trusteeForm',{})trusteeForm!:NgForm;
  

  countries:country[]=[
    new country("1","India"),
    new country("2","Germany"),
    new country("3","New Zealand"),
    new country("4","Japan"),
    new country("5","America"),
    new country("6","Austraila")
  ];

  trus!:Trustee;

  ngOnInit(): void {
    this.trus={
      id: "T1",
      name: "Dikshant",
      gender: "male",
      country: "India",
      passport: "D@123",
      date: new Date(),
      dependent: 4

    };

    setTimeout(()=>{
      this.trusteeForm.setValue(this.trus);
    })
    
  }

  changeCountry(){
    this.trusteeForm.controls['country'].setValue("1");
   }

   changeDate(){
     this.trusteeForm.controls['date'].setValue(new Date());
   }

  
  onSubmit(trusteeForm:any){
    console.log(trusteeForm);
  }
}
