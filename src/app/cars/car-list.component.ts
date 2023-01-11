
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarService } from '../shared/car.service';
import { ICar } from './car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent  implements OnInit, OnDestroy{
  sub!:Subscription;
  cars:ICar[]=[];
  errorMessage:string='';
  href:string='';
  show:boolean=false;
  testCars!:ICar;

  constructor(private carService:CarService, private router:Router){}


  ngOnInit(): void {
    this.href=this.router.url;

    this.sub=this.carService.getCars().subscribe(
      (resp)=>{
        this.cars=resp;
      },
      err=>{
        this.errorMessage=err;
        console.log(err);
      }
    )


    
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  newCar():void{
    this.carService.changeSelectedCar(this.carService.newCar());

    this.router.navigate(['addCar']);
  }

  carSelected(car:ICar):void{
    this.carService.changeSelectedCar(car);

    this.router.navigate([this.href,'editCar']);
  }

  deleteProduct(car: ICar):void{
    if(car && car.id){
      if(confirm(`Are You sure to delete ${car.name} details`)){
        this.carService.deleteCar(car.id).subscribe(
          (resp)=>this.carService.changeSelectedCar(null),
          err=>this.errorMessage=err
        );
      }else{
        this.carService.changeSelectedCar(null);
      }
    }
  }

}
