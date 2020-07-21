import { Injectable } from '@angular/core';

import { TODOItem } from '@app/shared/models/interfaces';
import { TodoListSelector, TodoListDispatcher } from '@app/store/services';

@Injectable()
export class TodoListService {
  public isLoading$ = this.todoListSelector.getIsLoading$();

  public todoList$ = this.todoListSelector.getTodoList$();
  public completedTodoList$ = this.todoListSelector.getCompletedTodoList$();

  constructor(
    private todoListSelector: TodoListSelector,
    private todoListDispatcher: TodoListDispatcher
  ) {}

  public loadTodoList(): any {
    this.todoListDispatcher.loadTodoList();
  }

  public setTodoItemForEdit(todoItem: TODOItem): any {
    this.todoListDispatcher.setTodoItemForEdit(todoItem);
  }

  public editTodo(todoItem: TODOItem): any {
    this.todoListDispatcher.updateTodoItem(todoItem);
  }

  public getTodoForEdit$() {
    return this.todoListSelector.getTodoItemForEdit$();
  }

  public addTodo(todo: TODOItem) {
    this.todoListDispatcher.addTodo(todo);
  }

  public deleteTodo(id: string) {
    this.todoListDispatcher.deleteTodo(+id);
  }
}
