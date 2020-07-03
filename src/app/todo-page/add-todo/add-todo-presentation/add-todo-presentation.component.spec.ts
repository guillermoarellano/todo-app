import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AddTodoPresentationComponent } from './add-todo-presentation.component';
import { FormsModule } from '@angular/forms';
import { TODOItem } from '@app/shared/models/interfaces';

describe('AddTodoPresentationComponent', () => {
  let component: AddTodoPresentationComponent;
  let fixture: ComponentFixture<AddTodoPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AddTodoPresentationComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTodoPresentationComponent);
    component = fixture.componentInstance;
    component.currentTODO = { title: 'Random', text: 'Some note' } as TODOItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
