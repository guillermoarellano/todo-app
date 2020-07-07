import { TODOItem } from '@app/shared/models/interfaces';
import { TodoActionTypes } from '../actions/todo-list.actions';
import { GenericAction } from '../actions/generic-action';

export interface TodoListState {
  todos: TODOItem[];
  errors?: Error;
  isLoading: boolean;
  editTodoItemIdx?: number;
}

export class TodoListInitState implements TodoListState {
  public todos: TODOItem[];
  public errors?: Error;
  public isLoading: boolean;
  constructor() {
    this.todos = [];
    this.isLoading = false;
  }
}

const loadTodoItems = (
  lastState: TodoListState,
  action: GenericAction<TodoActionTypes, void>
): TodoListState => {
  return {
    ...lastState,
    isLoading: true
  };
};

const todoItemsLoaded = (
  lastState: TodoListState,
  action: GenericAction<TodoActionTypes, TODOItem[]>
): TodoListState => {
  return {
    ...lastState,
    todos: action.payload,
    isLoading: false,
    editTodoItemIdx: null
  };
};

const todoItemsLoadFailed = (
  lastState: TodoListState,
  action: GenericAction<TodoActionTypes, Error>
): TodoListState => {
  return {
    ...lastState,
    errors: action.payload,
    isLoading: false
  };
};

const todoItemCreatedReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoActionTypes, TODOItem>
): TodoListState => {
  const prevTodos = lastState.todos;

  prevTodos.push(action.payload);
  const newTodos = prevTodos;
  return {
    ...lastState,
    todos: newTodos
  };
};

const selectTodoItemForEditReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoActionTypes, TODOItem>
): TodoListState => {
  const indexToUpdate = lastState.todos.findIndex((todo) => todo.id === action.payload.id);
  return {
    ...lastState,
    editTodoItemIdx: indexToUpdate
  };
};

const todoItemUpdatedReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoActionTypes, TODOItem>
): TodoListState => {
  const newTodolist = lastState.todos.map((todo) =>
    todo.id === action.payload.id ? action.payload : todo
  );

  return {
    ...lastState,
    editTodoItemIdx: null,
    todos: newTodolist
  };
};

const todoItemDeletedReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoActionTypes, string>
): TodoListState => {
  const newState = lastState.todos.filter((todo) => todo.id !== action.payload);

  return {
    ...lastState,
    editTodoItemIdx: null,
    todos: newState
  };
};

const todoItemCompletedReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoActionTypes, string>
) => {
  lastState.todos.find((todo) => todo.id === action.payload).completed = true;

  return { ...lastState };
};

export function todoListReducers(
  lastState: TodoListState = new TodoListInitState(),
  action: GenericAction<TodoActionTypes, any>
): TodoListState {
  switch (action.type) {
    case TodoActionTypes.LoadTodos:
      return loadTodoItems(lastState, action);
    case TodoActionTypes.LoadTodosError:
      return todoItemsLoaded(lastState, action);
    case TodoActionTypes.LoadTodosSuccess:
      return todoItemsLoadFailed(lastState, action);
    case TodoActionTypes.CreateTodoSuccess:
      return todoItemCreatedReducer(lastState, action);
    case TodoActionTypes.LoadTodosSuccess:
      return todoItemsLoadFailed(lastState, action);
    case TodoActionTypes.SetTodoItemForEdit:
      return selectTodoItemForEditReducer(lastState, action);
    case TodoActionTypes.DeleteTodoSuccess:
      return todoItemDeletedReducer(lastState, action);
    case TodoActionTypes.UpdateTodoSuccess:
      return todoItemUpdatedReducer(lastState, action);
    case TodoActionTypes.TodoItemCompleted:
      return todoItemCompletedReducer(lastState, action);

    default:
      return lastState;
  }
}
