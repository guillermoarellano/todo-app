import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListComponent } from './todo-list.component';
import { ListComponent } from './list/list.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoListComponent, ListComponent, CardsComponent],
  exports: [TodoListComponent]
})
export class TodoListModule { }
