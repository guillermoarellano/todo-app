import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TodoItemListRowComponent } from './todo-item-list-row/todo-item-list-row.component';
import { TodoItemCardComponent } from './todo-item-card/todo-item-card.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [TodoItemListRowComponent, TodoItemCardComponent, TodoListComponent],
  exports: [TodoItemListRowComponent, TodoItemCardComponent, TodoListComponent],
})
export class SharedModule {}
