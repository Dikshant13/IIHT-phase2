import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({

  selector: 'app-book',

  templateUrl: './book.component.html',

  styleUrls: ['./book.component.css']

})

export class BookComponent {

  bookForm: FormGroup;

  constructor(private formBuilder:FormBuilder) {

    //step 1 :you have to create form model

    this.bookForm=this.formBuilder.group({




         id:['1',[Validators.required,Validators.max(1)]],

         title:['Java',[Validators.required,Validators.minLength(3)]],

         date:['2022-06-04',[Validators.required]],

       

         author:this.formBuilder.group({



          name:['aman',[Validators.required]],

          email:['aman@gmail.com',[Validators.required,Validators.email]],

          //country:['',[Validators.required]]

         })

    })

  }



    get id(){

      return this.bookForm.get("id");

    }



    get title(){

      return this.bookForm.get("title");

    }



    get date(){

      return this.bookForm.get("date");



    }



   

    get name(){

      return this.bookForm.get("author")?.get("name");



    }



    get email(){

       return this.bookForm.get("author")?.get("email");

    }



    onSubmit(){

      console.log(this.bookForm.value);

    }



   



}

