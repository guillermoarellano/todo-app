import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TodoListDispatcher } from './todo-list.dispatcher.service';
import { TodoListState } from '../reducers';
import { TODOItem } from '@app/shared/models/interfaces';
import { TodoActions } from '../actions';

describe('TodoListDispatcher', () => {
  let service: TodoListDispatcher;
  let mockStore: MockStore<TodoListState>;

  const dummyItem: TODOItem = {
    id: 0,
    createdAt: '2020-07-23T19:34:20.073Z',
    modifiedAt: '2020-07-23T19:34:20.073Z',
    title: 'Example TODO item',
    text: 'This example item is created automatically on startup.'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoListDispatcher,
        provideMockStore({})
      ],
    });

    service = TestBed.inject(TodoListDispatcher);
    mockStore = TestBed.inject(MockStore);

    spyOn(mockStore, 'dispatch').and.callFake(() => {});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method: loadTodoList', () => {
    it('should dispatch LoadTodos action to store service', () => {
      service.loadTodoList();

      expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
      expect(mockStore.dispatch).toHaveBeenCalledWith(TodoActions.LoadTodos());
    });
  });

  describe('Method: addTodo', () => {
    it('should dispatch CreateTodo action to store service', () => {
      const dummyNoteParam = { title: dummyItem.title, text: dummyItem.text };
      service.addTodo(dummyItem);

      expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
      expect(mockStore.dispatch).toHaveBeenCalledWith(TodoActions.CreateTodo(dummyNoteParam));
    });
  });

  describe('Method: updateTodoItem', () => {
    it('should dispatch UpdateTodo action to store service', () => {
      service.updateTodoItem(dummyItem);

      expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
      expect(mockStore.dispatch).toHaveBeenCalledWith(TodoActions.UpdateTodo({ todo: dummyItem }));
    });
  });

  describe('Method: setTodoItemForEdit', () => {
    it('should dispatch SetTodoItemForEdit action to store service', () => {
      service.setTodoItemForEdit(dummyItem);

      expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
      expect(mockStore.dispatch).toHaveBeenCalledWith(TodoActions.SetTodoItemForEdit({ todo: dummyItem }));
    });
  });

  describe('Method: deleteTodo', () => {
    it('should dispatch DeleteTodo action to store service', () => {
      service.deleteTodo(0);

      expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
      expect(mockStore.dispatch).toHaveBeenCalledWith(TodoActions.DeleteTodo({ todoId: 0 }));
    });
  });

  describe('Method: todoItemCompleted', () => {
    it('should dispatch TodoItemCompleted action to store service', () => {
      service.todoItemCompleted('0');

      expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
      expect(mockStore.dispatch).toHaveBeenCalledWith(TodoActions.TodoItemCompleted({ todoId: 0 }));
    });
  });
});
