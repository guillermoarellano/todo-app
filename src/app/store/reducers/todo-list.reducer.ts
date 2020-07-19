import { TODOItem } from '@app/shared/models/interfaces';
import { TodoActionTypes } from '../actions/todo-list.actions';
import * as TodoActions from '../actions';
import { GenericAction } from '../actions/generic-action';
import { createReducer, on } from '@ngrx/store';

export interface TodoListState {
  todos: TODOItem[];
  errors?: Error | '';
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

const initialTodoState: TodoListState = {
  todos: [],
  isLoading: false,
  errors: '',
};

const selectTodoItemForEditReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoActionTypes, TODOItem>
): TodoListState => {
  const indexToUpdate = lastState.todos.findIndex(
    (todo) => todo.id === action.payload.id
  );
  return {
    ...lastState,
    editTodoItemIdx: indexToUpdate,
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
    todos: newTodolist,
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
    todos: newState,
  };
};

const todoItemCompletedReducer = (
  lastState: TodoListState,
  action: GenericAction<TodoActionTypes, string>
) => {
  lastState.todos.find((todo) => todo.id === action.payload).completed = true;

  return { ...lastState };
};

// export function todoListReducers(
//   lastState: TodoListState = new TodoListInitState(),
//   action: GenericAction<TodoActionTypes, any>
// ): TodoListState {
//   switch (action.type) {
//     case TodoActionTypes.LoadTodos:
//       return loadTodoItems(lastState, action);
//     case TodoActionTypes.LoadTodosSuccess:
//       return todoItemsLoaded(lastState, action);
//     case TodoActionTypes.LoadTodosError:
//       return todoItemsLoadFailed(lastState, action);
//     case TodoActionTypes.CreateTodoSuccess:
//       return todoItemCreatedReducer(lastState, action);
//     case TodoActionTypes.SetTodoItemForEdit:
//       return selectTodoItemForEditReducer(lastState, action);
//     case TodoActionTypes.DeleteTodoSuccess:
//       return todoItemDeletedReducer(lastState, action);
//     case TodoActionTypes.UpdateTodoSuccess:
//       return todoItemUpdatedReducer(lastState, action);
//     case TodoActionTypes.TodoItemCompleted:
//       return todoItemCompletedReducer(lastState, action);

//     default:
//       return lastState;
//   }
// }

export const todoListReducers = createReducer<TodoListState>(
  initialTodoState,
  on(
    TodoActions.LoadTodos,
    (state): TodoListState => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    TodoActions.LoadTodosSuccess,
    (state, action): TodoListState => {
      return {
        ...state,
        todos: action.todos,
        isLoading: false,
        editTodoItemIdx: null,
        errors: '',
      };
    }
  ),
  on(
    TodoActions.LoadTodosError,
    (state, action): TodoListState => {
      return {
        ...state,
        todos: [],
        errors: action.error,
        isLoading: false,
        editTodoItemIdx: null,
      };
    }
  ),
  // Todo: Need to update the API endpoint
  // on(
  //   TodoActions.CreateTodoSuccess,
  //   (state, action): TodoListState => {
  //     const newTodos = [...state.todos, ...action.payload];
  //     return {
  //       ...state,
  //       todos: newTodos,
  //       errors: ''
  //     };
  //   }
  // ),
  on(
    TodoActions.CreateTodoError,
    (state, action): TodoListState => {
      return {
        ...state,
        errors: action.error
      };
    }
  ),
);
