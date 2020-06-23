import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoPresentationComponent } from './add-todo-presentation.component';
import { FormsModule } from '@angular/forms';
import { TODOItem } from '@app/shared/models/interfaces';

describe('AddTodoPresentationComponent', () => {
  let component: AddTodoPresentationComponent;
  let fixture: ComponentFixture<AddTodoPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ AddTodoPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoPresentationComponent);
    component = fixture.componentInstance;
    component.currentTODO = {title: 'Random', text: 'Some note'} as TODOItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
