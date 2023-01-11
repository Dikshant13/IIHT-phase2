import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../user/auth.service'
import { AuthService } from '../users/authservice';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor( private router:Router,private authservice:AuthService){

    console.log('menu constructor')
  }

  get isLoggedIn():boolean{
     return this.authservice.isLoggedIn();
  }

  get userName():string{
  if(this.authservice.currentUser)
  return this.authservice.currentUser?.username;
  return '';
  }
  
    logOut():void{
      console.log("logout")
      //this should also use the authserviceto logout the current user
      //you can route to some url 
      this.authservice.logOut();
      this.router.navigate(['/home']);
      // change
    }
}