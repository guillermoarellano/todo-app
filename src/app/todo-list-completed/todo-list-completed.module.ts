import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TodoListCompletedComponent } from './todo-list-completed.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListCompletedComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoListCompletedModule { }
