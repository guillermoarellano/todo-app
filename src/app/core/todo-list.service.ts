import { Injectable } from '@angular/core';

import { TODOItem } from '@app/shared/models/todoitem';
import { TodoListActions } from '@app/store/actions';
import { TodoListSelector } from '@app/store/services';

@Injectable()
export class TodoListService {
  public isLoading$ = this.todoListSelector.getIsLoading$();

  public todoList$ = this.todoListSelector.getTodoList$();
  public completedTodoList$ = this.todoListSelector.getCompletedTodoList$();

  constructor(
    private todoListSelector: TodoListSelector,
    private todoListActions: TodoListActions
  ) {}

  public loadTodoList(): any {
    this.todoListActions.loadTodoList();
  }

  public setTodoItemForEdit(todoItem: TODOItem): any {
    this.todoListActions.setTodoItemForEdit(todoItem);
  }

  public editTodo(todoItem: TODOItem): any {
    this.todoListActions.updateTodoItem(todoItem);
  }

  public getTodoForEdit$() {
    return this.todoListSelector.getTodoItemForEdit$();
  }

  public addTodo(todo: TODOItem) {
    this.todoListActions.addTodo(todo);
  }

  public deleteTodo(id: string) {
    this.todoListActions.deleteTodo(id);
  }
}
