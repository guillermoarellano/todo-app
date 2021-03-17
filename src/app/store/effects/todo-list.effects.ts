import { Injectable } from '@angular/core';
import { TodoListAPIService } from '@app/core/todo-list-api.service';
import { APIInterface } from '@app/shared/models/interfaces';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { TodoActions } from '../actions';


@Injectable()
export class TodoListEffects {
  constructor(
    private actions$: Actions,
    private todoListAPIService: TodoListAPIService
  ) {}

  loadTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.LoadTodos),
      exhaustMap(() => {
        return this.todoListAPIService.getTodos().pipe(
          map((todos) => TodoActions.LoadTodosSuccess({ todos })),
          catchError((error: Error) =>
            of(TodoActions.LoadTodosError({ error }))
          )
        );
      })
    );
  });

  createTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.CreateTodo),
      exhaustMap((TodoRequest: APIInterface) => {
        return this.todoListAPIService
          .createTodo({
            title: TodoRequest.title,
            text: TodoRequest.text,
          })
          .pipe(
            map(() => TodoActions.LoadTodos()),
            catchError((error: Error) =>
              of(TodoActions.CreateTodoError({ error }))
            )
          );
      })
    );
  });

  updateTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.UpdateTodo),
      exhaustMap((action) => {
        return this.todoListAPIService.editTodo(action.todo).pipe(
          map(() => TodoActions.UpdateTodoSuccess({ todo: action.todo })),
          catchError((error: Error) =>
            of(TodoActions.UpdateTodoError({ error }))
          )
        );
      })
    );
  });

  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.DeleteTodo),
      exhaustMap((action) => {
        return this.todoListAPIService.deleteTodo(action.todoId).pipe(
          map(() => TodoActions.DeleteTodoSuccess({ todoId: action.todoId })),
          catchError((error: Error) =>
            of(TodoActions.DeleteTodoError({ error }))
          )
        );
      })
    );
  });

  // ToDo: Add Complete Todo effect
}
