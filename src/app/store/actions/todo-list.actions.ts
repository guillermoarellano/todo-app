import { Injectable } from '@angular/core';
import { Action, Store, createAction, props } from '@ngrx/store';

import { TODOItem, APIInterface } from '@app/shared/models/interfaces';
import { TodoListState } from '../reducers/todo-list.reducer';

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

export const DeleteTodo = createAction(
  '[TodoList] delete Todo item',
  props<{ todoId: number }>()
);

export const DeleteTodoSuccess = createAction(
  '[TodoList] delete Todo item success',
  props<{ todoId: number }>()
);

export const DeleteTodoError = createAction(
  '[TodoList] delete Todo item error',
  props<{ error: Error }>()
);

export const UpdateTodo = createAction(
  '[TodoList] update Todo item',
  props<{ todo: TODOItem }>()
);

export const UpdateTodoSuccess = createAction(
  '[TodoList] update Todo item success',
  props<{ todo: TODOItem }>()
);

export const UpdateTodoError = createAction(
  '[TodoList] update Todo item error',
  props<{ error: Error }>()
);

export const SetTodoItemForEdit = createAction(
  '[TodoList] SetTodoItemForEdit',
  props<{ todo: TODOItem }>()
);

export const TodoItemCompleted = createAction(
  '[TodoList] TodoItemCompleted',
  props<{ todoId: number }>()
);

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
    this.store.dispatch(UpdateTodo({ todo }));
  }

  public setTodoItemForEdit(todo: TODOItem): void {
    this.store.dispatch(SetTodoItemForEdit({ todo }));
  }

  public deleteTodo(todoId: number): void {
    this.store.dispatch(DeleteTodo({ todoId }));
  }

  public todoItemCompleted(id: string): void {
    this.store.dispatch(TodoItemCompleted({ todoId: +id }));
  }
}
