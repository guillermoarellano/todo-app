import { TODOItem } from '@app/shared/models/interfaces';
import { Action } from '@ngrx/store';
import { TodoActions } from '../actions';
import { todoListReducers, TodoListState } from './todo-list.reducer';

describe('TodoList Reducer Tests', () => {
  const initialTodoState: TodoListState = {
    todos: [],
    isLoading: false,
    errors: ''
  };

  const fakeTodos: TODOItem[] = [
    {
      id: 77,
      createdAt: 'someCreateDate',
      modifiedAt: 'someModifiedDate',
      title: 'Cool Title',
      text: 'Neat todo text'
    },
    {
      id: 88,
      createdAt: 'someCreateDate',
      modifiedAt: 'someModifiedDate',
      title: 'Super Title',
      text: 'Oh wow, another todo message'
    }
  ];

  const fakeStateWithData: TodoListState = {
    todos: fakeTodos,
    errors: '',
    isLoading: false
  };

  it('should handle an unknown Action', () => {
    const action = {} as Action;

    const newState = todoListReducers(initialTodoState, action);

    expect(newState).toEqual(initialTodoState);
  });

  describe('LoadTodos action', () => {
    it('should set the loading property to true', () => {
      const action = TodoActions.LoadTodos();

      const newState = todoListReducers(initialTodoState, action);

      expect(newState.isLoading).toBeTrue();
    });
  });

  describe('LoadTodosSuccess action', () => {
    it('should set the state to a successful state', () => {
      const expectedSuccessfulState: TodoListState = {
        todos: [],
        isLoading: false,
        editTodoItemIdx: null,
        errors: ''
      };
      const action = TodoActions.LoadTodosSuccess({ todos: [] });

      const newState = todoListReducers(initialTodoState, action);

      expect(newState).toEqual(expectedSuccessfulState);
    });
  });

  describe('LoadTodosError action', () => {
    it('should set the state to a successful state', () => {
      const expectedErrorState: TodoListState = {
        todos: [],
        isLoading: false,
        editTodoItemIdx: null,
        errors: Error('crap!')
      };
      const action = TodoActions.LoadTodosError({ error: Error('crap!') });

      const newState = todoListReducers(initialTodoState, action);

      expect(newState).toEqual(expectedErrorState);
    });
  });

  describe('CreateTodoError action', () => {
    it('should set the state to an error state', () => {
      const expectedErrorState: TodoListState = {
        todos: [],
        isLoading: false,
        errors: Error('shoot!')
      };
      const action = TodoActions.CreateTodoError({ error: Error('shoot!') });

      const newState = todoListReducers(initialTodoState, action);

      expect(newState).toEqual(expectedErrorState);
    });
  });

  describe('DeleteTodoSuccess action', () => {
    it('should set the state to a successful state', () => {
      const action = TodoActions.DeleteTodoSuccess({ todoId: 88 });

      const newState = todoListReducers(fakeStateWithData, action);

      expect(newState.todos.length).toBe(1);
      expect(newState.todos[0].id).toBe(77);
    });
  });

  describe('DeleteTodoError action', () => {
    it('should set the state to an Error state', () => {
      const action = TodoActions.DeleteTodoError({ error: Error('dang it!') });

      const newState = todoListReducers(fakeStateWithData, action);

      expect(newState.todos.length).toBe(2);
      expect(newState.todos[0].id).toBe(77);
      expect(newState.todos[1].id).toBe(88);
      expect(newState.errors).toEqual(Error('dang it!'));
    });
  });

  describe('UpdateTodoSuccess action', () => {
    it('should update an existing TodoItem in the state', () => {
      const updatedItem: TODOItem =
        {
          id: 77,
          createdAt: 'someCreateDate',
          modifiedAt: 'aDifferendDate',
          title: 'Cool Title2',
          text: 'Neat todo text2'
      };
      const action = TodoActions.UpdateTodoSuccess({ todo: updatedItem });

      const newState = todoListReducers(fakeStateWithData, action);

      expect(newState.todos.length).toBe(2);
      expect(newState.todos[0].id).toBe(77);
      expect(newState.todos[0].modifiedAt).toBe(updatedItem.modifiedAt);
      expect(newState.todos[0].title).toBe(updatedItem.title);
      expect(newState.todos[0].text).toBe(updatedItem.text);
    });
  });

  describe('UpdateTodoError action', () => {
    it('should set the state to an Error state if Update process fails', () => {
      const action = TodoActions.UpdateTodoError({ error: Error('not again!') });

      const newState = todoListReducers(fakeStateWithData, action);

      expect(newState.todos.length).toBe(2);
      expect(newState.isLoading).toBeFalse();
      expect(newState.errors).toEqual(Error('not again!'));
    });
  });

  describe('SetTodoItemForEdit action', () => {
    it('should set the TodoItemForEdit property to identify which Todo is being editted', () => {
      const itemToUpdate: TODOItem ={
        id: 88,
        createdAt: 'someCreateDate',
        modifiedAt: 'someModifiedDate',
        title: 'Super Title',
        text: 'Oh wow, another todo message'
      };
      const action = TodoActions.SetTodoItemForEdit({ todo: itemToUpdate });

      const newState = todoListReducers(fakeStateWithData, action);

      expect(newState.todos.length).toBe(2);
      expect(newState.editTodoItemIdx).toBe(1);
      expect(newState.isLoading).toBeFalse();
      expect(newState.errors).toBe('');
    });
  });

  describe('SetTodoItemForEdit action', () => {
    it('should set the TodoItemForEdit property to identify which Todo is being editted', () => {
      const itemToUpdate: TODOItem = {
        id: 88,
        createdAt: 'someCreateDate',
        modifiedAt: 'someModifiedDate',
        title: 'Super Title',
        text: 'Oh wow, another todo message'
      };
      const action = TodoActions.SetTodoItemForEdit({ todo: itemToUpdate });

      const newState = todoListReducers(fakeStateWithData, action);

      expect(newState.todos.length).toBe(2);
      expect(newState.editTodoItemIdx).toBe(1);
      expect(newState.isLoading).toBeFalse();
      expect(newState.errors).toBe('');
    });
  });

  describe('TodoItemCompleted action', () => {
    it('should set the completed boolean property to true for identified todo', () => {
      const action = TodoActions.TodoItemCompleted({ todoId: 88 });

      const newState = todoListReducers(fakeStateWithData, action);

      expect(newState.todos.length).toBe(2);
      expect(newState.todos[1].id).toBe(88);
      expect(newState.todos[1].completed).toBeTrue();
      expect(newState.isLoading).toBeFalse();
      expect(newState.errors).toBe('');
    });
  });
});
