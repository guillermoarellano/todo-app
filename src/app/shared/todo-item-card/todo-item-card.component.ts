import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { TODOItem } from '../models/interfaces';

@Component({
  selector: 'app-todo-item-card',
  templateUrl: './todo-item-card.component.html',
  styleUrls: ['./todo-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemCardComponent {
  @Input() public todoItem: TODOItem;
  @Input() public readOnlyTODO: boolean;
  @Output() public todoDelete = new EventEmitter<string>();
  @Output() public todoEdit = new EventEmitter<TODOItem>();

  public deleteClick() {
    this.todoDelete.emit(this.todoItem.id);
  }

  public editClick() {
    this.todoEdit.emit(this.todoItem);
  }
}
