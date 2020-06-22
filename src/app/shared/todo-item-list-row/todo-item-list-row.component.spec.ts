import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemListRowComponent } from './todo-item-list-row.component';

describe('TodoItemListRowComponent', () => {
  let component: TodoItemListRowComponent;
  let fixture: ComponentFixture<TodoItemListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
