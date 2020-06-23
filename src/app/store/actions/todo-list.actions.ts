import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

import { TODOItem } from '@app/shared/models/todoitem';
import { TodoListState } from '../reducers/todo-list.reducer';

interface APIInterface {
  title: string;
  text: string;
}

export enum TodoListActionTypes {
  LoadTodoList = '[TodoList] Load Todo List',
  TodoItemsLoaded = '[TodoList] load Todo items success',
  TodoItemsLoadFailed = '[TodoList] load Todo items failure',
  CreateTodoItem = '[TodoList] create Todo item',
  TodoItemCreated = '[TodoList] create Todo item success',
  TodoItemCreatedFailed = '[TodoList] create Todo item failure',
  DeleteTodoItem = '[TodoList] delete Todo item',
  TodoItemDeleted = '[TodoList] delete Todo item success',
  TodoItemDeletedFailed = '[TodoList] delete Todo item failure',
  UpdateTodoItem = '[TodoList] update Todo item',
  TodoItemUpdated = '[TodoList] update Todo item success',
  TodoItemUpdatedFailed = '[TodoList] update Todo item failure',
  SetTodoItemForEdit = '[TodoList] SetTodoItemForEdit',
  TodoItemCompleted = '[TodoList] TodoItemCompleted',
}

export class LoadTodoList implements Action {
  public readonly type = TodoListActionTypes.LoadTodoList;

  constructor() {}
}

export class TodoItemsLoaded implements Action {
  public readonly type = TodoListActionTypes.TodoItemsLoaded;

  constructor(public payload: TODOItem[]) {}
}

export class TodoItemsLoadFailed implements Action {
  public readonly type = TodoListActionTypes.TodoItemsLoadFailed;

  constructor(public payload: Error) {}
}


export class CreateTodoItem implements Action {
  public readonly type = TodoListActionTypes.CreateTodoItem;

  constructor(public payload: APIInterface) {}
}

export class TodoItemCreated implements Action {
  public readonly type = TodoListActionTypes.TodoItemCreated;

  constructor(public payload: APIInterface) {}
}

export class TodoItemCreatedFailed implements Action {
  public readonly type = TodoListActionTypes.TodoItemCreatedFailed;

  constructor(public payload: Error) {}
}

export class DeleteTodoItem implements Action {
  public readonly type = TodoListActionTypes.DeleteTodoItem;

  constructor(public payload: string) {}
}

export class TodoItemDeleted implements Action {
  public readonly type = TodoListActionTypes.TodoItemDeleted;

  constructor(public payload: APIInterface) {}
}

export class TodoItemDeletedFailed implements Action {
  public readonly type = TodoListActionTypes.TodoItemDeletedFailed;

  constructor(public payload: Error) {}
}

export class UpdateTodoItem implements Action {
  public readonly type = TodoListActionTypes.UpdateTodoItem;

  constructor(public payload: APIInterface) {}
}

export class TodoItemUpdated implements Action {
  public readonly type = TodoListActionTypes.TodoItemUpdated;

  constructor(public payload: string) {}
}

export class TodoItemUpdatedFailed implements Action {
  public readonly type = TodoListActionTypes.TodoItemUpdatedFailed;

  constructor(public payload: Error) {}
}

export class SetTodoItemForEditAction implements Action {
  public readonly type = TodoListActionTypes.SetTodoItemForEdit;

  constructor(public payload: TODOItem) {}
}

export class TodoItemCompleted implements Action {
  public readonly type = TodoListActionTypes.TodoItemCompleted;

  constructor(public payload: string) {}
}

@Injectable({ providedIn: 'root' })
export class TodoListActions {
  constructor(private store: Store<TodoListState>) {}

  public loadTodoList(): void {
    this.store.dispatch(new LoadTodoList());
  }

  public addTodo(todo: TODOItem): any {
    this.store.dispatch(new CreateTodoItem({title: todo.title, text: todo.text}));
  }

  public updateTodoItem(todo: TODOItem): any {
    this.store.dispatch(new UpdateTodoItem({title: todo.title, text: todo.text}));
  }

  public setTodoItemForEdit(todo: TODOItem): any {
    this.store.dispatch(new SetTodoItemForEditAction(todo));
  }

  public deleteTodo(id: string) {
    this.store.dispatch(new DeleteTodoItem(id));
  }

  public todoItemCompleted(id: string) {
    this.store.dispatch(new TodoItemCompleted(id));
  }
}
