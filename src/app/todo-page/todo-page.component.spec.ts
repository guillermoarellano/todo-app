import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPageComponent } from './todo-page.component';
import { TodoListService } from '@app/core/todo-list.service';
import { TodoListSelector } from '@app/store';
import { StoreModule } from '@ngrx/store';

describe('TodoPageComponent', () => {
  let component: TodoPageComponent;
  let fixture: ComponentFixture<TodoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [ TodoPageComponent ],
      providers: [TodoListService, TodoListSelector]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
