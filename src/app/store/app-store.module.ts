import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TodoListEffects } from './effects';
import { todoListReducers } from './reducers';
import { TodoListSelector, TodoListDispatcher } from './services';

@NgModule({
  imports: [
    StoreModule.forFeature('todoList', todoListReducers),
    EffectsModule.forFeature([TodoListEffects])
  ],
  providers: [TodoListSelector, TodoListDispatcher]
})
export class TodoListStoreModule {}
