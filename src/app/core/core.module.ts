import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TodoListService } from './todo-list.service';
import { TodoListAPIService } from './todo-list-api.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, CommonModule],
  providers: [TodoListService, TodoListAPIService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'Core is already loaded. Import it in the AppModule only');
    }
  }
}

