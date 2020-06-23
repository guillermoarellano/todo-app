import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';


import { TodoItemsLoaded, TodoItemsLoadFailed, TodoListActionTypes } from '../actions';
import { TodoListService } from '@app/core/todo-list.service';

@Injectable()
export class TodoListEffects {
  @Effect()
  public loadTodoList$ = this.actions$.pipe(
    ofType(TodoListActionTypes.LoadTodoList),
    exhaustMap(() => this.todoListService.getTodos()),
    map((todoList) => new TodoItemsLoaded(todoList)),
    catchError((error: Error) => of(new TodoItemsLoadFailed(error)))
  );
  constructor(private actions$: Actions, private todoListService: TodoListService) {}
}
