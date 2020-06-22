import { TestBed } from '@angular/core/testing';

import { TodoListService } from './todo-list.service';

describe('TodoListService', () => {
  let service: TodoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListService]
    });
    service = TestBed.inject(TodoListService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
