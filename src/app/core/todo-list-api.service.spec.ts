import { TestBed } from '@angular/core/testing';

import { TodoListAPIService } from './todo-list-api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { APIInterface, TODOItem } from '@app/shared/models/interfaces';

describe('TodoListAPIService', () => {
  let service: TodoListAPIService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoListAPIService],
    });

    service = TestBed.inject(TodoListAPIService);
    mockHttp = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method: getTodos', () => {
    it('should call http GET method', () => {
      service.getTodos().subscribe();
      const req = mockHttp.expectOne('//localhost:8080/todos');
      expect(req.request.method).toEqual('GET');
      mockHttp.verify();
    });
  });

  describe('Method: createTodo', () => {
    it('should call http POST method', () => {
      const dummyItem: APIInterface = {
        title: 'Some Title',
        text: 'Some Text description',
      };

      service.createTodo(dummyItem).subscribe();
      const req = mockHttp.expectOne('//localhost:8080/todos');
      expect(req.request.method).toEqual('POST');
      mockHttp.verify();
    });
  });

  describe('Method: deleteTodo', () => {
    it('should call http DELETE method', () => {
      const dummyId = 1;

      service.deleteTodo(dummyId).subscribe();
      const req = mockHttp.expectOne(`//localhost:8080/todos/${dummyId}`);
      expect(req.request.method).toEqual('DELETE');
      mockHttp.verify();
    });
  });

  describe('Method: editTodo', () => {
    it('should call http PUT method', () => {
      const dummyItem: TODOItem = {
        id: 0,
        createdAt: '2020-07-23T19:34:20.073Z',
        modifiedAt: '2020-07-23T19:34:20.073Z',
        title: 'Example TODO item',
        text: 'This example item is created automatically on startup.'
      };

      service.editTodo(dummyItem).subscribe();
      const req = mockHttp.expectOne(`//localhost:8080/todos/${dummyItem.id}`);
      expect(req.request.method).toEqual('PUT');
      mockHttp.verify();
    });
  });
});
