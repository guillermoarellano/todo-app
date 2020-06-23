import { Component, ChangeDetectionStrategy, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TODOItem } from '@app/shared/models/todoitem';
import { AddTodoService } from './service/add-todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent{
  @Input()
  public isLoading = false;

  public get currentTODO(): TODOItem {
    return this.addTodoService.currentTODO;
  }
  @Input()
  public set currentTODO(todo: TODOItem) {
    this.addTodoService.currentTODO = todo;
  }

  @Output()
  public get todoItemEdit() {
    return this.addTodoService.todoItemEdit;
  }

  @Output()
  public get todoItemCreate() {
    return this.addTodoService.todoItemCreate;
  }

  constructor(private addTodoService: AddTodoService) {}

  public save(form: NgForm) {
    this.addTodoService.save(form);
  }
}
