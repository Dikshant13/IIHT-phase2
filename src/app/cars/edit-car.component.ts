import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarService } from '../shared/car.service';
import { ICar } from './car';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit,OnDestroy{

  pageTitle='Edit Car';
  addCar!:FormGroup;
  errorMessage='';

  car!:ICar | null;
  sub!:Subscription;

  constructor(private formBuilder:FormBuilder, private router:Router, private carService:CarService){}
  ngOnInit(): void {
    this.addCar=this.formBuilder.group({
      id:['',[Validators.required]],
      name:['',[Validators.required]],
      place:['',[Validators.required]],
      price:[0,[Validators.required]],
      image:[''],
      quantity:[0,[Validators.required]]
    });

    this.sub=this.carService.selectedCarChanges$.subscribe(selFlow=>this.displayCar(selFlow));


  }

  displayCar(carParam:ICar|null){
    this.car=carParam;
    if(this.car){
      this.addCar.reset();

      this.pageTitle=`Edit Car ${this.car.name}`;

      this.addCar.patchValue({
        id:this.car.id,
        name:this.car.name,
        place:this.car.place,
        price:this.car.price,
        image:this.car.image,
        quantity:this.car.quantity
      })
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  get id(){
    return this.addCar.get("id");
  }

  get name(){
    return this.addCar.get("name");
  }

  get place(){
    return this.addCar.get("place");
  }

  get price(){
    return this.addCar.get("price");
  }

  get image(){
    return this.addCar.get("image");
  }

  get quantity(){
    return this.addCar.get("quantity");
  }

  saveCar(originalCar:ICar | null):void{
    if(this.addCar.valid){
      if(this.addCar.dirty){
        const car={...originalCar,...this.addCar.value};

        this.carService.updateCar(car).subscribe(
          (resp)=>{
            this.carService.changeSelectedCar(resp);
          },
          err=>this.errorMessage=err
        )
      }

      this.router.navigate(['cars']);
    }

  }

}