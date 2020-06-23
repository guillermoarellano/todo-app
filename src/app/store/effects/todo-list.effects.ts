import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';


import { TodoItemsLoaded, TodoItemsLoadFailed, TodoListActionTypes, TodoItemCreated, TodoItemCreatedFailed } from '../actions';
import { TodoListAPIService } from '@app/core/todo-list-api.service';
import { APIInterface } from '@app/shared/models/interfaces';

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
  public TodoList$ = this.actions$.pipe(
    ofType(TodoListActionTypes.CreateTodoItem),
    exhaustMap((payload: APIInterface) => this.todoListAPIService.createTodo(payload)),
    map((todoList) => new TodoItemCreated(todoList)),
    catchError((error: Error) => of(new TodoItemCreatedFailed(error)))
  );
  constructor(private actions$: Actions, private todoListAPIService: TodoListAPIService) {}
}
