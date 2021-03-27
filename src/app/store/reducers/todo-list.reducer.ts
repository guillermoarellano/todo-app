import { TODOItem } from '@app/shared/models/interfaces';
import { createReducer, on } from '@ngrx/store';
import { TodoActions } from '../actions';

export interface TodoListState {
  todos: TODOItem[];
  errors?: Error | '';
  isLoading: boolean;
  editTodoItemIdx?: number;
}

const initialTodoState: TodoListState = {
  todos: [],
  isLoading: false,
  errors: ''
};

export const todoListReducers = createReducer<TodoListState>(
  initialTodoState,
  on(
    TodoActions.LoadTodos,
    (state): TodoListState => {
      return {
        ...state,
        isLoading: true
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
        errors: ''
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
        editTodoItemIdx: null
      };
    }
  ),
  // Todo: Need to update the API endpoint to return the new object with ID
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
  on(
    TodoActions.DeleteTodoSuccess,
    (state, action): TodoListState => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.todoId),
        editTodoItemIdx: null,
        errors: ''
      };
    }
  ),
  on(TodoActions.DeleteTodoError, (state, action) => {
    return {
      ...state,
      errors: action.error
    };
  }),
  on(TodoActions.UpdateTodoSuccess, (state, action) => {
    const newTodolist = state.todos.map((todo) =>
      todo.id === action.todo.id ? action.todo : todo
    );
    return {
      ...state,
      todos: newTodolist,
      editTodoItemIdx: null,
      errors: ''
    };
  }),
  on(TodoActions.UpdateTodoError, (state, action) => {
    return {
      ...state,
      errors: action.error,
      isLoading: false
    };
  }),
  on(TodoActions.SetTodoItemForEdit, (state, action) => {
    const indexToUpdate = state.todos.findIndex(
      (todo) => todo.id === action.todo.id
    );
    return {
      ...state,
      editTodoItemIdx: indexToUpdate
    };
  }),
  on(TodoActions.TodoItemCompleted, (state, action) => {
    state.todos.find((todo) => todo.id === action.todoId).completed = true;

    return { ...state };
  })
);
