import { Injectable } from "@angular/core";
import { Animal } from "./animal";

@Injectable({
    providedIn: 'root'
})
export class AnimalService{

    public getAnimals(){
        let animals:Animal[]=[{
            id: "1",
            name: "Lion",
            description: "The lion ( Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane. It is a social species, forming groups called prides.",
            age: 10,
            imageUrl: "../../assets/images/lion.jpg"
          },{
            id: "2",
            name: "Tiger",
            description: "The tiger has adapted to a great variety of environments, from the Siberian taiga, where nights can be as cold as −40 °C (−40 °F), to the mangrove swamps of the Sundarbans, where the temperatures reach more than 40 °C (104 °F). Tigers haunt the ruins of buildings such as courts and temples and are at home in habitats ranging from dry grassland to rainforest. ",
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
          },
        ]

        return animals;
    }

    getAnimalById(id:string){

        let animals:Animal[]=this.getAnimals();
        return animals.find(a=>a.id==id);
      }

}