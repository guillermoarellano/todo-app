import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TodoListService } from '@app/core/todo-list.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-todo-list-completed',
  templateUrl: './todo-list-completed.component.html',
  styleUrls: ['./todo-list-completed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListCompletedComponent {
  // public completedTodoList$ = this.todoListService.completedTodoList$;

  public completedTodoList$ = of([
    {
        id: 0,
        createdAt: '2020-06-22T20:30:44.634Z',
        modifiedAt: '2020-06-22T20:30:44.634Z',
        title: 'Example TODO item',
        text: 'This example item is created automatically on startup.'
    }
]);

  constructor(private todoListService: TodoListService) {}
}
