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

  private preferedShowModeKey = 'typeToShow';
  public get typeToShow(): string {
    return window.localStorage.getItem(this.preferedShowModeKey) || 'table';
  }
  public set typeToShow(showMode: string) {
    window.localStorage.setItem(this.preferedShowModeKey, showMode);
  }

  constructor() {}

  public ngOnInit() {}

  public showCards() {
    this.typeToShow = 'cards';
  }

  public showTable() {
    this.typeToShow = 'table';
  }
}
