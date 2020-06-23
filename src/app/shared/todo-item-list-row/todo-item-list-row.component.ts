import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { TODOItem } from '../models/todoitem';

@Component({
  selector: 'app-todo-item-list-row',
  templateUrl: './todo-item-list-row.component.html',
  styleUrls: ['./todo-item-list-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemListRowComponent {
  @Input() public todoItem: TODOItem;
  @Input() public readOnlyTODO: boolean;
  @Output() public todoDelete = new EventEmitter();
  @Output() public todoEdit = new EventEmitter();
  @Output() public todoComplete = new EventEmitter<TODOItem>();

  public completeClick() {
    const newTodo = {
      ...this.todoItem,
      completed: !this.todoItem.completed
    };

    this.todoComplete.emit(newTodo);
  }

  public deleteClick() {
    this.todoDelete.emit(this.todoItem.id);
  }

  public editClick() {
    this.todoEdit.emit(this.todoItem);
  }
}
