import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodoListService } from '@app/core/todo-list.service';
import { TODOItem } from '@app/shared/models/todoitem';
import { of } from 'rxjs';
import { TodoListActions } from '@app/store/actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoPageComponent implements OnInit {
  public todoList$ = this.todoListService.todoList$;
  public selectedTodoForEdit$ = this.todoListService.getTodoForEdit$();
  public isLoading$ = this.todoListService.isLoading$;

  constructor(private todoListService: TodoListService) {}

  public ngOnInit(): void {
    this.todoListService.loadTodoList();
  }

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
