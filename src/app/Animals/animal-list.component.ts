import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent {
  imageHeight=50;
  imageWidth=50;
  showImage=false;
  matchId:string='';
  

  setValue(){
    this.matchId='';
  }
  
  toggleImage(){
    this.showImage=!this.showImage;
  }

  

  list:any=[
    {id:'101',
      name:"Dog",
      briefDescription:"I m Dog",
      imageUrl:"../../assets/dog.jpg"
},
{
  id:"102",
  name:"Lion",
  briefDescription:"I am Jungle King",
  imageUrl:"../../assets/lion.jpg"
},
{
  id:"103",
  name:"Cat",
  briefDescription:"I am cute",
  imageUrl:"../../assets/cat.jpg"
}
  ]


  filteredList:any[]=this.list;

  
  filter(){
    this.filteredList=[];
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].id.includes(this.matchId)){
        this.filteredList.push(this.list[i]);
      }
    }
  }

}
