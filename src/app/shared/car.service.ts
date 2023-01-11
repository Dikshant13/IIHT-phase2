import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from "rxjs";
import { ICar } from "src/app/cars/car";

@Injectable({
    providedIn: 'root'
})

export class CarService{

    foundIndex:number=0;
     url="api/cars";
    cars:ICar[]=[];

    private selectedCarSource= new BehaviorSubject<ICar | null >(null);

    selectedCarChanges$=this.selectedCarSource.asObservable();

    constructor(private http:HttpClient){}

    getCars():Observable<ICar[]>{
        return this.http.get<ICar[]>(this.url).pipe(
            tap(data=>{
                this.cars=data;
            }),
            catchError(this.errorHandler)
        );
    }

    errorHandler=(err:any)=>{
        let errorMessage:string;

        if(err.error instanceof ErrorEvent)
     {

       errorMessage = `An error has occured ${err.error.message}`
     }
     else{

      errorMessage =  `Backend error code ${err.status} ${err.body.error}`;

     }
     console.log(err);
     return throwError(errorMessage);
    }

    changeSelectedCar(selectedCar:ICar | null):void{
        this.selectedCarSource.next(selectedCar);
    }

    newCar():ICar{
        return{
            "id":'',
            "name":'Car',
            "place":'Mumbai',
            "image":"\\assets\\images\\baleno.jpg",
            "price":200000,
            "quantity":0
        };
    }

    createCar(car:ICar):Observable<ICar>{
        const headers= new HttpHeaders({'Content-Type':'application/json'});

        const newCar={...car};

        return this.http.post<ICar>(this.url,newCar,{headers}).pipe(
            tap(data=>{
                this.cars.push(data);
            },
            catchError(this.errorHandler)
            )
        )
    }

    deleteCar(id:string):Observable<{}>{
        const headers= new HttpHeaders({'Content-Type':'application/json'});
        const url= `${this.url}/${id}`;

        return this.http.delete<ICar>(url,{headers}).pipe(
            tap(data=>{
                const foundIndex = this.cars.findIndex(item=>item.id===id);

                if(foundIndex > -1)
                    this.cars.splice(foundIndex,1);
            },
                catchError(this.errorHandler)
            )

        );
    }

    updateCar(car:ICar):Observable<ICar>{
        const headers= new HttpHeaders({'Content-Type':'application/json'});

        const url= `${this.url}/${car.id}`;

        return this.http.put<ICar>(url,car,{headers}).pipe(
            tap(()=>{
                const foundIndex =this.cars.findIndex(item=>item.id === car.id);
            if(foundIndex > -1){
                this.cars[foundIndex]=car;
        }
            }),
            map(()=>car),
            catchError(this.errorHandler)
        );
    }
}