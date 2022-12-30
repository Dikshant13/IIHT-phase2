import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookListComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { TrusteeComponent } from './trustee/trustee.component';

const routes: Routes = [

  {
    path:'',component:HomeComponent,pathMatch:'full',
  },
  {
    path:'book',component:BookListComponent
  },
  {
    path:'trustee',component:TrusteeComponent
  },
  
  {
    path:'about-us',component:AboutUsComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
