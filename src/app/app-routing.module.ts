import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailsComponent } from './animals/animal-details.component';
import { AnimalListComponent } from './animals/animal-list.component';
import { AppaboutComponent } from './appabout/appabout.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { BookComponent } from './book/book.component';
import { CardListComponent } from './cards/cardlist.component';
import { ContactComponent } from './contact/contact.component';
import { EventListComponent } from './events/event-list.component';
import { AddFlowerComponent } from './flowers/add-flower.component';
import { EditFlowerComponent } from './flowers/edit-flower.component';
import { FlowerListComponent } from './flowers/flower-list.component';
import { ProductAddComponent } from './products/product-add.component';
import { ProductListComponent } from './products/product-list.component';
// import { PlaceListComponent } from './tourism/place-list.component';
import { AuthGuard } from './users/auth-guard.service';
import { LoginComponent } from './users/login.component';
import { WelcomeComponent } from './welcome/welcome.component';


// car imports
import { AddCarComponent } from './cars/add-car.component';
import { EditCarComponent } from './cars/edit-car.component';
import { CarListComponent } from './cars/car-list.component';
import { FormComponent } from './form/form.component';
// import { FlagListComponent } from './flats/flag-list.component';
import { FlatListComponent } from './flats/flag-list.component';
import { ToolbarComponent } from './myMat/toolbar.component';
import { ManagerHomeComponent } from './manager/manager-home.component';
// import { FlagListComponent } from './flats/flag-list.component';




// my routes--------------------------
// const routes: Routes = [



//   {
//     path:'',component:ApphomeComponent,pathMatch:'full'
//   },
//   {
//     path:'about',component:AppaboutComponent
//   },
//   {
//     path:'contact',component:ContactComponent
//   },
//   {
//     path:'products',
//   component:ProductListComponent,
//   canActivate:[AuthGuard],
//   loadChildren:()=>import('../app/product/product.module').then(m=>m.ProductModule)
//   },
//   {
//     path:'events',component:EventListComponent
//   },
  
//   {
//     path:'flats',component:FlatListComponent
//   },
//   {
//     path:'bookform',component:BookComponent
//   },
//   {
//     path:'animals',component:AnimalListComponent
//   },
//   {path:'animals/:id',component:AnimalDetailsComponent},
//   {path:'flowers',component:FlowerListComponent,
//   children:[
//     {path:'editFlower',component:EditFlowerComponent,canActivate:[AuthGuard]}
//   ]},
//   {path:'login',component:LoginComponent},
//   {path:'addFlower',component:AddFlowerComponent, canActivate:[AuthGuard]},
//   {path:'welcome',component:WelcomeComponent},
//   {path:'cardlist',component:CardListComponent},
//   {path:'todo',
//   loadChildren:()=>import('./todo/todo.module').then((m)=>m.TodoModule),
// },

// {path:'cars',component:CarListComponent,
//   children:[
//     {path:'editCar',component:EditCarComponent,canActivate:[AuthGuard]}
//   ]},
//   {path:'addCar',component:AddCarComponent, canActivate:[AuthGuard]},
//   {path:'form',component:FormComponent},

//   {path:'myMat',
//   loadChildren:()=>import('./todo/todo.module').then((m)=>m.TodoModule)
// },






// ];







// new routes --------------------

const routes:Routes=[
  
  
  
  {path:'',component:ToolbarComponent,
 children:[
  {path:'manager',redirectTo:'manager',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'manager',
component:ManagerHomeComponent,
canActivate:[AuthGuard],
// loadChildren:()=>import('../app/manager/manager.module').then(m=>m.ManagerModule)
 },
{path:'welcome',component:WelcomeComponent},
{
      path:'',component:ApphomeComponent,pathMatch:'full'
    },
    {
      path:'about',component:AppaboutComponent
    },
    {
      path:'contact',component:ContactComponent
    },
 {
  path:'products',
  component:ProductListComponent,
  canActivate:[AuthGuard],
  loadChildren:()=>import('../app/product/product.module').then(m=>m.ProductModule)

 },
 {path:'cars',component:CarListComponent,
   children:[
     {path:'editCar',component:EditCarComponent,}
   ]},
   {path:'addCar',component:AddCarComponent, },
   {path:'form',component:FormComponent},

{
  path:'events',
  component:EventListComponent,
  // canActivate:[AuthGuard]

},

{
  path:'form',
  component:FormComponent ,
  // canActivate:[AuthGuard]

},
{
      path:'bookform',component:BookComponent
    },

// {path:'',redirectTo:'welcome',pathMatch:'full'},

// {path:'**',component:PagenotfoundComponent}
{path:'todo',loadChildren:()=>import('./todo/todo.module').then((m)=>m.TodoModule),}
 ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
