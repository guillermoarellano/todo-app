import { Injectable, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TODOItem } from '@app/shared/models/interfaces';

@Injectable()
export class AddTodoService {
  public get currentTODO(): TODOItem {
    return this.CurrentTODO;
  }
  public set currentTODO(value: TODOItem) {
    this.CurrentTODO = { ...value };
  }

  public todoItemEdit = new EventEmitter<TODOItem>();
  public todoItemCreate = new EventEmitter<TODOItem>();
  private CurrentTODO: TODOItem = ({title: '', text: ''}) as TODOItem;

  public save(form: NgForm) {
    if (!form.valid) {
      console.log('Invalid form!');
      return;
    }

    const todoToSave = {
      ...this.currentTODO
    };

    if (todoToSave.id) {
      this.todoItemEdit.next(todoToSave);
      form.resetForm();
    } else {
      this.todoItemCreate.next(todoToSave);
      form.resetForm();
    }
  }
}
