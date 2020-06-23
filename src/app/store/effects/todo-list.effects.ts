import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';


import {
  TodoItemsLoaded,
  TodoItemsLoadFailed,
  TodoListActionTypes,
  TodoItemCreatedFailed,
  LoadTodoList,
  TodoItemUpdatedFailed,
  CreateTodoItem,
  UpdateTodoItem,
  DeleteTodoItem,
  TodoItemDeletedFailed,
} from '../actions';
import { TodoListAPIService } from '@app/core/todo-list-api.service';


@Injectable()
export class TodoListEffects {
  @Effect()
  public loadTodoList$ = this.actions$.pipe(
    ofType(TodoListActionTypes.LoadTodoList),
    exhaustMap(() => this.todoListAPIService.getTodos()),
    map((todoList) => new TodoItemsLoaded(todoList)),
    catchError((error: Error) => of(new TodoItemsLoadFailed(error)))
  );

  @Effect()
  public createTodo$ = this.actions$.pipe(
    ofType(TodoListActionTypes.CreateTodoItem),
    exhaustMap((action: CreateTodoItem) => this.todoListAPIService.createTodo(action)),
    map(() => new LoadTodoList()),
    catchError((error: Error) => of(new TodoItemCreatedFailed(error)))
  );

  @Effect()
  public updateTodo$ = this.actions$.pipe(
    ofType(TodoListActionTypes.UpdateTodoItem),
    exhaustMap((action: UpdateTodoItem) => this.todoListAPIService.editTodo(action)),
    map(() => new LoadTodoList()),
    catchError((error: Error) => of(new TodoItemUpdatedFailed(error)))
  );

  @Effect()
  public deleteTodo$ = this.actions$.pipe(
    ofType(TodoListActionTypes.DeleteTodoItem),
    exhaustMap((action: DeleteTodoItem) => this.todoListAPIService.deleteTodo(action)),
    map(() => new LoadTodoList()),
    catchError((error: Error) => of(new TodoItemDeletedFailed(error)))
  );
  constructor(private actions$: Actions, private todoListAPIService: TodoListAPIService) {}
}
