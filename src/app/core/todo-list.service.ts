import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TODOItem } from '@app/shared/models/todoitem';

@Injectable()
export class TodoListService {
  private todoListUrl = '//localhost:8080/todos';

  // public isLoading$ = this.todoListSelector.getIsLoading$();

  // public todoList$ = this.todoListSelector.getTodoList$();
  // public completedTodoList$ = this.todoListSelector.getCompletedTodoList$();

  constructor(
    private httpClient: HttpClient
  ) {}

  public getTodos() {
    return this.httpClient.get<TODOItem[]>(this.todoListUrl);
  }

  public loadTodoList(): any {
    // this.todoListActions.loadTodoList();
  }

  public setTodoItemForEdit(todoItem: TODOItem): any {
    // this.todoListActions.setTodoItemForEdit(todoItem);
  }

  public editTodo(todoItem: TODOItem): any {
    // this.todoListActions.todoItemUpdated(todoItem);
  }

  public getTodoForEdit$() {
    // return this.todoListSelector.getTodoItemForEdit$();
  }

  public addTodo(todo: TODOItem) {
    // this.todoListActions.addTodo(todo);
  }

  public deleteTodo(id: string) {
    // this.todoListActions.deleteTodo(id);
  }
}
