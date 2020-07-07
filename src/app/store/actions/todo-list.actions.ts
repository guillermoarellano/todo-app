import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

import { TODOItem, APIInterface } from '@app/shared/models/interfaces';
import { TodoListState } from '../reducers/todo-list.reducer';

export enum TodoActionTypes {
  LoadTodos = '[TodoList] load todos',
  LoadTodosError = '[TodoList] load todos error',
  LoadTodosSuccess = '[TodoList] load todos success',
  CreateTodo = '[TodoList] create Todo item',
  CreateTodoError = '[TodoList] create Todo item error',
  CreateTodoSuccess = '[TodoList] create Todo item success',
  DeleteTodo = '[TodoList] delete Todo item',
  DeleteTodoError = '[TodoList] delete Todo item error',
  DeleteTodoSuccess = '[TodoList] delete Todo item success',
  UpdateTodo = '[TodoList] update Todo item',
  UpdateTodoError = '[TodoList] update Todo item error',
  UpdateTodoSuccess = '[TodoList] update Todo item success',
  SetTodoItemForEdit = '[TodoList] SetTodoItemForEdit',
  TodoItemCompleted = '[TodoList] TodoItemCompleted',
}

// Action Creators

export class LoadTodos implements Action {
  public readonly type = TodoActionTypes.LoadTodos;
}

export class LoadTodosSuccess implements Action {
  public readonly type = TodoActionTypes.LoadTodosSuccess;

  constructor(public payload: TODOItem[]) {}
}

export class LoadTodosError implements Action {
  public readonly type = TodoActionTypes.LoadTodosError;

  constructor(public payload: Error) {}
}

export class CreateTodo implements Action {
  public readonly type = TodoActionTypes.CreateTodo;

  constructor(public payload: APIInterface) {}
}

export class CreateTodoSuccess implements Action {
  public readonly type = TodoActionTypes.CreateTodoSuccess;

  constructor(public payload: APIInterface) {}
}

export class CreateTodoError implements Action {
  public readonly type = TodoActionTypes.CreateTodoError;

  constructor(public payload: Error) {}
}

export class DeleteTodo implements Action {
  public readonly type = TodoActionTypes.DeleteTodo;

  constructor(public payload: string) {}
}

export class DeleteTodoSuccess implements Action {
  public readonly type = TodoActionTypes.DeleteTodoSuccess;

  constructor(public payload: APIInterface) {}
}

export class DeleteTodoError implements Action {
  public readonly type = TodoActionTypes.DeleteTodoError;

  constructor(public payload: Error) {}
}

export class UpdateTodo implements Action {
  public readonly type = TodoActionTypes.UpdateTodo;

  constructor(public payload: TODOItem) {}
}

export class UpdateTodoSuccess implements Action {
  public readonly type = TodoActionTypes.UpdateTodoSuccess;

  constructor(public payload: string) {}
}

export class UpdateTodoError implements Action {
  public readonly type = TodoActionTypes.UpdateTodoError;

  constructor(public payload: Error) {}
}

export class SetTodoItemForEdit implements Action {
  public readonly type = TodoActionTypes.SetTodoItemForEdit;

  constructor(public payload: TODOItem) {}
}

export class TodoItemCompleted implements Action {
  public readonly type = TodoActionTypes.TodoItemCompleted;

  constructor(public payload: string) {}
}

// Union the valid types
export type TodoActions =
  | LoadTodos
  | LoadTodosError
  | LoadTodosSuccess
  | CreateTodo
  | CreateTodoError
  | CreateTodoSuccess
  | UpdateTodo
  | UpdateTodoError
  | UpdateTodoSuccess
  | DeleteTodo
  | DeleteTodoError
  | DeleteTodoSuccess
  | SetTodoItemForEdit
  | TodoItemCompleted;

@Injectable({ providedIn: 'root' })
export class TodoListActions {
  constructor(private store: Store<TodoListState>) {}

  public loadTodoList(): void {
    this.store.dispatch(new LoadTodos());
  }

  public addTodo(todo: TODOItem): any {
    this.store.dispatch(new CreateTodo({ title: todo.title, text: todo.text }));
  }

  public updateTodoItem(todo: TODOItem): any {
    this.store.dispatch(new UpdateTodo(todo));
  }

  public setTodoItemForEdit(todo: TODOItem): any {
    this.store.dispatch(new SetTodoItemForEdit(todo));
  }

  public deleteTodo(id: string) {
    this.store.dispatch(new DeleteTodo(id));
  }

  public todoItemCompleted(id: string) {
    this.store.dispatch(new TodoItemCompleted(id));
  }
}
