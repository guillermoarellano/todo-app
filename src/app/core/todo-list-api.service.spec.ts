import { TestBed } from '@angular/core/testing';

import { TodoListAPIService } from './todo-list-api.service';

describe('TodoListAPIService', () => {
  let service: TodoListAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
