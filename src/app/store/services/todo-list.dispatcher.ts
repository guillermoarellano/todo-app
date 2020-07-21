import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as TodoActions from '../actions';
import { TodoListState } from '../reducers';
import { TODOItem } from '@app/shared/models/interfaces';

@Injectable()
export class TodoListDispatcher {
  constructor(private store: Store<TodoListState>) {}

  public loadTodoList(): void {
    this.store.dispatch(TodoActions.LoadTodos());
  }

  public addTodo(todo: TODOItem): void {
    this.store.dispatch(TodoActions.CreateTodo({ title: todo.title, text: todo.text }));
  }

  public updateTodoItem(todo: TODOItem): void {
    this.store.dispatch(TodoActions.UpdateTodo({ todo }));
  }

  public setTodoItemForEdit(todo: TODOItem): void {
    this.store.dispatch(TodoActions.SetTodoItemForEdit({ todo }));
  }

  public deleteTodo(todoId: number): void {
    this.store.dispatch(TodoActions.DeleteTodo({ todoId }));
  }

  public todoItemCompleted(id: string): void {
    this.store.dispatch(TodoActions.TodoItemCompleted({ todoId: +id }));
  }
}
