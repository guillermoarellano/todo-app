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
    exhaustMap((payload: CreateTodoItem) => this.todoListAPIService.createTodo(payload)),
    map(() => new LoadTodoList()),
    catchError((error: Error) => of(new TodoItemCreatedFailed(error)))
  );

  @Effect()
  public updateTodo$ = this.actions$.pipe(
    ofType(TodoListActionTypes.UpdateTodoItem),
    exhaustMap((payload: UpdateTodoItem) => this.todoListAPIService.editTodo(payload)),
    map(() => new LoadTodoList()),
    catchError((error: Error) => of(new TodoItemUpdatedFailed(error)))
  );
  constructor(private actions$: Actions, private todoListAPIService: TodoListAPIService) {}
}
