import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page.component';
import { FormsModule } from '@angular/forms';
import { TodoPageRoutingModule } from './todo-routing.module';
import { StoreModule } from '@ngrx/store';
// import { todoReducer } from 'app/state/todos/todo.reducer';
import { todoReducer } from '../state/todo/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
// import { TodoEffects } from 'app/state/todos/todo.effects';
import { TodoEffects } from '../state/todo/todo.effects';



@NgModule({
  declarations: [
  TodoPageComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    TodoPageRoutingModule,
    StoreModule.forFeature('todo',todoReducer),
    EffectsModule.forFeature(TodoEffects)
  ]
})
export class TodoModule { }