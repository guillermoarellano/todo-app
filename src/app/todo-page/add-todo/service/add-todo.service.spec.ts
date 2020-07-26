import { TestBed } from '@angular/core/testing';

import { AddTodoService } from './add-todo.service';
import { NgForm } from '@angular/forms';
import { TODOItem } from '@app/shared/models/interfaces';

describe('AddTodoService', () => {
  let service: AddTodoService;
  let mockForm: NgForm;
  let dummyItem: TODOItem;

  beforeEach(() => {
    mockForm = {
      valid: true,
      resetForm: () => {}
    } as NgForm;

    dummyItem = {
      id: 0,
      createdAt: '2020-07-23T19:34:20.073Z',
      modifiedAt: '2020-07-23T19:34:20.073Z',
      title: 'Example TODO item',
      text: 'This example item is created automatically on startup.'
    };

    TestBed.configureTestingModule({
      providers: [AddTodoService],
    });
    service = TestBed.inject(AddTodoService);

    service.currentTODO = dummyItem;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Method: save', () => {
    it('should return "Invalid form!" if form parameter not valid', () => {
      mockForm = { valid: false } as NgForm;
      spyOn(console, 'log');

      const response = service.save(mockForm);

      expect(response).toBeUndefined();
      expect(console.log).toHaveBeenCalledWith('Invalid form!');
    });

    it('should reset form when form parameter is valid', () => {
      spyOn(mockForm, 'resetForm');

      service.save(mockForm);

      expect(mockForm.resetForm).toHaveBeenCalledTimes(1);
    });

    it('should call todoItemEdit.next if currentTODO.id is truthy', () => {
      dummyItem.id = 1;
      service.currentTODO = dummyItem;
      spyOn(service.todoItemEdit, 'next');

      service.save(mockForm);

      expect(service.todoItemEdit.next).toHaveBeenCalledTimes(1);
      expect(service.todoItemEdit.next).toHaveBeenCalledWith(dummyItem);
    });

    it('should call todoItemCreate.next if currentTODO.id is falsy', () => {
      spyOn(service.todoItemCreate, 'next');

      service.save(mockForm);

      expect(service.todoItemCreate.next).toHaveBeenCalledTimes(1);
      expect(service.todoItemCreate.next).toHaveBeenCalledWith(dummyItem);
    });

  });
});
