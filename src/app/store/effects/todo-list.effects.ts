import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import {
  TodoActionTypes,
  CreateTodoError,
  UpdateTodoError,
  CreateTodo,
  UpdateTodo,
  DeleteTodo,
  DeleteTodoError,
} from '../actions';
import * as TodoActions from '../actions';
import { TodoListAPIService } from '@app/core/todo-list-api.service';

@Injectable()
export class TodoListEffects {
  @Effect()
  public loadTodoList$ = this.actions$.pipe(
    ofType(TodoActions.LoadTodos),
    exhaustMap(() => this.todoListAPIService.getTodos()),
    map((todos) => TodoActions.LoadTodosSuccess({ todos })),
    catchError((error: Error) =>
      of(TodoActions.LoadTodosError({ error }))
    )
  );

  @Effect()
  public createTodo$ = this.actions$.pipe(
    ofType(TodoActionTypes.CreateTodo),
    exhaustMap((action: CreateTodo) =>
      this.todoListAPIService.createTodo(action)
    ),
    map(() => TodoActions.LoadTodos),
    catchError((error: Error) => of(new CreateTodoError(error)))
  );

  @Effect()
  public updateTodo$ = this.actions$.pipe(
    ofType(TodoActionTypes.UpdateTodo),
    exhaustMap((action: UpdateTodo) =>
      this.todoListAPIService.editTodo(action)
    ),
    map(() => TodoActions.LoadTodos),
    catchError((error: Error) => of(new UpdateTodoError(error)))
  );

  @Effect()
  public deleteTodo$ = this.actions$.pipe(
    ofType(TodoActionTypes.DeleteTodo),
    exhaustMap((action: DeleteTodo) =>
      this.todoListAPIService.deleteTodo(action)
    ),
    map(() => TodoActions.LoadTodos),
    catchError((error: Error) => of(new DeleteTodoError(error)))
  );
  constructor(
    private actions$: Actions,
    private todoListAPIService: TodoListAPIService
  ) {}
}
