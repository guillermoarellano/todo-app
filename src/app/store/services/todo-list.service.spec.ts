import { TestBed } from '@angular/core/testing';

import { TodoListDispatcher } from './todo-list.dispatcher';

describe('TodoListDispatcher', () => {
  let service: TodoListDispatcher;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListDispatcher);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
