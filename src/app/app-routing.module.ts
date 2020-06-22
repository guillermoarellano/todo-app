import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';

export const rootPath = '';
export const completedTodoPath = 'completed-todos';

const routes: Routes = [
  {
    path: rootPath,
    component: TodoListComponent,
    pathMatch: 'full'
  },
  {
    path: completedTodoPath,
    loadChildren: () =>
      import('./todo-list-completed/todo-list-completed.module').then(
        (m) => m.TodoListCompletedModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
