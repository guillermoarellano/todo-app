import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TodoItemListRowComponent } from './todo-item-list-row/todo-item-list-row.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [TodoItemListRowComponent],
  exports: [TodoItemListRowComponent],
})
export class SharedModule {}
