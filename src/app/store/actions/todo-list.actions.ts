import { createAction, props } from '@ngrx/store';

import { TODOItem, APIInterface } from '@app/shared/models/interfaces';

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
