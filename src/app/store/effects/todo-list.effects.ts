import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { TodoActionTypes, UpdateTodoError, UpdateTodo } from '../actions';
import * as TodoActions from '../actions';
import { TodoListAPIService } from '@app/core/todo-list-api.service';
import { APIInterface } from '@app/shared/models/interfaces';

@Injectable()
export class TodoListEffects {
  @Effect()
  public loadTodoList$ = this.actions$.pipe(
    ofType(TodoActions.LoadTodos),
    exhaustMap(() => this.todoListAPIService.getTodos()),
    map((todos) => TodoActions.LoadTodosSuccess({ todos })),
    catchError((error: Error) => of(TodoActions.LoadTodosError({ error })))
  );

  @Effect()
  public createTodo$ = this.actions$.pipe(
    ofType(TodoActions.CreateTodo),
    exhaustMap((TodoRequest: APIInterface) =>
      this.todoListAPIService.createTodo({
        title: TodoRequest.title,
        text: TodoRequest.text,
      })
    ),
    map(() => TodoActions.LoadTodos()),
    catchError((error: Error) => of(TodoActions.CreateTodoError({ error })))
  );

  @Effect()
  public updateTodo$ = this.actions$.pipe(
    ofType(TodoActions.UpdateTodo),
    exhaustMap((action) =>
      this.todoListAPIService.editTodo(action.todo).pipe(
        map(() => TodoActions.UpdateTodoSuccess({ todo: action.todo })),
        catchError((error: Error) => of(TodoActions.UpdateTodoError({ error })))
      )
    )
  );

  @Effect()
  public deleteTodo$ = this.actions$.pipe(
    ofType(TodoActions.DeleteTodo),
    exhaustMap((action) =>
      this.todoListAPIService.deleteTodo(action.todoId).pipe(
        map(() => TodoActions.DeleteTodoSuccess({ todoId: action.todoId })),
        catchError((error: Error) => of(TodoActions.DeleteTodoError({ error })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private todoListAPIService: TodoListAPIService
  ) {}
}
