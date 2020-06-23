import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TodoItemListRowComponent } from './todo-item-list-row/todo-item-list-row.component';
import { TodoItemCardComponent } from './todo-item-card/todo-item-card.component';
import { TodoListModule } from './todo-list/todo-list.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, TodoListModule],
  declarations: [TodoItemListRowComponent, TodoItemCardComponent],
  exports: [TodoItemListRowComponent, TodoItemCardComponent, TodoListModule],
})
export class SharedModule {}
