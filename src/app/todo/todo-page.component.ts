import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectAllTodos, todosDataState } from '../state/todo/todo.selectors';
import { addTodo,removeTodo, loadTodos  } from '../state/todo/todo.actions';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';
import { state } from '@angular/animations';
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  public allTodos$:Observable<Todo[]> =this.store.select(selectAllTodos);
  public todo='';
  constructor(private store:Store){}
  ngOnInit(): void {
    console.log('in init')
    this.store.dispatch(loadTodos());

  }

removeTodo(todo:Todo){}

  onSubmit(todoForm:NgForm){
   console.log(todoForm.value);
  }
}