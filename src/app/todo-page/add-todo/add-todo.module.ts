import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { AddTodoComponent } from './add-todo.component';
import { AddTodoPresentationComponent } from './add-todo-presentation/add-todo-presentation.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule
  ],
  declarations: [AddTodoComponent, AddTodoPresentationComponent ],
  exports: [AddTodoComponent]
})
export class AddTodoModule { }
