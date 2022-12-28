import { Injectable } from "@angular/core";
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { IEvent } from "../event-bootcamp/event";


@Injectable({
    providedIn:'root'
})
export class DBServie implements InMemoryDbService {

    createDb() {
        
//      const events: IEvent[]=[
//         {
//             "id":"101",
//             "name":"BootCamp",
//             "date":"2022-12-31",
//             "time":"16-30-00",
//             "price":399,
//             "imageUrl": "#",
//             "location": {
//                 "address":"Jai Jai Ram Muhalla",
//                 "city":"Kasganj",
//                 "country":"India"
//                 },
//             "session" :[
//                 {
//                     "id":"10101",
//                     "name":"Batch 1",
//                     "presenter":"Ms. Shalu Sharma",
//                     "duration":"90",
//                     "level":"Beginner",
//                     "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
//                 },{
//                     "id":"10102",
//                     "name":"Batch 1",
//                     "presenter":"Ms. Shalu Sharma",
//                     "duration":"90",
//                     "level":"Beginner",
//                     "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
//                 }
//             ]   
//         },
//         {
//             "id":"101",
//             "name":"BootCamp",
//             "date":"2022-12-31",
//             "time":"16-30-00",
//             "price":399,
//             "imageUrl": "#",
//             "location": {
//                 "address":"Jai Jai Ram Muhalla",
//                 "city":"Kasganj",
//                 "country":"India"
//                 },
//             "session" :[
//                 {
//                     "id":"10101",
//                     "name":"Batch 1",
//                     "presenter":"Ms. Shalu Sharma",
//                     "duration":"90",
//                     "level":"Beginner",
//                     "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
//                 }
//             ]   
//         },
//         {
//             "id":"101",
//             "name":"BootCamp",
//             "date":"2022-12-31",
//             "time":"16-30-00",
//             "price":399,
//             "imageUrl": "#",
//             "location": {
//                 "address":"Jai Jai Ram Muhalla",
//                 "city":"Kasganj",
//                 "country":"India"
//                 },
//             "session" :[
//                 {
//                     "id":"10101",
//                     "name":"Batch 1",
//                     "presenter":"Ms. Shalu Sharma",
//                     "duration":"90",
//                     "level":"Beginner",
//                     "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
//                 }
//             ]   
//         }
//        ]

//        return {events};

let products=[
    {
      "id":1,
      "name":"TV",
      "price":"40000",
      "imageUrl":"../../assets/tv.jpg",
      "rating":4.7,
      "category":"Category.Electric"
      }
       ,{
      "id":2,
      "name":"Ceiling Fan",
      "price":"3500",
      "imageUrl":"../../assets/fan.jpg",
      "rating":3.7,
      "category":"Category.Electric"
    }
     ,{
      "id":3,
      "name":"OnePlus ",
      "price":"32000",
      "imageUrl":"../../assets/oneplus.jpg",
      "rating":4.5,
      "category":"Category.Electric"
    }
    ,{
      "id":4,
      "name":"Washing Machine",
      "price":"22000",
      "imageUrl":"../../assets/washingmachine.jpg",
      "rating":3.5,
      "category":"Category.Electric"
    }
     ,{
      "id":5,
      "name":"Chimney",
      "price":"40000",
      "imageUrl":"../../assets/chimney.jpeg",
      "rating":3.5,
      "category":"Category.Kitchen"
    }
  ]

return {products};
       
    }


}