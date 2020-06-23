import { TestBed } from '@angular/core/testing';

import { TodoListAPIService } from './todo-list-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('TodoListAPIService', () => {
  let service: TodoListAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TodoListAPIService]
    });
    service = TestBed.inject(TodoListAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
