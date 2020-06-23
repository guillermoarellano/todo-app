import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';




import { TodoListEffects } from './effects/todo-list.effects';
import { todoListReducers } from './reducers/todo-list.reducer';
import { TodoListSelector } from './services/todo-list.selector';

@NgModule({
  imports: [
    StoreModule.forFeature('todoList', todoListReducers),
    EffectsModule.forFeature([TodoListEffects])
  ],
  providers: [TodoListSelector]
})
export class TodoListStoreModule {}
