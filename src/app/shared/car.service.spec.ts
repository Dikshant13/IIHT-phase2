import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { flush, getTestBed, inject, TestBed } from "@angular/core/testing";
import { ICar } from "../cars/car";
import { CarService } from "./car.service";

describe('CarService',()=>{
    let service:CarService;
    let injector: TestBed;

  let httpMock: HttpTestingController;
  let cars:ICar[]=[];

  beforeEach(()=>{
     TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
        providers:[CarService],
     });
     service=TestBed.get(CarService);
     injector = getTestBed();

    httpMock = injector.get(HttpTestingController);

    cars=[
      {
        id: "F001",
        name: "Swift",
        place: "Delhi",
        price: 800000,
        image: "../../assets/images/rose.jpg",
        quantity: 20
      },
      {
        id: "F002",
        name: "I20",
        place: "Pune",
        price: 1000000,
        image: "../../assets/images/daffodil.jpg",
        quantity: 30
      },
      {
        id: "F003",
        name: "Altroz",
        place: "Punjab",
        price: 950000,
        image: "../../assets/images/lily.jpg",
        quantity: 40
      },
      {
        id: "F004",
        name: "Kia-Sonet",
        place: "Kolkata",
        price: 1200000,
        image: "../../assets/images/lotus.jpg",
        quantity: 35
      },
      {
        id: "F005",
        name: "Punch",
        place: "Chennai",
        price: 750000,
        image: "../../assets/images/sunflower.jpg",
        quantity: 39
      },
      {
        id: "F006",
        name: "Baleno",
        place: "Hyderabad",
        price: 890000,
        image: "../../assets/images/tulip.jpg",
        quantity: 65
      }
    ];

  });
  it('should be created',()=>{
    expect(service).toBeTruthy();
  });

  it('should check getCars() method',inject([HttpTestingController,CarService],
    (httpMock:HttpTestingController,service:CarService)=>{

          service.getCars().subscribe(resp=>expect(cars).toEqual(resp));

          const mockReq = httpMock.expectOne(service.url);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(cars);

        httpMock.verify();


  }));

  it('should check createCar() method',()=>{
    let car1:ICar={
      id: "F007",
      name: "Marrygold",
      place: "Jaipur",
      price: 500,
      image: "../../assets/images/tulip.jpg",
      quantity: 90
    };
    let car2:ICar={
      id: "F008",
      name: "Tulip",
      place: "Jaipur",
      price: 400,
      image: "../../assets/images/tulip.jpg",
      quantity: 70
    };

    cars=[...cars,car1];

    //service.createFlower(flower1).subscribe(resp=>expect(JSON.parse(JSON.stringify(resp))).toEqual(JSON.parse(JSON.stringify(flower1))) );
    //service.createFlower(flower2).subscribe(resp=>expect(resp).toEqual(flower2));

    service.createCar(car1).subscribe(resp=>expect(resp).toEqual(car1));

     expect(cars.length).toEqual(7);

     const req = httpMock.expectOne(service.url);
     expect(req.request.method).toBe('POST');
     req.flush(car1);
  });

  it('should check the updateCar() method',()=>{
    let car2={
      id: "F008",
      name: "Tulip",
      place: "Jaipur",
      price: 400,
      image: "../../assets/images/tulip.jpg",
      quantity: 70
    };

    service.updateCar(car2).subscribe(resp=>expect((resp)).toEqual(car2));


       const req = httpMock.expectOne(`${service.url}/${car2.id}`);
       expect(req.request.method).toBe('PUT');
       req.flush({car2 });
  });

  it('should check the deleteCar() method',()=>{

    let car1:ICar={
      id: "F007",
      name: "Marrygold",
      place: "Jaipur",
      price: 500,
      image: "../../assets/images/tulip.jpg",
      quantity: 90
    };

    let car2={
      id: "F008",
      name: "Tulip",
      place: "Jaipur",
      price: 400,
      image: "../../assets/images/tulip.jpg",
      quantity: 70
    };

    cars=[...cars,car1,car2];

    service.deleteCar(`${car2.id}`).subscribe(resp=>console.log(resp));

    expect(cars.length).toEqual(8);

    const req = httpMock.expectOne(`${service.url}/${car2.id}`);
     expect(req.request.method).toBe('DELETE');
     req.flush(car2);
     
    

  });
});