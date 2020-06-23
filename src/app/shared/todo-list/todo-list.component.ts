import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @Input() public data: any;
  @Input() public cardRef: any;
  @Input() public tableRef: any;

  public typeToShow = 'cards';

  constructor() {}

  public ngOnInit() {}

  public showCards() {
    this.typeToShow = 'cards';
  }

  public showTable() {
    this.typeToShow = 'table';
  }
}
