import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoListState } from './reducers';

export const getTodolistState = createFeatureSelector<TodoListState>('todoList');

export const todoListSelectorFn = createSelector(
  getTodolistState,
  (todoListState) => todoListState.todos
);

export const completedTodosSelectorFn = createSelector(
  todoListSelectorFn,
  (todos) => todos.filter((todo) => todo.completed)
);

export const todoItemForEditSelectorFn = createSelector(
  getTodolistState,
  (todoListState) => todoListState.todos[todoListState.editTodoItemIdx]
);

export const isLoadingFn = createSelector(
  getTodolistState,
  (todoListState) => todoListState.isLoading
);
