import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { TodoPageComponent } from './todo-page.component';
import { AddTodoModule } from './add-todo/add-todo.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AddTodoModule
  ],
  declarations: [TodoPageComponent],
})
export class TodoPageModule { }
