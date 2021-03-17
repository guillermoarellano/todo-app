import { TestBed } from '@angular/core/testing';
import { TodoListAPIService } from '@app/core/todo-list-api.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { TodoListState } from '../reducers';
import { TodoListEffects } from './todo-list.effects';
import { Actions } from '@ngrx/effects';
import { TodoActions } from '../actions';

describe('TodoListEffects Tests', () => {
  let actions$: Observable<any>;
  let effects: TodoListEffects;
  let mockStore: MockStore<TodoListState>;

  const mockTodoItem = {
    id: 0,
    createdAt: 'someDate',
    modifiedAt: 'someModifiedDate',
    title: 'This is a mock ToDo title',
    text: 'This is a mock Todo text',
    completed: false
  };

  const initialTodoState: TodoListState = {
    todos: [],
    isLoading: false,
    errors: ''
  };

  const fakeTodoListAPIService = jasmine.createSpyObj<TodoListAPIService>([
    'getTodos',
    'createTodo',
    'deleteTodo',
    'editTodo'
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        TodoListEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: initialTodoState }),
        {
          provide: TodoListAPIService,
          useValue: fakeTodoListAPIService
        }
      ]
    });

    mockStore = TestBed.inject(MockStore);
    actions$ = TestBed.inject(Actions);
    effects = TestBed.inject(TodoListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('Effect: loadTodoList$', () => {
    it('should call LoadTodosSuccess action', (done) => {
      actions$ = of(TodoActions.LoadTodos);
      fakeTodoListAPIService.getTodos.and.returnValue(of([mockTodoItem]));

      effects.loadTodoList$.subscribe((res) => {
        expect(res).toEqual(
          TodoActions.LoadTodosSuccess({ todos: [mockTodoItem] })
        );
        done();
      });
    });

    it('should call LoadTodosError action when error', (done) => {
      actions$ = of(TodoActions.LoadTodos);
      fakeTodoListAPIService.getTodos.and.returnValue(
        throwError(new Error('oops!'))
      );

      effects.loadTodoList$.subscribe((res) => {
        expect(res).toEqual(
          TodoActions.LoadTodosError({ error: new Error('oops!') })
        );
        done();
      });
    });
  });

  describe('Effect: createTodo$', () => {
    it('should call LoadTodos action', (done) => {
      actions$ = of(TodoActions.CreateTodo);
      fakeTodoListAPIService.createTodo.and.returnValue(of([]));

      effects.createTodo$.subscribe((res) => {
        expect(res).toEqual(TodoActions.LoadTodos());
        done();
      });
    });

    it('should call CreateTodoError action when error', (done) => {
      actions$ = of(TodoActions.CreateTodo);
      fakeTodoListAPIService.createTodo.and.returnValue(
        throwError(new Error('oops!'))
      );

      effects.createTodo$.subscribe((res) => {
        expect(res).toEqual(
          TodoActions.CreateTodoError({ error: new Error('oops!') })
        );
        done();
      });
    });
  });

  describe('Effect: updateTodo$', () => {
    it('should call UpdateTodoSuccess action', (done) => {
      actions$ = of(TodoActions.UpdateTodo({ todo: mockTodoItem }));
      fakeTodoListAPIService.editTodo.and.returnValue(of(mockTodoItem));

      effects.updateTodo$.subscribe((res) => {
        expect(res).toEqual(
          TodoActions.UpdateTodoSuccess({ todo: mockTodoItem })
        );
        done();
      });
    });

    it('should call UpdateTodoError action when error', (done) => {
      actions$ = of(TodoActions.UpdateTodo({ todo: mockTodoItem }));
      fakeTodoListAPIService.editTodo.and.returnValue(
        throwError(new Error('oops!'))
      );

      effects.updateTodo$.subscribe((res) => {
        expect(res).toEqual(
          TodoActions.UpdateTodoError({ error: new Error('oops!') })
        );
        done();
      });
    });
  });

  describe('Effect: deleteTodo$', () => {
    it('should call DeleteTodoSuccess action', (done) => {
      actions$ = of(TodoActions.DeleteTodo({ todoId: 99 }));
      fakeTodoListAPIService.deleteTodo.and.returnValue(of({}));

      effects.deleteTodo$.subscribe((res) => {
        expect(res).toEqual(TodoActions.DeleteTodoSuccess({ todoId: 99 }));
        done();
      });
    });

    it('should call DeleteTodoError action when error', (done) => {
      actions$ = of(TodoActions.DeleteTodo({ todoId: 99 }));
      fakeTodoListAPIService.deleteTodo.and.returnValue(
        throwError(new Error('oops!'))
      );

      effects.deleteTodo$.subscribe((res) => {
        expect(res).toEqual(
          TodoActions.DeleteTodoError({ error: new Error('oops!') })
        );
        done();
      });
    });
  });
});
