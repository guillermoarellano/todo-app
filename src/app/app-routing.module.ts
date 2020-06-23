import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoPageComponent } from './todo-page/todo-page.component';

export const rootPath = '';

const routes: Routes = [
  {
    path: rootPath,
    component: TodoPageComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
