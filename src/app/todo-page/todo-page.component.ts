import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodoListService } from '@app/core/todo-list.service';
import { TODOItem } from '@app/shared/models/todoitem';
import { of } from 'rxjs';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoPageComponent implements OnInit {
  // public todoList$ = this.todoListService.todoList$;
  public todoList$ = of([
    {
      id: 0,
      createdAt: '2020-06-22T20:30:44.634Z',
      modifiedAt: '2020-06-22T20:30:44.634Z',
      title: 'Example TODO item',
      text: 'This example item is created automatically on startup.',
    },
  ]);
  // public selectedTodoForEdit$ = this.todoListService.getTodoForEdit$();
  public selectedTodoForEdit$ = of({});
  // public isLoading$ = this.todoListService.isLoading$;
  public isLoading$ = of(false);

  constructor(private todoListService: TodoListService) {}

  public ngOnInit(): void {}

  public deleteTodo(id: string) {
    this.todoListService.deleteTodo(id);
  }

  public setTodoForEdit(todoItem: TODOItem) {
    this.todoListService.setTodoItemForEdit(todoItem);
  }

  /**
   * todoItemEdit
   */
  public todoItemEdit(todoItem: TODOItem) {
    this.todoListService.editTodo(todoItem);
  }

  /**
   * todoItemCreate
   */
  public todoItemCreate(todoItem: TODOItem) {
    this.todoListService.addTodo(todoItem);
  }

  public trackByFn(index, item) {
    return item.id;
  }
}
