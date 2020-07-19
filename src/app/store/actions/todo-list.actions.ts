import { Injectable } from '@angular/core';
import { Action, Store, createAction, props } from '@ngrx/store';

import { TODOItem, APIInterface } from '@app/shared/models/interfaces';
import { TodoListState } from '../reducers/todo-list.reducer';

export enum TodoActionTypes {
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

export const LoadTodos = createAction('[TodoList] load todos');

export const LoadTodosSuccess = createAction(
  '[TodoList] load todos success',
  props<{ todos: TODOItem[] }>()
);

export const LoadTodosError = createAction(
  '[TodoList] load todos error',
  props<{ error: Error }>()
);

export const CreateTodo = createAction(
  '[TodoList] create Todo item',
  props<APIInterface>()
);

// Todo: Modify the API service to return newly created Object to pass to reducer
export const CreateTodoSuccess = createAction(
  '[TodoList] create Todo item success',
  props<{ todoResponse: string }>()
);

export const CreateTodoError = createAction(
  '[TodoList] create Todo item error',
  props<{ error: Error }>()
);

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
    this.store.dispatch(LoadTodos());
  }

  public addTodo(todo: TODOItem): void {
    this.store.dispatch(CreateTodo({ title: todo.title, text: todo.text }));
  }

  public updateTodoItem(todo: TODOItem): void {
    this.store.dispatch(new UpdateTodo(todo));
  }

  public setTodoItemForEdit(todo: TODOItem): void {
    this.store.dispatch(new SetTodoItemForEdit(todo));
  }

  public deleteTodo(id: string): void {
    this.store.dispatch(new DeleteTodo(id));
  }

  public todoItemCompleted(id: string): void {
    this.store.dispatch(new TodoItemCompleted(id));
  }
}
