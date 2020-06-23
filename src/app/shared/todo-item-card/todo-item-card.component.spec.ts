import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemCardComponent } from './todo-item-card.component';
import { TODOItem } from '../models/interfaces';

describe('TodoItemCardComponent', () => {
  let component: TodoItemCardComponent;
  let fixture: ComponentFixture<TodoItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemCardComponent);
    component = fixture.componentInstance;
    component.todoItem = { title: 'Cool Note', text: 'Some note text'} as TODOItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
