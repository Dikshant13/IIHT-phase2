// import { TodoState } from "./todos/todo.reducer";
import { TodoState } from "./todo/todo.reducer";

export interface AppState
{
  todo: any;
  todos:TodoState;
}