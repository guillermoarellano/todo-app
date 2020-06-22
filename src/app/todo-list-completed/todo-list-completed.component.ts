import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-list-completed',
  templateUrl: './todo-list-completed.component.html',
  styleUrls: ['./todo-list-completed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListCompletedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
