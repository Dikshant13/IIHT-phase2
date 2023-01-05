import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Animal } from "src/app/animals/animal";
import { IEvent } from "src/app/events/event";
import { IFlower } from "src/app/flowers/flower";
import { Category, IProduct } from "src/app/products/product";
import { Todo } from "../todo/todo.model";

@Injectable({
    providedIn: 'root'
})

export class InMemoryEventDbService implements InMemoryDbService{
    createDb(){

      const todos: Todo[]=[{id:'111',content:'Hello'},
      {id:'222',content:'World'}];

        const events: IEvent[]=[{
            "id":"E001",
            "name":"Dance Event",
            "date":"01/03/2023",
            "time":"6:00p.m.-9:00p.m.",
            "price":2000,
            "imageUrl":"../../assets/images/dance.png",
            "location":{
                "address":"Pune",
                "city":"Pune",
                "country":"India"
            },
            "sessions":[{
                "id":"SD001",
                "name":" Session 1",
                "presenter":"Dikshant ",
                "duration":"1 hr",
                "level":"Medium",
                "voters":["aman","sagar","krishna"]
            },{
                "id":"SD002",
                "name":"Session 2",
                "presenter":"kajal singh",
                "duration":"3 hr",
                "level":"Difficult",
                "voters":["aman","suraj","rohan"]
            }]
        },{
            "id":"E002",
            "name":"Singing Event",
            "date":"02/03/2023",
            "time":"6:00p.m.-8:00p.m.",
            "price":4000,
            "imageUrl":"../../assets/images/sing.jpg",
            "location":{
                "address":"delhi",
                "city":"delhi",
                "country":"India"
            },
            "sessions":[{
                "id":"SS001",
                "name":"singing Session 1",
                "presenter":"pradeep",
                "duration":"3 hr",
                "level":"Begineer",
                "voters":["Riya","Sanhit","Aryan"]
            },{
                "id":"SS002",
                "name":"Singing Session 2",
                "presenter":"Diya Ghosh",
                "duration":"1:30 hr",
                "level":"Difficult",
                "voters":["Sneha","Tarak","Ashish"]
            },{
                "id":"SS003",
                "name":"Singing Session 3",
                "presenter":"Rahul Das",
                "duration":"2 hr",
                "level":"Medium",
                "voters":["Priya","Tarak","Mannat"]
            }]
        },{
            "id":"E003",
            "name":"Art Event",
            "date":"03/01/2023",
            "time":"6:00p.m.-9:00p.m.",
            "price":3000,
            "imageUrl":"../../assets/images/art.jpg",
            "location":{
                "address":"Subhas Sadan",
                "city":"Pune",
                "country":"India"
            },
            "sessions":[{
                "id":"SA001",
                "name":"Art Session 1",
                "presenter":"Dikshant ",
                "duration":"2 hr",
                "level":"Medium",
                "voters":["Rina","Arun","Dilip"]
            },{
                "id":"SA002",
                "name":"Art Session 2",
                "presenter":"Mohan Ghosh",
                "duration":"1 hr",
                "level":"Difficult",
                "voters":["Animesh","Tinku","Seeta"]
            }]
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
          },
          // {
          //   id: "5",
          //   name: "Monkey",
          //   description: "Monkey it is",
          //   age: 8,
          //   imageUrl: "../../assets/images/monkey.jpg"
          // },{
          //   id: "6",
          //   name: "Elephant",
          //   description: "Elephant it is",
          //   age: 12,
          //   imageUrl: "../../assets/images/elephant.jpg"
          // },
        ];

        const products:IProduct[]=[{
            "id": "P01",
            "name": "Jeans",
            "price": 2000,
            "imageUrl": "../../assets/images/jeans.jpg",
            "category": Category.jeans,
            "quantity": 0,
            "rating": 4
        
          },{
            "id": "P02",
            "name": "Grocery",
            "price": 1000,
            "imageUrl": "../../assets/images/grocery.jpg",
            "category": Category.grocery,
            "quantity": 0,
            "rating": 4.9
        
          },{
            "id": "P03",
            "name": "Shirt",
            "price": 3000,
            "imageUrl": "../../assets/images/shirt.jpg",
            "category": Category.shirt,
            "quantity": 0,
            "rating": 4.6
        
          },{
            "id": "P04",
            "name": "Grocery",
            "price": 1500,
            "imageUrl": "../../assets/images/grocery.jpg",
            "category": Category.top,
            "quantity": 0,
            "rating": 3
        
          },{
            "id": "P05",
            "name": "Burger",
            "price": 1000,
            "imageUrl": "../../assets/images/food.jpg",
            "category": Category.food,
            "quantity": 0,
            "rating": 2
        
          },{
            "id": "P06",
            "name": "Pizza",
            "price": 2000,
            "imageUrl": "../../assets/images/food.jpg",
            "category": Category.food,
            "quantity": 0,
            "rating": 3.5
        
          },{
            "id": "P07",
            "name": "Shirt",
            "price": 3000,
            "imageUrl": "../../assets/images/shirt.jpg",
            "category": Category.shirt,
            "quantity": 0,
            "rating": 4
        
          },{
            "id": "P08",
            "name": "Jeans",
            "price": 4000,
            "imageUrl": "../../assets/images/jeans.jpg",
            "category": Category.jeans,
            "quantity": 0,
            "rating": 3.3
        
          }];

        const flowers:IFlower[]=[
          {
            "id": "1",
            "name": "Rose",
            "place": "Pune",
            "price": 250,
            "image": "../../assets/images/rose.jpg",
            "quantity": 40
          },
          {
            "id": "2",
            "name": "Daffodil",
            "place": "chennai",
            "price": 600,
            "image": "../../assets/images/daffodil.jpg",
            "quantity": 50
          },
          {
            "id": "3",
            "name": "Lily",
            "place": "Delhi",
            "price": 550,
            "image": "../../assets/images/lily.jpg",
            "quantity": 60
          },
          {
            "id": "4",
            "name": "Lotus",
            "place": "Kolkata",
            "price": 600,
            "image": "../../assets/images/lotus.jpg",
            "quantity": 100
          },
          {
            "id": "5",
            "name": "Sunflower",
            "place": "punjab",
            "price": 880,
            "image": "../../assets/images/sunflower.jpg",
            "quantity": 45
          },
          
        ]

        return {events,animals,flowers, products,todos};
    }

}