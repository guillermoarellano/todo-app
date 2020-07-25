import { TestBed } from '@angular/core/testing';

import { TodoListService } from './todo-list.service';
import { TodoListSelector, TodoListDispatcher } from '@app/store';
import { TODOItem } from '@app/shared/models/interfaces';

describe('TodoListService', () => {
  let service: TodoListService;
  let mockListSelector: TodoListSelector;
  let mockListDispatcher: TodoListDispatcher;

  beforeEach(() => {
    mockListSelector = jasmine.createSpyObj([
      'getTodoItemForEdit$',
      'getIsLoading$',
      'getTodoList$',
      'getCompletedTodoList$',
    ]);

    mockListDispatcher = jasmine.createSpyObj([
      'loadTodoList',
      'setTodoItemForEdit',
      'updateTodoItem',
      'addTodo',
      'deleteTodo',
    ]);

    TestBed.configureTestingModule({
      providers: [
        TodoListService,
        { provide: TodoListSelector, useValue: mockListSelector },
        { provide: TodoListDispatcher, useValue: mockListDispatcher },
      ],
    });
    service = TestBed.inject(TodoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method: loadTodoList', () => {
    it('should call loadTodoList in the Dispatcher service', () => {
      service.loadTodoList();

      expect(mockListDispatcher.loadTodoList).toHaveBeenCalledTimes(1);
    });
  });

  describe('Method: setTodoItemForEdit', () => {
    it('should call setTodoItemForEdit in the Dispatcher service', () => {
      const dummyTodo: TODOItem = {
        id: 0,
        createdAt: '2020-07-23T19:34:20.073Z',
        modifiedAt: '2020-07-23T19:34:20.073Z',
        title: 'Example TODO item',
        text: 'This example item is created automatically on startup.',
      };

      service.setTodoItemForEdit(dummyTodo);

      expect(mockListDispatcher.setTodoItemForEdit).toHaveBeenCalledTimes(1);
      expect(mockListDispatcher.setTodoItemForEdit).toHaveBeenCalledWith(
        dummyTodo
      );
    });
  });

  describe('Method: editTodo', () => {
    it('should call updateTodoItem in the Dispatcher service', () => {
      const dummyTodo: TODOItem = {
        id: 0,
        createdAt: '2020-07-23T19:34:20.073Z',
        modifiedAt: '2020-07-23T19:34:20.073Z',
        title: 'Example TODO item',
        text: 'This example item is created automatically on startup.',
      };

      service.editTodo(dummyTodo);

      expect(mockListDispatcher.updateTodoItem).toHaveBeenCalledTimes(1);
      expect(mockListDispatcher.updateTodoItem).toHaveBeenCalledWith(dummyTodo);
    });
  });

  describe('Method: getTodoForEdit$', () => {
    it('should retrieve getTodoForEdit$ Observable property from TodoListSelector service', () => {
      const tempVar = service.getTodoForEdit$();

      expect(mockListSelector.getTodoItemForEdit$).toHaveBeenCalledTimes(1);
    });
  });

  describe('Method: addTodo', () => {
    it('should call addTodo method in the Dispatcher service', () => {
      const dummyTodo: TODOItem = {
        id: 0,
        createdAt: '2020-07-23T19:34:20.073Z',
        modifiedAt: '2020-07-23T19:34:20.073Z',
        title: 'Example TODO item',
        text: 'This example item is created automatically on startup.',
      };

      service.addTodo(dummyTodo);

      expect(mockListDispatcher.addTodo).toHaveBeenCalledTimes(1);
      expect(mockListDispatcher.addTodo).toHaveBeenCalledWith(dummyTodo);
    });
  });

  describe('Method: deleteTodo', () => {
    it('should call deleteTodo method in the Dispatcher service', () => {
      const dummyId = '2';

      service.deleteTodo(dummyId);

      expect(mockListDispatcher.deleteTodo).toHaveBeenCalledTimes(1);
      expect(mockListDispatcher.deleteTodo).toHaveBeenCalledWith(2);
    });
  });
});
