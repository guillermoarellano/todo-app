import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TODOItem } from '@app/shared/models/interfaces';

@Component({
  selector: 'app-add-todo-presentation',
  templateUrl: './add-todo-presentation.component.html',
  styleUrls: ['./add-todo-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoPresentationComponent {
  @Input() public currentTODO: TODOItem;

  @Input() public isLoading = false;

  @Output() public saved = new EventEmitter<NgForm>();

  public save(form: NgForm) {
    this.saved.emit(form);
  }
}
