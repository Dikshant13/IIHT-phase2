import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({

  selector: 'app-book-list',

  templateUrl: './book.component.html',

  styleUrls: ['./book.component.css']

})

export class BookListComponent implements OnInit {

  pageTitle='Book-List';

  bookForm!:FormGroup;

   constructor(private formBuilder:FormBuilder) {}

   ngOnInit(): void {

    this.bookForm=this.formBuilder.group({



         id:["1",[Validators.required,Validators.max(15)]],

         title:['The Secret',[Validators.required,Validators.minLength(6)]],

         author:this.formBuilder.group({

            author_name:['John',[Validators.required,Validators.maxLength(15),Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]],

            email:['John@gmail.com',[Validators.required,Validators.email]],

         }),

        dateofpublishing:['2021-06-05',[Validators.required]],

        publisher:this.formBuilder.array([])

    })

  }

 

    publisher():FormArray{

      return this.bookForm.get('publisher') as FormArray;

    }

    newPublisher():FormGroup{

      return this.formBuilder.group({

         co_name:'',

         co_id:'',

      })

    }



    addPublisher(){

      this.publisher().push(this.newPublisher());

    }

    removePublisher(publisherIndex:number){

      this.publisher().removeAt(publisherIndex)

    }

    get id(){

      return this.bookForm.get("id");

    }



    get title(){

      return this.bookForm.get("title");

    }



    get author_name(){

      return this.bookForm.get("author")?.get("author_name");

    }


    get email(){

       return this.bookForm.get("author")?.get("email");

    }


    get dateofpublishing(){

     return this.bookForm.get("dateofpublishing");

    }

    onSubmit(){

      console.log('Form submitted');

      console.log(this.bookForm.value);

    }

    resetForm() {

    }

}