import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarService } from '../shared/car.service';
import { ICar } from './car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit,OnDestroy{

  pageTitle='Add Car';
  addCar!:FormGroup;
  errorMessage='';

  car!:ICar | null;
  sub!:Subscription;
   
  constructor(private formBuilder:FormBuilder, private router:Router, private carService:CarService){}
  ngOnInit(): void {
    this.addCar=this.formBuilder.group({
      id:['',[Validators.required]],
      name:['',[Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      place:['',[Validators.required]],
      price:[0,[Validators.required, Validators.min(0), Validators.max(30000)]],
      image:[''],
      quantity:[0,[Validators.required]]
    });

    this.sub=this.carService.selectedCarChanges$.subscribe(selCar=>this.displayCar(selCar));


  }

  displayCar(carParam:ICar|null){
    this.car=carParam;
    if(this.car){
      this.addCar.reset();

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

        this.carService.createCar(car).subscribe(
          (resp)=>{
            this.carService.changeSelectedCar(resp);
          },
          (err)=>this.errorMessage=err

        );
      }

      this.router.navigate(['cars']);
    }

  }



}