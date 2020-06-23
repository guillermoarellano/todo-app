import { TestBed } from '@angular/core/testing';

import { AddTodoService } from './add-todo.service';
import { AddTodoModule } from '../add-todo.module';

describe('AddTodoService', () => {
  let service: AddTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddTodoService]
    });
    service = TestBed.inject(AddTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
