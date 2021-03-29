import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TodoListSelector } from './todo-list.selector.service';
import { TodoListState } from '../reducers';
import { TODOItem } from '@app/shared/models/interfaces';
import {
  todoListSelectorFn,
  completedTodosSelectorFn,
  todoItemForEditSelectorFn,
  isLoadingFn
} from '../todo-list.selector';

describe('Todo Selector Service', () => {
  let service: TodoListSelector;
  let mockStore: MockStore<TodoListState>;

  const dummyItems: TODOItem[] = [{
    id: 0,
    createdAt: '2020-07-23T19:34:20.073Z',
    modifiedAt: '2020-07-23T19:34:20.073Z',
    title: 'Example TODO item',
    text: 'This example item is created automatically on startup.',
  },
  {
    id: 1,
    createdAt: '2020-07-23T19:34:20.073Z',
    modifiedAt: '2020-07-23T19:34:20.073Z',
    title: 'Example TODO item',
    text: 'This example item is created automatically on startup.',
    completed: true
  },
  {
    id: 3,
    createdAt: '2020-07-23T19:34:20.073Z',
    modifiedAt: '2020-07-23T19:34:20.073Z',
    title: 'Example TODO item',
    text: 'This example item is created automatically on startup.',
  }];

  const initialTodoState: TodoListState = {
    todos: dummyItems,
    isLoading: false,
    errors: '',
  };

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        TodoListSelector,
        provideMockStore({ initialState: initialTodoState }),
      ],
    });

    service = TestBed.inject(TodoListSelector);
    mockStore = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method: getTodoList$', () => {
    it('should return todos array property from store', (done) => {
      mockStore.overrideSelector(todoListSelectorFn, dummyItems );
      const result$ = service.getTodoList$();

      result$.subscribe((response) => {
        expect(response.length).toEqual(3);
        expect(response[0]).toEqual({
          id: 0,
          createdAt: '2020-07-23T19:34:20.073Z',
          modifiedAt: '2020-07-23T19:34:20.073Z',
          title: 'Example TODO item',
          text: 'This example item is created automatically on startup.',
        });
        done();
      });
    });
  });

  describe('Method: getCompletedTodoList$', () => {
    it('should return an array of completed Todos from the store', (done) => {
      mockStore.overrideSelector(completedTodosSelectorFn, [{
        id: 1,
        createdAt: '2020-07-23T19:34:20.073Z',
        modifiedAt: '2020-07-23T19:34:20.073Z',
        title: 'Example TODO item',
        text: 'This example item is created automatically on startup.',
        completed: true
      }]);
      const result$ = service.getCompletedTodoList$();

      result$.subscribe((response) => {
        expect(response.length).toEqual(1);
        expect(response[0]).toEqual({
          id: 1,
          createdAt: '2020-07-23T19:34:20.073Z',
          modifiedAt: '2020-07-23T19:34:20.073Z',
          title: 'Example TODO item',
          text: 'This example item is created automatically on startup.',
          completed: true
        });
        done();
      });
    });
  });

  describe('Method: getTodoItemForEdit$', () => {
    it('should return a todo object to edit from the store', (done) => {
      mockStore.overrideSelector(todoItemForEditSelectorFn, {
        id: 1,
        createdAt: '2020-07-23T19:34:20.073Z',
        modifiedAt: '2020-07-23T19:34:20.073Z',
        title: 'Example TODO item',
        text: 'This example item is created automatically on startup.',
        completed: true
      });
      const result$ = service.getTodoItemForEdit$();

      result$.subscribe((response) => {
        expect(response).toEqual({
          id: 1,
          createdAt: '2020-07-23T19:34:20.073Z',
          modifiedAt: '2020-07-23T19:34:20.073Z',
          title: 'Example TODO item',
          text: 'This example item is created automatically on startup.',
          completed: true
        });
        done();
      });
    });
  });

  describe('Method: getIsLoading$', () => {
    it('should return boolean property indicating loading process from the store', (done) => {
      mockStore.overrideSelector(isLoadingFn, false);
      const result$ = service.getIsLoading$();

      result$.subscribe((response) => {
        expect(response).toEqual(false);
        done();
      });
    });
  });
});
