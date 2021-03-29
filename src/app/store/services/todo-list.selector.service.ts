import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { TodoListState } from '../reducers/todo-list.reducer';
import {
  todoListSelectorFn,
  completedTodosSelectorFn,
  todoItemForEditSelectorFn,
  isLoadingFn
} from '../todo-list.selector';

@Injectable()
export class TodoListSelector {
  constructor(private store: Store<TodoListState>) {}

  public getTodoList$() {
    return this.store.select(todoListSelectorFn);
  }

  public getCompletedTodoList$() {
    return this.store.select(completedTodosSelectorFn);
  }

  public getTodoItemForEdit$() {
    return this.store.select(todoItemForEditSelectorFn);
  }

  public getIsLoading$() {
    return this.store.select(isLoadingFn);
  }
}
