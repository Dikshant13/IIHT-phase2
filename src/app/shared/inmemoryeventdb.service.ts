import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Animal } from "src/app/animals/animal";
import { IEvent } from "src/app/events/event";
import { IFlower } from "src/app/flowers/flower";
import { ICar } from "../cars/car";
import { Category, IProduct } from "src/app/products/product";
// import { Todo } from "../todo/todo.module";
import { Todo } from "../todo/todo.model";

@Injectable({
    providedIn: 'root'
})

export class InMemoryEventDbService implements InMemoryDbService{
    createDb(){
        const events: IEvent[]=[{
            "id":"1",
            "name":"Dancing Event",
            "date":"04/05/2022",
            "time":"6:00p.m.-9:00p.m.",
            "price":2200,
            "imageUrl":"../../assets/images/dance.png",
            "location":{
                "address":"shivaji nagar",
                "city":"mumbai",
                "country":"India"
            },
            "sessions":[{
                "id":"SD001",
                "name":"Dance Session 1",
                "presenter":"Dikshant",
                "duration":"1 hr",
                "level":"Medium",
                "voters":["aman","sourabh","suraj"]
            },{
                "id":"SD002",
                "name":"Dance Session 2",
                "presenter":"aman",
                "duration":"2 hr",
                "level":"Difficult",
                "voters":["Suresh","John","Monika"]
            }]
          },{
            "id":"1",
            "name":"Dancing Event",
            "date":"04/05/2022",
            "time":"6:00p.m.-9:00p.m.",
            "price":2200,
            "imageUrl":"../../assets/images/dance.png",
            "location":{
                "address":"shivaji nagar",
                "city":"mumbai",
                "country":"India"
            },
            "sessions":[{
                "id":"SD001",
                "name":"Dance Session 1",
                "presenter":"Dikshant",
                "duration":"1 hr",
                "level":"Medium",
                "voters":["aman","sourabh","suraj"]
            },{
                "id":"SD002",
                "name":"Dance Session 2",
                "presenter":"aman",
                "duration":"2 hr",
                "level":"Difficult",
                "voters":["Suresh","John","Monika"]
            }]
            
        // },{
        //   "id":"1",
        //     "name":"Dancing Event",
        //     "date":"04/05/2022",
        //     "time":"6:00p.m.-9:00p.m.",
        //     "price":2200,
        //     "imageUrl":"../../assets/images/dance.png",
        //     "location":{
        //         "address":"shivaji nagar",
        //         "city":"mumbai",
        //         "country":"India"
        //     },
        //     "sessions":[{
        //         "id":"SD001",
        //         "name":"Dance Session 1",
        //         "presenter":"Dikshant",
        //         "duration":"1 hr",
        //         "level":"Medium",
        //         "voters":["aman","sourabh","suraj"]
        //     },{
        //         "id":"SD002",
        //         "name":"Dance Session 2",
        //         "presenter":"aman",
        //         "duration":"2 hr",
        //         "level":"Difficult",
        //         "voters":["Suresh","John","Monika"]
        //     }]
        //     "id":"2",
        //     "name":"Singing Event",
        //     "date":"02/01/2023",
        //     "time":"6:00p.m.-8:00p.m.",
        //     "price":4000,
        //     "imageUrl":"../../assets/images/sing.jpg",
        //     "location":{
        //         "address":"aman",
        //         "city":"Kolkata",
        //         "country":"India"
        //     },
        //     "sessions":[{
        //         "id":"SS001",
        //         "name":"Singing Session 1",
        //         "presenter":"Snehasree Majumder",
        //         "duration":"3 hr",
        //         "level":"Begineer",
        //         "voters":["Riya","Sanhit","Aryan"]
        //     },{
        //         "id":"SS002",
        //         "name":"Singing Session 2",
        //         "presenter":"Diya Ghosh",
        //         "duration":"1:30 hr",
        //         "level":"Difficult",
        //         "voters":["Sneha","Tarak","Ashish"]
        //     },{
        //         "id":"SS003",
        //         "name":"Singing Session 3",
        //         "presenter":"Rahul Das",
        //         "duration":"2 hr",
        //         "level":"Medium",
        //         "voters":["Priya","Tarak","Mannat"]
        //     }]
        },{
          "id":"1",
            "name":"Dancing Event",
            "date":"04/05/2022",
            "time":"6:00p.m.-9:00p.m.",
            "price":2200,
            "imageUrl":"../../assets/images/dance.png",
            "location":{
                "address":"shivaji nagar",
                "city":"mumbai",
                "country":"India"
            },
            "sessions":[{
                "id":"SD001",
                "name":"Dance Session 1",
                "presenter":"Dikshant",
                "duration":"1 hr",
                "level":"Medium",
                "voters":["aman","sourabh","suraj"]
            },{
                "id":"SD002",
                "name":"Dance Session 2",
                "presenter":"aman",
                "duration":"2 hr",
                "level":"Difficult",
                "voters":["Suresh","John","Monika"]
            }]
        //     "id":"3",
        //     "name":"Art Event",
        //     "date":"03/01/2023",
        //     "time":"6:00p.m.-9:00p.m.",
        //     "price":3000,
        //     "imageUrl":"../../assets/images/art.jpg",
        //     "location":{
        //         "address":"Subhas Sadan",
        //         "city":"Pune",
        //         "country":"India"
        //     },
        //     "sessions":[{
        //         "id":"SA001",
        //         "name":"Art Session 1",
        //         "presenter":"Dikshant ",
        //         "duration":"2 hr",
        //         "level":"Medium",
        //         "voters":["Rina","Arun","Dilip"]
        //     },{
        //         "id":"SA002",
        //         "name":"Art Session 2",
        //         "presenter":"Mohan Ghosh",
        //         "duration":"1 hr",
        //         "level":"Difficult",
        //         "voters":["Animesh","Tinku","Seeta"]
        //     }]
        }];

        const animals:Animal[]=[{
            id: "1",
            name: "Lion",
            description: "King of Jungle",
            age: 10,
            imageUrl: "../../assets/images/lion.jpg"
          },{
            id: "2",
            name: "Tiger",
            description: "Tiger it is",
            age: 6,
            imageUrl: "../../assets/images/tiger.jpg"
          },{
            id: "3",
            name: "Horse",
            description: "Horse it is",
            age: 5,
            imageUrl: "../../assets/images/horse.jpg"
          },{
            id: "4",
            name: "Snake",
            description: "Snake it is",
            age: 2,
            imageUrl: "../../assets/images/snake.jpg"
          },{
            id: "5",
            name: "Monkey",
            description: "Monkey it is",
            age: 8,
            imageUrl: "../../assets/images/monkey.jpg"
          },{
            id: "6",
            name: "Elephant",
            description: "Elephant it is",
            age: 12,
            imageUrl: "../../assets/images/elephant.jpg"
          },
        ];

        const products:IProduct[]=[{
            "id": 100,
            "name": "Product1",
            "price": 2000,
            "image": "../../assets/images/jeans.jpg",
            "category": Category.jeans,
            "qty": 0,
            "rating": 4
        
          },{
            "id": 101,
            "name": "Product2",
            "price": 1000,
            "image": "../../assets/images/grocery.jpg",
            "category": Category.grocery,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 102,
            "name": "Product3",
            "price": 3000,
            "image": "../../assets/images/shirt.jpg",
            "category": Category.shirt,
            "qty": 0,
            "rating": 5
        
          },{
            "id": 103,
            "name": "Product4",
            "price": 1500,
            "image": "../../assets/images/top.jpg",
            "category": Category.top,
            "qty": 0,
            "rating": 3
        
          },{
            "id": 104,
            "name": "Product5",
            "price": 1000,
            "image": "../../assets/images/food.jpg",
            "category": Category.food,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 105,
            "name": "Product6",
            "price": 2000,
            "image": "../../assets/images/food.jpg",
            "category": Category.food,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 106,
            "name": "Product7",
            "price": 3000,
            "image": "../../assets/images/shirt.jpg",
            "category": Category.shirt,
            "qty": 0,
            "rating": 5
        
          },{
            "id": 107,
            "name": "Product8",
            "price": 4000,
            "image": "../../assets/images/jeans.jpg",
            "category": Category.jeans,
            "qty": 0,
            "rating": 4
        
          }];

        const flowers:IFlower[]=[
          {
            "id": "F001",
            "name": "Rose",
            "place": "Kolkata",
            "price": 200,
            "image": "../../assets/images/rose.jpg",
            "quantity": 50
          },
          {
            "id": "F002",
            "name": "Daffodil",
            "place": "Pune",
            "price": 850,
            "image": "../../assets/images/daffodil.jpg",
            "quantity": 30
          },
          {
            "id": "F003",
            "name": "Lily",
            "place": "Delhi",
            "price": 500,
            "image": "../../assets/images/lily.jpg",
            "quantity": 60
          },
          {
            "id": "F004",
            "name": "Lotus",
            "place": "Kolkata",
            "price": 700,
            "image": "../../assets/images/lotus.jpg",
            "quantity": 100
          },
          {
            "id": "F005",
            "name": "Sunflower",
            "place": "Ahmedabad",
            "price": 900,
            "image": "../../assets/images/sunflower.jpg",
            "quantity": 90
          },
          {
            "id": "F006",
            "name": "Tulip",
            "place": "Jaipur",
            "price": 400,
            "image": "../../assets/images/tulip.jpg",
            "quantity": 80
          }
        ];

        const todos:Todo[]=[
          {
            "id":"T001",
            "content":"Todo 1"
          },
          {
            "id":"T002",
            "content":"Todo 2"
          }

        ]









        const cars:ICar[]=[
          {
            id: "C1",
            name: " Maruti Swift",
            place: "Delhi",
            price: 800000,
            image: "../../assets/images/swift.jpg",
            quantity: 20
          },
          {
            id: "C2",
            name: " Hyndai I20",
            place: "Pune",
            price: 1000000,
            image: "../../assets/images/i20.png",
            quantity: 30
          },
          {
            id: "C3",
            name: " Tata Altroz",
            place: "Punjab",
            price: 950000,
            image: "../../assets/images/altroz.jpg",
            quantity: 40
          },
          {
            id: "C4",
            name: "Kia-Sonet",
            place: "Kolkata",
            price: 1200000,
            image: "../../assets/images/sonet.jpg",
            quantity: 35
          },
          {
            id: "C5",
            name: " Tata Punch",
            place: "Chennai",
            price: 750000,
            image: "../../assets/images/punch.jpg",
            quantity: 39
          },
          {
            id: "C6",
            name: " Maruti Baleno",
            place: "Hyderabad",
            price: 890000,
            image: "../../assets/images/baleno.jpg",
            quantity: 65
          }
        ];

        
        

        return {events,animals,flowers,todos, products,cars};
    }

}