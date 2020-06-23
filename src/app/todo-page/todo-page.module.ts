import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { TodoPageComponent } from './todo-page.component';
import { AddTodoComponent } from './add-todo/add-todo.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TodoPageComponent, AddTodoComponent],
})
export class TodoPageModule { }
